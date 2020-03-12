# Opdracht 1.1 : Break The Web

# TODO HIER MOETEN DE AANTEKENINGEN KOMEN VAN DEZE OPDRACHT/HET ONDERZOEK (ZIE NOTES)



# Opdracht 1.2 : Fork je OBA

>Onderzochte website: https://isirthijs.github.io/project-1-1920


## Geteste Features 

* Afbeeldingen uitzetten
* Custom Fonts uitzetten
* Kleur uitzetten & Kleurenblindheid instellen
* Muis/Trackpad uitzetten
* Throttle internet (slow internet)
* Javascript uitzetten
* Cookies uitzetten
* localStorage uitzetten





## Devices

<details><summary>Huawei Ascend Y300</summary>

Device : Huawei Ascend Y300

Browser : Android Browser 

OS : | running Android 4.1.1

>UA : Mozilla/5.0 (Linux; U; Android 4.1.1; nl-nl; HUAWEI Y300-0100 Build/HuaweiY300-0100) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30


Het onderzoeken van dit toestel is niet gelukt, want we konden geen verbinding maken met de website zelf. De website staat gehost op `github-pages`; Wanneer we op google op github zochten kregen we gewoon resultaten dus het lag niet aan de internet-verbinding. Maar als we dan op een link naar github klikte dan kregen we een melding/pop-up: `could not connect with secure server`. Vervolgens werd je herleid naar de google-search pagina.

We hebben dit probleem niet kunnen verhelpen en uiteindelijk is het niet opgelost.

</details>



<details><summary>Apple iPod Touch</summary>

Device : Apple iPod Touch

Browser : Safari 

OS : running iOS 5.0.1

>UA : Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like MacOS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3


Het onderzoeken van dit toestel is niet gelukt, want we konden geen verbinding maken met de website zelf. De website staat gehost op `github-pages`; Wanneer we op google op github zochten kregen we gewoon resultaten dus het lag niet aan de internet-verbinding. Maar als we dan op een link naar github klikte dan kregen we een melding/pop-up: `could not connect with secure server`. Vervolgens werd je herleid naar de google-search pagina.

We hebben dit probleem niet kunnen verhelpen en uiteindelijk is het niet opgelost.

</details>



<details><summary>Windows RT 8.1</summary>

Device : Windows RT 8.1

Browser : Internet Explorer 11.0

OS : Windows 

>UA : Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; .MET4.OE; NET4.OC; Tablet PC 2.0; rv:11:0) like Gecko 


Bij het onderzoeken van de website kwamen we al snel achter een probleem; JS ES6 modules worden niet gesupport in IE 11.0! In de JS code worden meteen als eerste de verschillende modules geimporteerd, dit betekent dat het bij de eerste regel JS al fout gaat.

TODO: HIER MOET DE CANIUSE IMAGE KOMEN OVER MODULES IN IE 11.0!

</details>






## Browsers & Problemen die voorkwamen

<details><summary>Chrome</summary>

Browser (version) : Chrome 80

Device : macOS Catalina 10.15

>UA : Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36

**Afbeeldingen uitzetten**

Mijn OBA website heeft bijna afbeeldingen; alleen een logo & custom checkbox indicators. Deze zijn allemaal weg. De inputs zijn nog steeds te gebruiken omdat de `:checked` state een zwaardere `font-weight` heeft, dit verschil is moeilijk te zien en valt niet op maar is in theorie functioneel. 

De loading state bevat ook een plaatje maar dit zijn HTML elementen die vormgegeven zijn en zijn dus nog zichtbaar!

**Custom Fonts uitzetten**

>Er worden geen custom fonts gebruikt op mijn website; verder zijn er fallbacks voor alle fonts (Arial, Helvetica, sans-serif)

**Kleur uitzetten & Kleurenblindheid instellen**


**Muis/Trackpad uitzetten**

Je kan de volledige website door navigeren met `tab`; het enige probleem is dat er geen visuele feedback is omdat `*:focus { outline: none; }` in de CSS staat. Verder is de setup zo gemaakt dat het over de oude content geplaatst is met een `z-index`, de oude content is echter nogsteeds toegankelijk dmv `tab` dit betekent dat de gebruiker dus al naar pagina's kan navigeren door de header te gebruiken met `tab`.

