# Yoga Space applicatie eindopdracht frontend beschrijving 

## Inleiding

Deze app is gemaakt om het voor de gebruiker makkelijk te maken een dagelijkse of wekelijkse yoga-routine op te bouwen.

Middels deze applicatie wordt de gebruiker voorzien van yoga-video's die passen bij zijn of haar desbetreffende dag; die rekening houden met wisselende factoren zoals de hoeveelheid tijd, energie en/of motivatie die de gebruiker die dag heeft.

Deze applicatie zorgt ervoor dat je gemotiveerd blijft en met gemak dagelijks een moment kan vinden om te bewegen en de ruimte te nemen.

![README inleiding.jpg](src%2Fassets%2Fimages%2FREADME%20inleiding.jpg)

## Randvoorwaarden
De applicatie is gebouwd in een Javascript (JSX) runtime environment in React.

Er wordt gebruik gemaakt van de door Novi Hogeschool beschikbaar gestelde backend https://frontend-educational-backend.herokuapp.com/api/user.

Verder wordt er gebruik gemaakt van data-requests naar de YouTube API en type.fit quotes API.

Voor de type.fit quotes API is geen API key nodig voor YouTube kun je de API Key vinden in het bijgevoegde txt.bestand.



## Stappenplan instructie applicatie installeren

1.  Allereerst is het nodig om Node.js te gebruiken als runtime omgeving voor de de applicatie. installeer Node.js globaal op jouw computer. Om te voorkomen dat je door jouw gehele computer moeten navigeren, maak je eerst een leeg project aan in WebStorm. Noem het project edhub-node-nodemon-demo. Maak in dit project een nieuw JavaScript bestand aan, genaamd voorbeeld.js. Open alvast de terminal in dit project.

2.  Begin met het installeren van Node.js via deze website https://nodejs.org/en/download/. Wanneer je dit gedaan hebt, kun je testen of de installatie succesvol was door het volgende commando in de terminal te typen en dan op enter te drukken:

    node -v
    
    Als Node.js aanwezig is zul je een versienummer te zien krijgen, zoals bijvoorbeeld v13.9.3. Krijg je een andere melding, zoals
    bijvoorbeeld node: command not found dan is het nog niet (juist) geïnstalleerd.
    
3.  Checken of NPM correct mee geïnstalleerd is. Vraag het versienummer op van de huidige geïnstalleerde versie op je computer door het volgende in te toetsen in de terminal en daarna op enter te drukken:

    npm -v
    
    Je zult opnieuw een (ander) versienummer te zien krijgen, dit keer zonder de letter v, zoals bijvoorbeeld 6.4.1. Krijg je de melding: npm:
    command not found Installeer Node.js dan opnieuw. 

4.  Nu kun je nodemon installeren. We installeren nodemon daarom globaal op onze computer door het volgende commando in te typen in de terminal:

    npm install -g nodemon
    
    Werk je op een Mac en krijg je een foutmelding, lees dan stap 11. even na om dit op te lossen.

    De installatie van Nodemon op je computer is eenmalig en de eerste 4 stappen hoef je dus
    alleen de eerste keer uit te voeren.

5.  Download vervolgens de Yoga Space applicatie folder naar jouw PC of laptop en open je IDE of download het project direct vanuit github via de volgende link: https://github.com/VanessaSouldev/yoga-space in je IDE. 
6.  Open je IDE en open het project en kies voor npm install.
7.  Als je het project gecloned hebt naar jouw locale machine, installeer je eerst
    de node_modules door het volgende commando in de terminal te runnen:

    npm install

8.  De IDE zal vragen of je de dependencies wil installeren. Installeer ook de dependencies.
9.  Maak nu een eigen .env bestand aan en vul deze met de variabele-naam zoals beschreven in de env.dist map en de API Key die je in bijgevoegd txt. bestand terug kunt vinden.
10.  In de terminal maak je een build d.m.v. gebruik van het commando run npm build, vervolgens kun je het commando npm start gebruiken om de applicatie te starten.
11. Mac gebruikers zouden de foutmelding: Error: EACCES: permission denied, access '/usr/local/lib/node_modules' kunnen krijgen. Voer dan het volgende commando uit:

    sudo npm install -g nodemon


## Stappenplan applicatie doorlopen
1. Nu kun je de applicatie starten met behulp van het invoeren van het volgende commando in de terminal:

    npm start
    
    of gebruik de WebStorm knop npm start). Open http://localhost:3000 om de pagina in de
    browser te bekijken.
2.  De applicatie opent nu in je browser op de homepage,
    waar je kunt inloggen of registreren op de Yoga Space applicatie.


3.  Je zult eerst een eigen account aan moeten maken door op de "Register" knop te drukken, hierna kom je vanzelf op de login-pagina
    terecht, waar je met je gekozen gebruikersnaam en wachtwoord kunt inloggen.
     ![Registration.jpg](src%2Fassets%2Fimages%2FRegistration.jpg)
4. Als je bent ingelogd word je door het systeem naar de profielpagina doorgezet, waar je specifieke yogapose video's kunt opzoeken via de zoekbalk of via de onderste button naar je gepersonaliseerde dagelijkse yogavideo's verder kan gaan. Voor degenen die onbekend zijn met yoga, dit zijn een paar leuke om op te zoeken: 

* BREATH OF FIRE
* HAPPY BABY
* SCORPION
* NOSTRIL BREATHING
* DOWNWARD DOG
* COBBLER'S POSE
* LION'S BREATH
* WARRIOR I, II, III
* PIGEON'S POSE
* MOUNTAIN POSE
     ![Profile page.jpg](src%2Fassets%2Fimages%2FProfile%20page.jpg)
5.  Wanneer je ervoor kiest naar je dagelijkse yogavideo's te gaan door op de button onderaaan de profielpagina (hierboven) te drukken. Kom je op de vragen/welkomstpagina terecht.
      ![Questionnaire.jpg](src%2Fassets%2Fimages%2FQuestionnaire.jpg)
6.  Door de vragen op de vragen/welkomstpagina in te vullen, zul je gepresenteerd worden met de voor jou geselecteerde video's die je
individueel kunt afspelen door op de "play button" te drukken van de betreffende video.
     ![Daily video's page.jpg](src%2Fassets%2Fimages%2FDaily%20video%27s%20page.jpg)
7.  Je kunt je gekozen video, als je deze laat afspelen, vergroten, door op het fullscreen icoon rechtsonder in de video te drukken.


8.  Naast de video's op de videopagina bevinden zich buttons waarmee je de video's kunt toevoegen aan je favorieten, deze kun je dan weer
terugvinden op je profielpagina.
     ![Favorites Profile page.jpg](src%2Fassets%2Fimages%2FFavorites%20Profile%20page.jpg)


## beschikbare scripts

In de project directory, kun je de volgende npm commando's runnen:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

 `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
