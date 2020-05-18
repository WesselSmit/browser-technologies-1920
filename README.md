[live link](https://webdev-questionnaire.herokuapp.com/)

![image](https://user-images.githubusercontent.com/45405413/82242479-3128c900-993e-11ea-8960-65b36a4f536e.png)


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





# Opdracht 2 (case 1)

Ik heb case 1 gekozen; een formulier dat je progressie opslaat en weer kan inladen op een later moment.

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

## Concept

Een survey over Webdevelopment om te zien hoe webdevelopers hun dagelijkse werk ervaren. Het is de bedoeling dat de gebruiker op elk moment kan stoppen en later kan terugkomen om de vragenlijst te voltooien. Het is belangrijk dat het voor iedereen werkt; elke browser, elk formaat elk device.. elke context!

Om dit te kunnen doen gebruik ik NodeJS en Express; met Express vang ik alle routes op, haal/store ik data op en genereer ik de HTML bestanden die ik naar de browser stuur. Wanneer de gebruiker op de submit knop drukt word er een JSON aangemaakt/aangepast met de ingevulde antwoorden. Als de gebruiker op een pagina komt word de data van het bijhorende key opgehaald en ingeladen (deze keys zijn verstopt in de HTML als `<input type="hidden">`).

## Layers

<details><summary>Functional layer</summary>

>De applicatie werkt / de core function is uit te voeren (formulier gegevens worden opgeslagen, op een later moment kan de gebruiker het formulier afmaken)

In de functional laag is het belangrijk dat de applicatie werkt, er zijn heel weinig mensen die alleen maar deze laag te zien krijgen maar voor hun moet het ook werken.

De functional laag bestaat uit alleen maar HTML en logica op de server. De server maakt de HTML met de data die het heeft. 

![image](https://user-images.githubusercontent.com/45405413/77962177-679d7c80-72db-11ea-8f12-08b75e297246.png)

Elk formulier bevat een `<input type="submit">` knop; wanneer de gebruiker hierop klikt worden alle elementen die een input `required` hebben gevalideerd, als elk deze validatie succesvol haalt dan word het formulier verzonden naar de server met de ingvulde waardes. Alles waardes worden in een JSON file opgeslagen die later weer opgehaald kan worden.

Ingevulde waardes kunnen dus opgeslagen worden om opgehaald te worden wanneer de gebruiker de sessie wilt afronden op een later moment, de informatie word echter alleen maar opgeslagen als de volledige pagina ingevuld is en de validatie succesvol heeft gehaald.

>"informatie word echter alleen maar opgeslagen als de volledige pagina ingevuld is en de validatie succesvol heeft gehaald."

</details>





<details><summary>Usable layer</summary>

>De applicatie is goed te gebruiken, ziet er mooi uit en heeft een logische flow, de UI spreekt voor zich en is intuïtief 

In de Usable laag willen we de applicatie wat minder robuust maken om te gebruiken; het moet de gebruiker duidelijk zijn wat er moet gebeuren, er moet feedback naar de gebruiker zijn & de applicatie moet over het algemeen goed bruikbaar zijn.

<h2>Styling</h2>

Om de applicatie fijner te maken moet er styling worden toegepast, dit helpt met duidelijk maken 
van flow, het formulier responsive te maken, feedback naar de gebruiker geven en overal maakt het leuker om in te vullen. 

Er is gebruik gemaakt van 3 kleuren, deze zijn gekozen omdat ze er visueel mooi uit zien, maar ook omdat ze een goed contrast vormen en goed duidelijk zijn.

Door middel van states kan je de gebruiker duidelijk maken wat bepaalde elementen doen en de app meer intuïtief maken; als een element visueel verandert wanneer de gebruiker erover heen hovert dan suggereert dit dat dat het element interactief is.

Ook kan je op deze manier goed duidelijk maken welk element momenteel de focus heeft, dit helpt mensen met een handicap die bijvoorbeeld geen muis kunnen gebruiken en puur emt `tab` door je website navigeren.

>alle browsers supporten CSS, maar niet alle browsers supporten alle properties; IE was hierbij het grootste probleem en ondersteunde bijvoorbeeld `flex` niet

<h2>LocalStorage</h2>

>localStorage word niet door hele oude browser gesupport (de belangrijkste: IE 6-7)

<details><summary>localStorage Detection</summary>

Voordat je de app kan verbeteren met localStorage moet je kijken of de browser localStorage ondersteunt en of de browser toegang heeft tot de localStorage!

In de onderstaande snippet check ik of localStorage ondersteunt word en beschikbaar is:

```javascript
/* Best way to detect if localStorage is supported & available (taken from MDN: 
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability) */
function localStorageAvailable() {
	let storage
	try {
		storage = window['localStorage']
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true;
	} catch (err) {
		return err instanceof DOMException && (
				// everything except Firefox
				err.code === 22 ||
				// Firefox
				err.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				err.name === 'QuotaExceededError' ||
				// Firefox
				err.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0)
	}
}
```

>Snippet is afkomstig van [hier (MDN).](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability)

>localStorage word niet door hele oude browser gesupport (de belangrijkste: IE 6-7)

</details>

Als localStorage gebruikt kan worden zijn er meerdere vormen van enhancements:
<ul>
	<li>Key suggestions</li>
	<li>Saving individual inputs</li>
	<li>Filling in saved anwsers</li>
</ul>

<h2>Key suggestions</h2>

Wanneer de gebruiker op de eerste pagina komt kan hij of een nieuwe sessie starten OF een key invullen van een voorgaande sessie om die af te maken. Dat ziet er als volgt uit:

![image](https://user-images.githubusercontent.com/45405413/77962152-59e7f700-72db-11ea-906b-228ffafe6d4e.png)

Wanneer localStorage gebruikt kan worden laat het suggesties zien; alle keys die in localStorage opgeslagen zijn worden als suggesties weergegeven. Dit ziet er als volgt uit:

![image](https://user-images.githubusercontent.com/45405413/77962366-bea35180-72db-11ea-9a1e-f94c2fb0dfcf.png)

Als de gebruiker over een van de suggesties hovert word de placeholder text van de input de key; dit suggereert dat je de keys kan invullen in de input.

In alle browsers behalve IE werken `append()` & het `keyup` event hetzelfde; als deze features beschikbaar zijn dan worden er dan 2 extra features aangeboden. 

```js
//Check of append() ondersteunt word
if ('append' in document && typeof document.body['append'] === 'function') {}
```


Zo zijn alle key-suggesties inputs met een `readonly` attribute, dit betekent dat de text met JS geselecteerd kan worden; op deze manier hoeft de gebruiker het niet handmatig te selecteren maar alleen maar `copy + c` te doen. Dit betekent ook dat de key-suggesties focussable zijn en dat gebruikers er met `tab` doorheen kunnen navigeren zonder een muis te gebruiken.

Er komt ook een popup naast de key-suggestion, in de popup staat dat je op `space` kan drukken om de sessie met deze key op te starten zonder dat je hem zelf hoeft over te typen in de input! 

Foto van popup:

![image](https://user-images.githubusercontent.com/45405413/77962668-4f7a2d00-72dc-11ea-958b-7fc731039fbc.png)

Deze kleine toevoegingen maken het fijner voor de gebruiker om de app te gebruiken.

Als localStorage niet bruikbaar is word er een message weergegeven om de gebruiker te laten weten dat het belangrijk is om je `key` te onthouden!

![image](https://user-images.githubusercontent.com/45405413/77963854-64f05680-72de-11ea-8408-8225450e1552.png)


<h2>Saving individual inputs</h2>

Als localStorage bruikbaar is kunnen we deze inzetten om meer antwoorden te onthouden, momenteel worden de antwoorden alleen opgeslagen in de backend wat alleen gebeurt als de gebruiker van pagina naar pagina navigeert.

Met JS word er naar elke input geluisterd, elke keer als de gebruiker iets typed word er in JS een `debounce` functie afgevuurd; deze kijkt of de gebruiker nog aan het typen is of dat hij uitgetypt is (debounce time: 250ms). Als de user niet typed binnen de debounce time dan word de data opgeslagen in een localStorage object. Dit object is identiek aan het object dat word bijgehouden bij op de server!

Op deze manier word elke keer dat de gebruiker iets typt het opgeslagen, op deze manier kan data constant up to date blijven en hoeft de gebruiker niet naar de volgende pagina te navigeren om zijn progressie op te slaan.

>localStorage word niet door hele oude browser gesupport (de belangrijkste: IE 6-7)

<h2>Filling in saved anwsers</h2>

Wanneer de gebruiker verder wil gaan met een eerder gestarte sessie dan bepaalt de server op welke pagina de gebruiker was gebleven, vervolgens word deze pagina aan de gebruiker gerserveerd). Vervolgens kickt localStorage clientside in; er word gekeken welke vragen er allemaal zijn op de huidige pagina, vervolgens word er gecheckt of van deze vragen er antwoorden in de localStorage opgeslagen zijn. Als dit het geval is dan worden deze antwoorden ingevuld in de input. 

>localStorage word niet door hele oude browser gesupport (de belangrijkste: IE 6-7)

<h2>Auto-select key</h2>

Wanneer de gebruiker een nieuwe sessie start krijg je als eerst een pagina te zien met je `key`. Als JS aanstaat word de `key` automatisch geselecteerd; hierdoor hoeft de gebruiker niet zelf de key te selecteren en kan jem makkelijker `copy + c` / kopieren. Ook dit is weer een input met een `raedonly` attribute zodat mensen er ook met `tab` kunnen komen.

![image](https://user-images.githubusercontent.com/45405413/77964811-088e3680-72e0-11ea-92dd-5a7cb4b4bdb3.png)


<h2>Formatting hints</h2>

Als JS aanstaat dan word er een additionele hint gegeven bij moeilijke inputs. Ik heb een input gebruikt die alleen nummers accepteert, omdat je leeftijd ook kan beantwoorden met "achttien" is het fijn om de gebruiker duidelijk te maken dat alleen nummers geaccepteerd worden.

![image](https://user-images.githubusercontent.com/45405413/77965207-d4674580-72e0-11ea-9897-2d4bad4cb23d.png)

>Gebruikt `classist` wat in oudere versies van IE (6-9) niet werkt

<h2>Validation</h2>

Wanneer de gebruiker een formulier probeert te verzenden kijkt de browser of alle inputs met het `required` attribute ingevuld zijn in het gewenste formaat. Als dit niet het geval is krijgt de gebruiker een foutmelding te zien:

![image](https://user-images.githubusercontent.com/45405413/77965351-18f2e100-72e1-11ea-851e-d43d2ee747e7.png)

Als JS aanstaat word dit wat duidelijker gemaakt om de gebruiker te helpen, zo word er een error message weergegeven & worden de inputs die nog niet correct ingevuld zijn gehighlight.

De gebruiker krijgt een error message te zien om aan te geven dat het formulier nog niet helemaal goed ingevuld is:
<img src="https://user-images.githubusercontent.com/45405413/77965578-96b6ec80-72e1-11ea-92af-cc37b2d5ae21.png" height="600px">


Niet ingevulde inputs worden gehighlight om aan te geven dat het mis gaat bij deze inputs:
![image](https://user-images.githubusercontent.com/45405413/77965460-535c7e00-72e1-11ea-8f8c-c2a17b3ad02b.png)

>Gebruikt `classist` wat in oudere versies van IE (6-9) niet werkt

>Gebruikt `querySelectorAll` wat niet gesupport word in IE 6-9


</details>





<details><summary>Pleasurable layer</summary>

>De applicatie werkt super fijn, is vet en gaaf, prettig om te gebruiken. 

In de pleasurable laag probeer je de app leuk te maken, dit doe ik voornamelijk door animaties te gebruiken om de ervaring wat minder statisch te maken. Ook kunnen animaties dingen duidelijk maken aan de gebruiker.

<h2>Key Suggestions Animated</h2>

Zo worden de key-suggesties later ingeladen dan de rest van de content. Dit geeft aan dat ze belangrijk zijn, maar ook dat ze wat meer los staan van de overige content!

![key-suggestions animations](https://user-images.githubusercontent.com/45405413/77968192-f95eb700-72e6-11ea-8cde-48d71e9d2d5a.gif)


<h2>Page Transitions Animated</h2>

Ook de transities tussen pagina's zijn geanimeerd; titles sliden / faden van boven het beeld in, normale content slide / fade van onder het beeld in & belangrijke navigatie knoppen sliden / fade van rechs het beeld in.

>Deze kon ik niet opnemen omdat het van pagina naar pagina transitioneert => check hem zelf uit door de [demo link](https://webdev-questionnaire.herokuapp.com/) te volgen ;)

<h2>Required / Validation Animated</h2>

Wanneer de gebruiker naar de volgende pagina probeert te gaan en niet alle antwooorden ingevult zijn worden de inputs die nog ingevult moeten worden gehighlight. Deze hebben een rode border die pulseert tussen de normale blauwe kleur en rood. Op deze manier word de aandacht nog net wat meer getrokken naar die inputs!

![chrome-capture (2)](https://user-images.githubusercontent.com/45405413/77969084-30ce6300-72e9-11ea-8335-8310c3339b3c.gif)

</details>

## CSS- / JS Support 

<details><summary>CSS</summary>

Om ervoor te zorgen dat mijn CSS werkt in alle browsers heb ik ervoor gezorgd dat zonder nieuwere CSS properties de app er nogsteeds bruibaar en normaal uit ziet. 

Vervolgens heb ik de app mooier gemaakt door nieuwere properties te gebruiken, voor de meeste properties heb ik geen `@supports` gebruikt omdat het niet nodig is! Ik heb gebruik gemaakt van CSS-specificity; 

Door de properties in dezelfde selector direct onder elkaar te zetten word de laatste altijd gepakt, tenzij deze niet gesupport word; dan slaat de browser deze regel over en word de vorige gepakt.

```css
	#favorites input[type="text"] {
		width: 100%;
		width: calc(100% - 10px);
	}
```

>Dit is minder code en werkt goed, het is echter wel minder leesbaar dan een `@supports`

Met moeilijkere vormgeving-items heb ik wel een `@supports` gebruikt; zo check ik of `display: flex` gesupport word, als fex gesupport word dan gebruik ik:

```css
@supports (display: flex) {
	@media (min-width: 660px) {
		#backLinks {
			display: flex;
			justify-content: center;
		}

		#backLinks a {
			margin: 10px 30px;
		}
	}
}
```

als `flex` niet gesupport word dan slaat de browser alles binnen de `@supports` over en pakt hij deze styling

```css
a {
	margin-top: 10px;
	margin-right: 10px;
}
```

</details>

<details><summary>JS</summary>

In JS gebruik ik een aantal basis methods, functions etc. die nodig zijn om mijn JS uit te kunnen voeren, in het onderstaande snippet laat ik zien hoe ik hier op check;

```js
//Dit is de pre-babel JS file!

if (documentChecker() && documentObjectChecker()) {
	//browser support => do your stuff here
} 

function documentChecker() {
	const features = ['querySelectorAll', 'addEventListener', 'insertBefore']
	const checker = (feature) =>
		feature in document && typeof document.body[feature] === 'function'

	return features.every(checker)
}

function documentObjectChecker() {
	const features = ['classList', 'nextSibling']
	const checker = (feature) =>
		feature in document.documentElement &&
		typeof document.body[feature] === 'object'

	return features.every(checker)
}
```

Dit soort basis features van JS staan in een checker omdat als je dit niet doet de browser een `error` gooit. Een error stopt je script en betekent dat de volgende JS lines niet uitgeoverd worden!

Met deze checker zou je de functies die niet deze methods/functions gebruiken nogesteeds kunnen uitvoeren in de `else` statement;

```js
if (documentChecker() && documentBodyChecker() && documentObjectChecker()) {
	//browser support => do your stuff here
} else {
	//you can still do the more basic stuff that is supported :)
}
```

Verder gebruik ik ook localStorage, hiervoor moet je ook kijken of de browser het ondersteunt en of de browser toegang heeft tot localStrage;

```js
if (localStorageAvailable()) {
	//LocalStorage is supported
} else {
	//localStorage is NOT supported
}

/* Best way to detect if localStorage is supported & available (taken from MDN: 
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability) */
function localStorageAvailable() {
	let storage
	try {
		storage = window['localStorage']
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true;
	} catch (err) {
		return err instanceof DOMException && (
				// everything except Firefox
				err.code === 22 ||
				// Firefox
				err.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				err.name === 'QuotaExceededError' ||
				// Firefox
				err.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0)
	}
}
```

>Nogmaals; al zou je niet voor localStorage checken en de browser zou bijvoorbeeld geen toegang hebben, dan zou je JS stoppen en kan de rest van je pagina misschien niet meer normaal functioneren!

</details>

## Browser Tests

<details><summary>Browser Tests</summary>

Mijn applicatie is gedeveloped in `chrome`, maar ik heb het zelf ook veel getest in `FireFox 74.0`, `Safari 13.0.3` & `Iternet Explorer 11`.

Ook heb ik het getest op mijn mobiel (Huawei P10) die ook chrome draait!

Tijdens het testen zijn me een paar dingen opgevallen die verschillen.

1. Safari is een pain-in-the-ass zo moet je zelf `tab-element-highlighting` aanzetten en de developtools unlocken.

2. Elke browser heeft zijn eigen :focus state vormgeving

3. IE loopt support geen HTML5 omdat HTML5 pas na IE 11 is uitegkomen. Het `<legend>` element bestaat echter wel in HTML4 / IE. Let hierbij goed op dat het anders werkt dan wat je gewend bent met HTML5. 

Zover ik weet werkt de core functionaliteit in elke browser (versie), vervolgens heb ik met progressive-enhancements de experience verbeterd waar mogelijk. 

### Welke uitdagingen kwamen er in verschillende browsers bij kijken en wat heb ik hier aan gedaan?

**FireFox**

* validate de content van inputs meteen (voor het submitten al), met als gevolg dat veel inputs een rode box-shadow krijgen. Om dit te fixen heb ik alle inputs een `box-shadow: none` gegeven, deze kan je later overschrijven indien nodig!
>`The :invalid CSS pseudo-class is applied automatically to elements whose contents fail to validate according to the input's type setting`

* geeft `<a>` tags [geen focus state (op MacOS)](https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537) en zijn van nature niet focussable. De gebruiker moet dit zelf in de about:config aanzetten/instellen.

* Firefox rendert kleuren anders (kleuren zijn veel mee vibrant), kan mogelijk problemen opleveren met leesbaarheid?


**Safari**

* je moet developer-tools & `tab-element-highlighting` zelf moet aanzetten in de settings

**Internet Explorer** 

* `<legend>` werkt maar functioneert anders dan in HTML5;
	* `color` kan niet verandert worden en de kleur blijft altijd zwart
	* wrapt tekst niet als het buiten beeld valt (dit valt op te lossen met `display: table`)
		```css
			/* Enable line-wrapping in IE8+ */
			display: table;
			/* Enable line-wrapping in old versions of some other browsers */
			white-space: normal;
		```
	* veel basis vormgeving (textarea - scrollbar, select - dropdown icon) 


Om dit soort problemen op te lossen moest je soms een prefix gebruiken in de CSS, of een losse CSS regel gebruiken om de browser basis-vormgeving te overschrijven.


### Known Bugs 

* Firefox geeft `<a>` tags [geen focus state (op MacOS)](https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537) en zijn van nature niet focussable. De gebruiker moet dit zelf in de about:config aanzetten/instellen. 
* `<legend>` element styling is erg lelijk op IE, alternatief is door de legend te vervangen met een ander HTML element, maar dit betekent wel dat de HTML minder semantisch is.

</details>

## Wat gebeurt er als...?

<details><summary>Afbeeldingen uitstaan</summary>

Mijn website heeft geen afbeeldingen en dus werkt de website zoals normaal.

</details>



<details><summary>Custom fonts uitstaan</summary>

Wanneer custom fonts uitstaan blijft de tekst leesbaar, het is alleen een wat ordinairder font. Dit komt doordat ik fallbacks gebruik in mijn `font-family` declaration;

```css
	font-family: "Sudo-Bold", Arial, Helvetica, sans-serif;
```

</details>



<details><summary>Je de muis niet kan gebruiken</summary>

Wanneer de gebruiker de muis niet kan gebruiken kan hij dmv `tab` door de website navigeren. Dit is mogelijk door semantische HTML te schrijven, voor alles waar de gebruiker moet kunnen komen een focussable element te gebruiken & door de focussable state duidelijk te stylen.

Ook text die de gebruiker moet kunnen kopieren is tabbaar; dit is mogelijk omdat ik een input met een `readonly` attribuut heb gebruikt.

</details>


<details><summary>Breedband internet uitstaat</summary>

Dit is wel erg belangrijk, zonder internet geen formulier.

Als je wel internet hebt maar het valt om de zoveel tijd kort weg; dat is een minder groot probleem. Als de resources (CSS, JS) wel al ingeladen zijn dan functioneert de pagina gewoon zoals normaal, je kan alleen niet naar een andere pagina. Als localStorage gebruikt kan worden slaat deze wel alle ingevulde antwoorden op! 

Als de website geladen is maar de resources (CSS, JS) nog niet dan werkt de app nogsteeds en kan de core-funcitonaliteit nog steeds uitgevoerd worden!

</details>


<details><summary>Javascript uitstaat</summary>

Als Javascript uitstaat werkt de app! De gebruiker kan de core-functionaliteit uitvoeren. 

Het is echter wel wat minder fijn om te gebruiken! Zo worden antwoorden alleen opgeslagen wanneer de gebruiker van pagina naar pagina navigeert & is het de bedoeling dat je zelf je key onthoud/opslaat!

Ook zal je niet de highlighting krijgen als je iets niet hebt ingevuld, in plaats hiervan krijg je de standaard popup melding van de browser.

</details>

 
<details><summary>Cookies uitstaan</summary>

Er worden geen cookies gebruikt in mijn applicatie en dus werkt de app zoals verwacht.

>De app werkt niet helemaal meer als je cookies uitzet; maar dat komt omdat cookies ook automatisch localStorage uitschakelen. De cookies zelf hebben niks te maken met mijn app.

</details>



<details><summary>LocalStorage uitstaat</summary>

Wanneer localStorage uitstaat werkt mijn app prima, het enige wat veranderd wanneer je localStorage uitzet is dat de antwoorden alleen opgeslagen worden wanneer je van pagina naar pagina navigeert. 

Alle andere JS funcitonaliteiten werken nog normaal omdat ik in JS check of ik toegang heb tot localStorage. Dit foe ik als volgt:

```javascript
if (localStorageAvailable()) {
	//localStorage functions here
} else {
	//non-localStorage functions here
}

/* Best way to detect if localStorage is supported & available (taken from MDN: 
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability) */
function localStorageAvailable() {
	let storage
	try {
		storage = window['localStorage']
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true;
	} catch (err) {
		return err instanceof DOMException && (
				// everything except Firefox
				err.code === 22 ||
				// Firefox
				err.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				err.name === 'QuotaExceededError' ||
				// Firefox
				err.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0)
	}
}
```

Door een if/else statement te gebruiken kan ik de JS functions die geen localStorage gebruiken als nog uitvoeren. Op deze manier geeft mijn code geen error als localStorage niet available is en loopt mijn code niet vast!

</details>

## Artikelen

<details><summary>The Web I Want</summary>

By [Chris James](https://dev.to/quii/the-web-i-want-43o)

>In practice your website would do everything it needed to with some HTML files linking to some CSS.

Dit is de aanpak die ik heb gevolgd; de core-functionaliteit is mogekijk met alleen maar HTML. Vervolgens heb ik CSS gebruikt om het mooier, duidelijker en geanimeerd te maken. JS word gebruikt om extra features aan te bieden als dat mogelijk is.

CSS en JS zijn echter niet nodig om de core-functionaliteit uit te kunnen voeren!

>Semantic, accessible, HTML.

Belangrijk als je wilt dat het goed werkt met `tab` en dat screenreaders het kunnen interpreteren.

</details>


<details><summary>Understanding Progressive Enhancement</summary>

By [Aaron Gustafson](https://alistapart.com/article/understandingprogressiveenhancement/)

Graceful-degredation:

>Advanced technology > polyfills / older techniques to make it (partially) work

<hr>

Progressive-enhancement:

>Think from the content out; content > presentation > client-side scripting


Het verschil in mijn ogen is het beginpunt; bij PE begin je met de basis (de core-functionaliteit), vervolgens ga je deze enhancen/verbeteren indien mogelijk. Dit gebeurt door te detecten of dingen gesupport worden; als dat het geval is dan krijgt de gebruiker een betere ervaring en anders is er altijd nog de basis.

Bij GD doe je het tegenovergestelde; je begint met het maken van een super vette en gave app die heel smooth werkt en allemaal vette technologieen gebruikt. Vervolgens ga je hem backwards compatible maken door alternatieven in je logica te implementeren voor als de advanced technologieen niet werken. 

Persoonlijk ben ik een grotere fan van PE omdat ik uit ervaring weet dat het met GD heel makkelijk is om dingen over het hoofd te zien.

</details>

<details><summary>HTML: The Inaccessible Parts</summary>

By [Dave Rupert](https://daverupert.com/2020/02/html-the-inaccessible-parts/)

Deze lijst heb ik er bij gehouden tijdens het schrijven van mijn HTML; zo zijn er een heleboel inputs die eigenlijk niet zo goed meer werken of in ieder geval niet gebruikersvriendelijk zijn voor mensen met een beperking.

>Gov.UK finds Number Inputs aren’t inclusive. (2020)

Zo heb ik ervoor gekozen om mijn number input op een andere manier te doen;

```html
	<input type="text" id="age" name="age" placeholder="30" inputmode="numeric" pattern="[0-9]*" required>
```

Op deze manier kan de gebruiker geen formulier verzenden met een karakter dat geen getal is. het is voor de gebruiker echter wel mogelijk om andere karakters in te vullen, alleen word het formulier dan niet verzonden!

Op mobiel word het getallen toetsenbord weergegeven.

</details>


<details><summary>Accessibility Through Semantic HTML</summary>

By [laura Kalbag](https://24ways.org/2017/accessibility-through-semantic-html/)

Laura Kalbag legt heel goed uit waarom semantische HDTML belangrijk is en wat het nut ervan is. Ik heb veel van deze principes gebruikt.

1. Kijk altijd eerst of er een zemantisch correct element is voor wat je wilt doen (reik niet meteen naar een div)

2. Differienteer tussen structuur en style. Het is makkelijk om een `<h3>` te gebruiken omdat je grotere tekst wilt maar gebruik hiervoor CSS. Houd de HTML structuur intact en geef deze niet op voor je CSS.

Dit zijn een paar van de voordelen van semantische HTML die belangrijk zijn:

1. HTML elementen hebben allemaal hun eigen werking; deze kunnen een goede fallback vormen mocht iets in je JS niet werken.

2. Het vormt een goed leesbare basis voor screenreaders

3. Het zorgt ervoor dat je website te navigeren is met `tab`

</details>

<details><summary>The Role of Enhancement in Web Design</summary>

By [Raluca Budiu](https://www.nngroup.com/articles/enhancement/)

>Progressive Enhancements: these features can be implemented in your interface, but the UI should not rely on them for accomplishing any one task

Het zijn enhancements; het zin toevoegingen die alleen gebruikt worden waar mogelijk!

</details>

<details><summary>The accessibility Mindset</summary>

By [Eric Eggert](https://24ways.org/2015/the-accessibility-mindset/)

Als je HTML semantisch schrijft van de start, fallback attributen (zoals: alt attributen etc.) gebruikt en je content de HTML structuur volgt heb je al een sterke foundation voor accessibility.

Houd je aan de best-practices en later kan je de website enhancen met JS features mits deze gesupprt worden.

</details>


<details><summary>Progressive Enhancement and Data Visualizations</summary>

By [Chris Coyier](https://css-tricks.com/progressive-enhancement-data-visualizations/)

Progressive enhancement in a nutshell:
- basic content should be accessible to all web browsers
- basic functionality should be accessible to all web browsers
- sparse, semantic markup contains all content
- enhanced layout is provided by externally linked CSS
- enhanced behavior is provided by unobtrusive, externally linked JavaScript
- end-user web browser preferences are respected

Dit artikel legt een progressive-enhacement workflow uit; het laat zien dat je met semantische HMTL begint, deze bruibaar styled met CSS. Vervolgens kan je in JS kijken of de browser features support, als deat het geval is kan je bijvoorbeeld een SVG timeline laten zien.

</details>

## Accessibility

Om mijn website accessible te maken heb ik de volgende dingen gedaan:

1. Schrijf semantische HTML (gebruik de juiste elementen, styling doe je met CSS niet met HTML)

2. Gebruik inputs & links voor alles wat tabbaar moet zijn. Op deze manier kan de gebruiker zonder muis door je app navigeren.

3. Enhance de website met JS, dit voegt fijne features toe die de user experience beter maken maar halen niks af van de kern/core-functionaliteit.

4. Zorg ervoor dat de focus state op elk element zichtbaar is (in elke browser)

5. Houd `caniuse.com` & `mdn.com` in de gaten wanneer je code schrijft; check regelmatig of je code gesupport word & of je support moet detecten.
(zo ben ik van `append()` naar `appendChild` overgestapt omdat het veel beter gesupport word en voor mij niet echt een probleem was!)

6. Test regelmatig in verschillende contexts (browser(versie), device, schermgrootte & features uit etc.)

7. Zorg ervoor dat er een goed contrast is tussen je kleuren; ik gebruik hier 2 tools voor:
* de website [colorable](https://colorable.jxnblk.com/004466/00ffa2)
* de chrome inspect tool geeft ook aan of het een goed contrast is

Mijn kleuren vormen een erg goed contrast; zo scoort het een 7.84 (AA) volgens chrome & een AAA volgens colorable.

![image](https://user-images.githubusercontent.com/45405413/78030476-74b17e80-7362-11ea-9da1-828d256da48a.png)

## (Mijn) Progressive Enhacement Definitie

<details><summary>PE definitie</summary>

Pogressive enhancement is wanneer je begint met de core-functionaliteit; wat is het meest belangrijke aan mijn pagina/website?

Vaak kom je er hier bij achter dat je eigenlijk alleen maar HTML content nodig hebt om de core-funcionaliteit te kunnen uitvoeren.

Vervolgens style je de website, hierbij gebruik je browser-support om te kijken wat je wel en niet kan gebruiken. Als een browser iets niet ondersteunt is dat niet een limitatie voor de website maar alleen een limitatie voor de website op die browser. Dit betekent niet dat je geen flex kan gebruiken, het betekent dat je een fallback moet hebben moxht flex niet gesupport worden.

Voorbeeld van browser detection:

```css
@supports (display: flex) {
	@media (min-width: 660px) {
		#backLinks {
			display: flex;
			justify-content: center;
		}

		#backLinks a {
			margin: 10px 30px;
		}
	}
}
```

als `flex` niet gesupport word dan slaat de browser alles binnen de `@supports` over en pakt hij deze styling:

```css
#backLinks a {
	margin-top: 10px;
	margin-right: 10px;
}
```

Persoonlijk vind ik het een gemakkelijke workflow om uit te gaan van het minste support en dan later de nieuwere properties eroverheen te leggen als ze gesupport worden. Op deze manier weet je zeker dat je niet iets hebt gemist en dat alles gesupport word.

Hetzelfde geld voor JS; je verbeterd de ervaring met client-side scripting; het is wel belangrijk dat je een feature detection doet om te kijken of de benodigde technologie (methods, functions, properties etc.) ondersteunt worden. 

Door te checken of het gesupport word voorkom je errors, errors leggen je code plat en zoregen ervoor dat de wel gesupporte JS die volgt ook niet word uitgevoerd.

Voorbeeld van feature detection met localStorage:

```javascript
if (localStorageAvailable()) {
	//code that needs localStorage here
} else {
	//code that doesn't need localStorage here
}

/* Best way to detect if localStorage is supported & available (taken from MDN: 
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability) */
function localStorageAvailable() {
	let storage
	try {
		storage = window['localStorage']
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true;
	} catch (err) {
		return err instanceof DOMException && (
				// everything except Firefox
				err.code === 22 ||
				// Firefox
				err.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				err.name === 'QuotaExceededError' ||
				// Firefox
				err.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0)
	}
}
```

voorbeeld van feature detection voor de meer basis JS functionaliteiten:

```js
//Pre-babel

if (documentChecker() && documentBodyChecker() && documentObjectChecker()) {
	//supported
} else {
	//not supported
}

function documentChecker() {
	const features = ['querySelectorAll', 'addEventListener', 'insertBefore']
	const checker = (feature) =>
		feature in document && typeof document.body[feature] === 'function'

	return features.every(checker)
}

function documentBodyChecker() {
	const features = ['setAttribute']
	const checker = (feature) =>
		feature in document.body && typeof document.body[feature] === 'function'

	return features.every(checker)
}

function documentObjectChecker() {
	const features = ['classList', 'nextSibling']
	const checker = (feature) =>
		feature in document.documentElement &&
		typeof document.body[feature] === 'object'

	return features.every(checker)
}
```

In consclusion:

>Progressive enhancement is het verbeteren van een website door technologieen te gebruiken als ze gesupport worden, als ze niet gesupport worden dan heb je de basis nog waarin je de core-functionality kan uitvoeren.

>Bij Progressive Enhancement begin je met de basis en breid je het vanuit daar uit indien mogelijk. Bij Graceful Degredation begin je met de meest nieuwe technologieen die je wilt gebruiken en ga je terug werken naar de wel gesupporte technologieen

</details>

## (Mijn) Feature deteciton Definitie

<details><summary>FD definitie</summary>

Feature detection (FD) is 2 dingen:

- je kijkt of browsers een technologie (functie, method, property etc.) support
- je kijkt of de browser jou toegang heeft gegeven tot deze technologie

Een goed voorbeeld in mijn code is localStorage:

localStorage moet gesupport worden door de browser maar mijn website moet er ook toegang tot hebben (gebruikers kunnen dit uitzetten).

Mijn FD voor localStorage ziet er als volgt uit:

```javascript
if (localStorageAvailable()) {
	//code that needs localStorage here
} else {
	//code that doesn't need localStorage here
}

/* Best way to detect if localStorage is supported & available (taken from MDN: 
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability) */
function localStorageAvailable() {
	let storage
	try {
		storage = window['localStorage']
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true;
	} catch (err) {
		return err instanceof DOMException && (
				// everything except Firefox
				err.code === 22 ||
				// Firefox
				err.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				err.name === 'QuotaExceededError' ||
				// Firefox
				err.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0)
	}
}
```

Feature detection is een test waarin je kijkt of je en bepaalde technologie kan gebruiken.

Het voordeel hiervan is dat je errors voorkomt waaroor je code die geen localStorage nodig heeft gewoon blijft functioneren.

</details>

# Conclusie

Dit vak gaat erover dat je leert websites maken voor alle contexts; browsers(veries), beeld-formaten en alle mensen.

De belangrijke dingen die je moet leren zijn:
- bepalen wat de core-functionaliteit van je app is en deze voor iedereen mogelijk maken om uit te voeren
- leren hoe je de app kan vertbeteren met progressive enhancement 
- leren wat feature-/browser detection zijn en hoe je dit kan toepassen

De core functionaliteit van mijn app is dat de gebruiker halverwege kan stoppen met het formulier en later kan terugkomen om deze af te maken. Deze BASIS is mogelijk doordat ik server-side antwoorden opsla in JSON files.

Met progressive Enhancement verbeter ik de ervaring; zo gebruik ik localStorage om elk indivduele antwoord op te slaan. En weer in te vullen als de gebruiker terugkomt op de pagina op een later moment.

localStorage kan je niet altijd gebruiken (soms heeft de user het uit staan) en dus moet je een feature-detect gebruiken om te kijken of je de feature kan gebruiken. Dit doe ik door te kijken of "localStorage" bekent is in het "document" en door te kijken of ik iets in localStorage kan plaatsen. Als dit allemaal gelukt is dan weet ik dat ik toegang heb tot localStorage heb en deze kan gebruiken!

Een voorbeeld van browser-detect is wanneer ik kijk of flex gesupport word in een "@supports (display: flex)", als deze gesupport word dan gebruik ik het, als deze niet gesupport word dan worden deze regels overgeslagen en word de voorgaande styling gebruikt.