**Throttle internet (slow internet)**

Internet throttling (slow 3G) valt niet echt op op mijn OBA website, wanneer de data geladen moet worden is er een loading state te zien. Het enige effect is dat het wat langer kan duren om de data te `fetchen`. Alle JS die er is om user-input te verwerken/events te handelen, er gaat dus niks kapot omdat de user deze `addEventListeners` pas kan triggeren wanneer de content geladen is.

**Javascript uitzetten**

Wanneer JS uitstaat kan de gebruiker alleen de header zien/gebruiken. Deze heeft echter niet veel nut omdat de content van de pagina's geladen (& gemaakt) word in JS. Dit betekent dat de website niet te gebruiken is zonder JS op het moment.

**Cookies uitzetten**

>Er worden geen cookies gebruikt op mijn website

**localStorage uitzetten**

Als localStorage uitstaat gaat de gehele website kapot, dit heeft te maken met het feit dat er geen check is of de website `access` heeft tot de localStorage. Dit betekent dat er een error ontstaat en dat JS stopt.

>Uncaught DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.

</details>





<details><summary>Firefox</summary>

Browser (version) : Firefox 74.0

Device : macOS Catalina 10.15

>UA : Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) Gecko/20100101 Firefox/74.0


**Afbeeldingen uitzetten**

Mijn OBA website heeft bijna afbeeldingen; alleen een logo & custom checkbox indicators. Deze zijn allemaal weg. De inputs zijn nog steeds te gebruiken omdat de `:checked` state een zwaardere `font-weight` heeft, dit verschil is moeilijk te zien en valt niet op maar is in theorie functioneel. 

De loading state bevat ook een plaatje maar dit zijn HTML elementen die vormgegeven zijn en zijn dus nog zichtbaar!

**Custom Fonts uitzetten**

>Er worden geen custom fonts gebruikt op mijn website; verder zijn er fallbacks voor alle fonts (Arial, Helvetica, sans-serif)

**Kleur uitzetten & Kleurenblindheid instellen**


**Muis/Trackpad uitzetten**

In Firefox kan je niet door de website navigeren, alles is kapot qua navigatie; header navigatie links, inputs & anchors zijn allemaal niet tabbaar. 

**Throttle internet (slow internet)**

Internet throttling (regular 2G) is niet hinderend, de website is snel en alles laad alsnog bijna instantly. Het enige waarbij het te merken is dat wanneer je de pagina refreshed het een seconde duurt voordat die opnieuw JS uitvoert. (dit is te zien omdat je de pagina opnieuw gegenerate ziet worden wanneer de JS ingeladen is!)

**Javascript uitzetten**

Wanneer JS uitstaat kan de gebruiker alleen de header zien/gebruiken. Deze heeft echter niet veel nut omdat de content van de pagina's geladen (& gemaakt) word in JS. Dit betekent dat de website niet te gebruiken is zonder JS op het moment.

**Cookies uitzetten**

>Er worden geen cookies gebruikt op mijn website

**localStorage uitzetten**

Als localStorage uitstaat gaat de gehele website kapot, dit komt doordat de localStorage leeg is volgens de browser. Het aparte hier is dat het zegt dat de localStorage leeg is; dit is raar omdat een lege localStorage opgevangen word in JS en dan word de data aangemaakt in JS en vervolgens in localStorage gezet.  

>TypeError: localStorage is null


</details>



<details><summary>Safari</summary>

Browser (version) : Safari 13.0.3

Device : macOS Catalina 10.15

>UA : Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15


**Afbeeldingen uitzetten**


**Custom Fonts uitzetten**

>Er worden geen custom fonts gebruikt op mijn website; verder zijn er fallbacks voor alle fonts (Arial, Helvetica, sans-serif)

**Kleur uitzetten & Kleurenblindheid instellen**


**Muis/Trackpad uitzetten**


**Throttle internet (slow internet)**


**Javascript uitzetten**

Wanneer JS uitstaat kan de gebruiker alleen de header zien/gebruiken. Deze heeft echter niet veel nut omdat de content van de pagina's geladen (& gemaakt) word in JS. Dit betekent dat de website niet te gebruiken is zonder JS op het moment.

**Cookies uitzetten**

>Er worden geen cookies gebruikt op mijn website

**localStorage uitzetten**



</details>