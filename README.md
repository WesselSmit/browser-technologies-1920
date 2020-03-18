# Opdracht 1.1 : Break The Web

<details><summary>Opdracht 1.1 : Break The Web</summary>
	
## Afbeeldingen uitzetten

>Deze kan je disabelen in chrome settings > site settings > images

https://www.baasenbaas.nl/

* Navigatie bar werkt niet meer op Baas & Baas, de navigatie items/text zijn er wel maar hebben dezelfde kleur als de achtergrond
* Logos laden niet
* Background-images werken niet p -> sommige websites gebruiken heel veel background-images ter decoratie met tekst daarover heen, deze tekst is soms niet meer leesbaar als de background-image weg is omdat de tekst dan dezelfde kleur heeft als de background-color. Een oplossing hiervoor is om de container ook een background-color te geven (wanneer images uitstaan en de background image niet geladen word kan word de background color zichtbaar en kan je de tekst alsnog lezen)
* Images missen, dit kan ervoor zorgend dat de pagina een awkward layout heeft. Een oplossing hiervoor zou om images in een container te zetten en de container een background-color te geven. Op deze manier ziet de gebruiker alsnog de skeleton UI en blijft de layout intact.
* Als een pagina bestaat uit alleen maar images en deze ontbreken dan heb je eigenlijk een lege pagina met een header en een footer. Het is niet duidelijk waarvoor de pagina bedoeld is

https://esportsgamearena.nl/

* Videos worden niet geblocked 
* `<i>` tags werken wel met unicode karakters dus het is mogelijk om “images” na te maken (zie hieronder)
￼
* Grote lege ruimtes waar images moeten zijn, vaak heb je eerst niet door dat er een image moet komen omdat er niet zo’n “image not loaded” icon komt. Dit heeft te maken met dat het background images zijn en die laten niet zo’n icon zien.
* Sommige pagina’s werken 100%, sommige pagina’s zijn totaal niet te gebruiken (bv de kalender => deze gebruikt veel images die allemaal niet laden & de tekst heeft dezelfde achtergrond kleur als de tekst waardoor deze niet meer te lezen valt)
* Kleine images ter decoratie voor tekst in buttons mist

http://grandcafedezaak.nl/home.html

* Grote witruimtes waar grote plaatjes horen te staan
* Layout misvormd maar wel bruikbaar

https://www.cmd-amsterdam.nl/

* Videos doen het 
* Gebruikt backgroundcolors waardoor de layout intact blijft
* Sommige pagina’s hebben alleen een foto waardoor de hele pagina niet meer te gebruiken valt
* Favicon.png doen het wel -> komt waarhschijnlijk omdat dit in een <link> tag staat in de <head>



## LocalStorage uitzetten (hierbij staan cookies ook uit)
>Deze kan je disabelen in chrome settings > site settings > cookies

het valt op dat sommige websites een error krijgen hierdoor: "Failed to read the 'localStorage' property from 'Window': Access is denied for this document." de websites checken waarschijnlijk of localStorage leeg is of niet. maar er word niet gecheckt of ze toestemming hebben tot de localStorage. de website kan de localStorage niet eens accessen en kan dus ook niet checken of deze leeg is.

ik denk dat de browser onderwater kijkt of je toegang hebt tot hun localStorage database

het is dus slim om eerst te checken of je toegang hebt tot localStorage voordat je deze probeert te accessen

https://www.reddit.com/r/Monstercat/new/

* Op reddit ben ik uitgelogd -> Subreddit specific styling opties doen het niet meer

https://www.twitch.tv/

* Twitch gaat helemaal kapot en laat niks zien, de homepage kan niet eens laden

https://www.linkedin.com/feed/

* Linkedin logt je ook uit 

https://soundcloud.com/

* Soundcloud logt je uit

</details>

# Opdracht 1.2 : Fork je OBA

<details><summary>Opdracht 1.2 : Fork je OBA</summary>

>Onderzochte website: https://isirthijs.github.io/project-1-1920


## Geteste Features 

* Afbeeldingen uitzetten
	* De browser prevent websites van images laten zien (dmv `<img>` & `background-image`?)
* Custom Fonts uitzetten
	* De browser prevent websites van custom fonts laten zien (dmv extensions; `.woff`, `.toff`, `,otf` etc?)
* Kleur uitzetten & Kleurenblindheid instellen
	* Er zijn vele soorten kleurenblindheid en het is eigenlijk onmogelijk om je website er mooi uit te laten zien voor alle verschillende soorten kleurenblindheid. Wel kan je ervoor zorgen dat mensen je content kunnen lezen dmv contrast.
* Muis/Trackpad uitzetten
	* De OS prevent websites van de trackpad gebruiken, kan je zonder een muis (goed) door de website navigeren?
* Throttle internet (slow internet)
	* Hoe ziet jouw website eruit als files langzamer/niet ingeladen worden?
* Javascript uitzetten
	* Hoe ziet jouw website eruit als de JS file niet geaccessed kan worden?
* Cookies uitzetten
	* Hoe ziet jouw website eruit als de cookies niet geaccessed kunnen worden?
* localStorage uitzetten
	* Hoe ziet jouw website eruit als de localStorage niet geaccessed kan worden?






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

![image](https://user-images.githubusercontent.com/45405413/76567512-32a5c300-64af-11ea-8c67-7805d40f4469.png)

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

**Kleur uitzetten & Kleurblindheid**

OBA heeft weinig kleur, eigenlijk gebruikt het grotendeels wit & zwart met af en toe een beetje rood. Dit kleurenpalet maakt voor een goed contrast.

Om ervoor te zorgen dat de website te gebruiken is voor mensen met kleurenblindheid moet het contrast goed zijn; ik heb een test gedaan op https://color.a11y.com/Contrast/

>Congratulations

>No automated color contrast issues found on the webpage tested

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

**Kleur uitzetten & Kleurblindheid**

OBA heeft weinig kleur, eigenlijk gebruikt het grotendeels wit & zwart met af en toe een beetje rood. Dit kleurenpalet maakt voor een goed contrast.

Om ervoor te zorgen dat de website te gebruiken is voor mensen met kleurenblindheid moet het contrast goed zijn; ik heb een test gedaan op https://color.a11y.com/Contrast/

>Congratulations

>No automated color contrast issues found on the webpage tested

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


**De iconen input-konden niet geladen worden op safari**

>Failed to load resource: the server responded with a status of 404 () https://isirthijs.github.io/assets/icons/book_closed.svg

**Afbeeldingen uitzetten**

Icons laden niet (maar dat was ook al zo zonder de `disable images`), het logo in de header word wel geshowed. Dit is raar want dat is een `<img>` tag en ik had verwacht dat deze niet zichtbaar zou zijn.

(uitgezet in: Develop > disable images)

**Custom Fonts uitzetten**

>Er worden geen custom fonts gebruikt op mijn website; verder zijn er fallbacks voor alle fonts (Arial, Helvetica, sans-serif)

**Kleur uitzetten & Kleurblindheid**

OBA heeft weinig kleur, eigenlijk gebruikt het grotendeels wit & zwart met af en toe een beetje rood. Dit kleurenpalet maakt voor een goed contrast.

Om ervoor te zorgen dat de website te gebruiken is voor mensen met kleurenblindheid moet het contrast goed zijn; ik heb een test gedaan op https://color.a11y.com/Contrast/

>Congratulations

>No automated color contrast issues found on the webpage tested

**Muis/Trackpad uitzetten**

Website werkt niet, het enige in wat focus kan krijgen is de safari zoekbalk. Alle elementen worden genegeerd.

**Throttle internet (slow internet)**

- Niet mogelijk zonder een extern programma te installeren (hypothese: waarschijnlijk gebeurd hetzelfde als bij chrome & firefox)

**Javascript uitzetten**

Wanneer JS uitstaat kan de gebruiker alleen de header zien/gebruiken. Deze heeft echter niet veel nut omdat de content van de pagina's geladen (& gemaakt) word in JS. Dit betekent dat de website niet te gebruiken is zonder JS op het moment.

**Cookies uitzetten**

>Er worden geen cookies gebruikt op mijn website

**localStorage uitzetten**

Wanneer localStorage uitstaat gaat de hele website kapot. Hetzelfde gebeurd er als bij chrome en firefox alleen deze keer weer met een andere error!

>SecurityError: The operation is insecure.

</details>






## Browser Feature : Theorieën, Bevindingen & Oplossingen

<details><summary>Afbeeldingen uitzetten</summary>

Afbeeldingen laden niet -> maar sommige formaten kunnen wel geladen worden.

Zo worden de volgende elementen NIET weergegeven:
* `<img>`
* `background-image`

Maar worden de volgende elementen WEL weergegeven:
* `<video>`
* favicons (zelfs als .png ipv .ico)
* `<picture>`
* unicode karakters 
* `<svg>`

Ik denk dat de browser niet kijkt naar file extension maar kijkt naar de tag/property names en deze automatisch blokkeert.

Een van de grootste problemen is dat zonder images de layouts van websites kapot gaan & er veel image reflow plaats vind. Ook zijn er veel `background-images` voor decoratieve doeleinden. Als je een witte body background-color hebt met een donkere background-image met daarover weer witte tekst dan kan je de witte tekst niet lezen omdat deze nu op de witte achtergrond staat.

Deze problemen zijn allemaal voorkombaar; gebruik een skeleton UI om image reflow te voorkomen en je layout intact te houden. Geef naast een background-image ook een background-color op. Door een background-color te gebruiken valt de tekst niet meer weg.

Verder kan je dus ook door allemaal andere tags te gebruiken images na doen; kleine iconen hoeven niet perse `<img>` te zijn maar kunnen ook `<i>` (fontawesome) of unicode karakters zijn die gestyled zijn om op een image te lijken.


</details>



<details><summary>Custom Fonts uitzetten</summary>

Custom Fonts laden niet -> de browser gebruikt fallbacks.

Ik denk dat de browser kijkt naar de extensions en op deze manier bepaald welke files er niet geladen mogen worden (`.woff`, `.toff`, `.otf` etc.)

Het kan ervoor zorgen dat de website voor een splitseconde geen tekst laat zien omdat de browser probeert het custom font te laden.

Verder heeft het niet echt een super grote impact voor de meeste websites. Bijna alle websites op het web gebruiken fallbacks en het is een commenly-used best-practice. Wel kan het ervoor zorgen dat de website er minder mooi uitziet omdat de fallback fonts minder goed samen gaan met het design.

Als oplossing kan je font-display gebruiken om de browser eerst een fallback font te laten zien terwijl het custom font word ingeladen. 

</details>


<details><summary>Kleur uitzetten & Kleurenblindheid instellen</summary>

Kleurenblindheid is een veel voorkomend probleem wat ervoor kan zorgen dat mensen sommige kleuren niet goed kunnen zien/als andere kleuren zien.

Het grootste probleem met kleurenblindheid is dat er soms bijna geen sprake is van contrast omdat 2 kleuren heel erg op elkaar lijken. Dit kan ervoor zorgen dat de gebruiker sommige content niet ziet/kan lezen.

Om dit op te lossen moet je rekening houden met het design en het gebruikte kleurenpalet. Ook kan je zelf een functie schrijven die het gebruikte kleurenpalet kan aanpassen. 

</details>



<details><summary>Muis/Trackpad uitzetten</summary>

De muis & trackpad events triggeren geen functies 

Dit kan ervoor zorgen dat pagina's moeilijk/niet te gebruiken zijn, als de navigatie niet meer werkt kan de gebruiker ook meteen je website niet meer gebruiken.

Om dit te voorkomen moet je je HTML slim schrijven, hiermee kan je bijna alle problemen al oplossen. `a`, `button`, `input` & `textarea` tags zijn allemaal uit zichzelf focussable. Dit betekent dat ze focus kunnen krijgen. Alle elementen die focus kunnen krijgen kan je accessen/naar navigeren dmv `tab`. Want `tab` geeft focus aan het volgende element dat focussable is in de HTML volgorde -> als deze buiten de viewport staat word en automatisch naar gescrolled.

Verder kan je het ook nog beter accessable maken dmv JS functies die andere vormen van navigatie aanbieden.

</details>



<details><summary>Throttle internet</summary>

Internet is langzamer

Een langzame internet connectie / een internet verbinding die vaak wegvalt kan erg problematisch zijn. De internet verbinding word namelijk gebruikt om de CSS, images, JS, externe scripts & data op te halen / in te laden.

Als je internet verbinding echt te slecht is kan dit betekenen dat de files niet geladen worden. 

Als de files/assets wat later worden ingeladen dan betekent het meestal dat de website er even wat lelijker uitziet of dat deze voor een korte tijd nog niet interactief is.

Als de files/assets niet geladen worden dan kan dit betekenen dat de website niet te gebruiken valt.

Om dit te voorkomen zijn er een paar dingen die je kan doen; de meeste komen neer op nadenken over wat je website echt allemaal nodig heeft.
Heel veel websites zijn bedoeld om alleen maar informatie over te brengen. Dit kan je met HTML doen en daarvoor hoeft niet altijd perse JS geladen te worden. Verder moet je goed nadenken over wat je met JS doet, heel veel dingen die je in HTML kan doen worden vaak vervangen/gedaan in JS (denk bijvoorbeeld aan frameworks zoals React) dit kan ervoor zorgen dat functionaliteiten het niet doen die wel mogelijk zijn in alleen meet HTML.

</details>



<details><summary>Javascript uitzetten</summary>

Javascript uitzetten zorgt ervoor dat mijn OBA website niet meer functioneert. Alle content (opm de header na) word opgehaald/gemaakt in JS en vervolgens in de DOM gezet. Dit betekent dat zonder JS al deze content niet bestaat en je een lege pagina gerserved krijgt.

Al zou deze content in de HTML staan dan zouden waarschijnlijk veel interacties kapot zijn op de core-web interacties na (denk aan linken).

Om te voorkomen dat de website kapot gaat zonder Javascript kan je ervoor zorgen dat alle basis functionaliteiten mogelijk zijn met HTML & CSS. Vervolgens kan je de interacties verbeteren (progressive enhancement) als resourcse zoals JS enabled zijn. (of server-side renderen?)

</details>


<details><summary>Cookies uitzetten </summary>

Cookies worden veel gebruikt om gegevens op te slaan zoals user-profiles, log-ins & preferences. Zonder cookies zijn de websites die hier op relyen niet kapot maar wel minder gebruiks vriendelijk. Zo kan de gebruiker uitgelogd zijn of zijn custom styling opties (denk aan subreddits) weg zijn.

De website is vaak nog wel gebruikbaar, de browser onthoud alleen wat minder gegevens van je en dus moet je deze mogelijk opnieuw beantwoorden (inloggen).

Om dit te voorkomen kan je de gevevens opslaan in een database / localStorage ipv cookies maar dit brengt ook weer privacy/security risks en zijn het meestal niet waard.

</details>


<details><summary>localStorage uitzetten </summary>

localStorage word vaak gebruikt om data op te slaan zodat deze niet elke keer opnieuw opgehaald hoeft te worden.

Als je localStorage uitzet kan het zijn dat websites wat minder data hebben en deze moeten aanvullen. Dit zou betekenen dat de website resources moet laden en kan even duren. Websites kunnen echter ook nog verder kapot gaan -> veel websites handelen hun localStorage access check niet goed of hebben er geen een. Als dit niet goed afgehandeld word dan geeft de browser een error en loop het JS bestand vast.

Dit probleem valt te voorkomen door te kijken of je access hebt tot de localStorage; dit kan met een simpele check en is eigenlijk een hele basisch oplossing.

</details>




## Screenreader

Ik heb in de HTML het `lang` attribuut van **en** verandert naar **nl** zodat de nederlandee content ook voorgelezen word door een nederlandse stem. 

De overviewpagina is uitleesbaar, wel erg vervelend dat de elementen uitgelezen worden; zo krijg je elke keer te horen “heading level 4” etc. 

Ik weet niet of de mensen die screenreaders gebruiken het interessant vinden om te horen wat voor element de focus heeft maar als dat niet belangrijk is dan kan je dit misschien voorkomen door er een “aria” attribuut op te zetten.
Aan de andere kant kan ik me ook wel weer voorstellen dat mensen die screenreaders gebruiken willen weten dat het een titel of iets dergelijk is (blinde mensen).

Wanneer je letterlijk op de `<a>` hoverde werd alle content voorgelezen (wat de bedoeling is), maar als je over een van de child-nodes hoverde dan word alleen dat element voorgelezen. Met `tab` werkt dit dus erg goed, maar met de muis minder. Een manier om dit probleem te voorkomen kan misschoen `pointer-events: none` zijn. Op deze manier werkt de link nogsteeds en is alle content leesbaar terwijl het element geen hover-state heeft en dus niet een screenreader kan trigerren.

Verder viel het me op dat als in een `<a>` een `<h4>`, `<p>` & `<p>` bevat dat er geen pauzes tussen de elementen zitten. Er word rechtstreeks van element naar element gegaan; ik kan me voorstellen dat als je dit dagelijks gebruikt dat dit geen probleem is. Maar voor de personen bij wie het wel een probleem is valt dit probleem te verhelpen; er moeten `.` achter de zinnen gezet worden zodat de screenreader een korte pauze neemt tussen de zinnen.


De profielpagina werkt ook normaal, echter kan ik de `<input>` niet laten voorlezen door de screenreader, dit zo mogelijk zijn met `aria-label`.

</details>





# Opdracht 2

<details><summary>Wireframes</summary>

### Identificatie
![Screenshot 2020-03-18 at 13 50 54](https://user-images.githubusercontent.com/45405413/76962466-943ab700-691f-11ea-96e9-ca31ef15ef88.png)

### Gegevens
![Screenshot 2020-03-18 at 13 51 05](https://user-images.githubusercontent.com/45405413/76962469-956be400-691f-11ea-9554-3bcfce88739b.png)

### Favorieten
![Screenshot 2020-03-18 at 13 51 13](https://user-images.githubusercontent.com/45405413/76962470-96047a80-691f-11ea-8032-04b45d827dab.png)


### Open Vragen
![Screenshot 2020-03-18 at 13 51 19](https://user-images.githubusercontent.com/45405413/76962472-969d1100-691f-11ea-90f5-2d73ae307c68.png)

</details>

<details><summary>Layers</summary>
	
## Functionaliteit Laag

De applicatie bestaat puur uit HTML & CSS.
Alle 4 pagina’s hebben een knop om naar de volgende page te gaan, 
deze submit() ook de gegevens naar de server.

Er word een UID gemaakt om je progressie op te slaan.
Je kan in het only scherm inloggen met je UID (dan word serverside
je  data opgehaald en ingevuld in het form), als je geen key hebt dan moet 
je een nieuwe sessie aanmaken en krijg je een key om de volgende keer
mee in te loggen.

Je kan pas naar de volgende pagina als alles ingevuld is (required)
Als je je key invult en dus verder gaat met je sessie dan word je automatisch 
naar de page genavigeerd die je nog niet af hebt.

## Useable

De applicatie bestaat puur uit HTML & CSS en JS.

Verbeteringen:
- Elke keer dat de gebruiker iets invult word het antwoord opgeslagen (ipv alleen de pagina’s)
- De pagination knoppen zijn alleen zichtbaar als alle vragen beantwoord zijn
- Sliders laten nu ook de huidige waarde zien in de slider
- Er word feedback gegeven wanneer de gebruiker iets invult, denk aan:
        - inputs geven aan dat ze ingevuld zijn 
        - evt. progressie balk

## Enhanced Laag

</details>
