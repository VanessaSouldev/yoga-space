# Installatiehandleiding Yoga Space applicatie

Deze app is gemaakt om het voor de gebruiker makkelijk te maken om een dagelijkse of wekelijkse yoga-routine op te bouwen.

Middels deze applicatie wordt de gebruiker voorzien van yoga-video's die passen bij zijn of haar desbetreffende dag; die rekening houden met wisselende factoren zoals de hoeveelheid tijd, energie en/of motivatie die de gebruiker die dag heeft.

Deze applicatie zorgt ervoor dat je gemotiveerd blijft en met gemak dagelijks een moment kan vinden om te bewegen en de ruimte te nemen.

![Screenshot README.jpg](src%2FComponents%2Fassets%2Fimages%2FScreenshot%20README.jpg)

De applicatie is gebouwd in een Javascript (JSX) runtime environment in React.

Er wordt gebruik gemaakt van de door Novi beschikbaar gestelde backend https://frontend-educational-backend.herokuapp.com/api/user.

Verder wordt er gebruik gemaakt van data-requests naar de YouTube API en type.fit quotes API.

Voor de type.fit quotes API is geen API key nodig voor YouTube is de API Key: AIzaSyBLWOuDnCiz7zLrXfZIhmcoBUA9V3MRbF4

## Stappenplan installatie instructie

1. Download de folder naar jouw PC of laptop en open je IDE of download het project direct vanuit github via de volgende link: https://github.com/VanessaSouldev/yoga-space in je IDE.
2. Open je IDE en open het project en kies voor npm install.
3. Installeer ook de dependencies.
4. open de terminal en type npm start, de applicatie opent nu in je browser op de homepagina, waar je kunt inloggen of registreren op de Yoga Space applicatie.
5. Je kunt een eigen account aanmaken door op de "Register" knop te drukken, hierna kom je vanzelf op de login-pagina terecht, waar je met je gekozen username en wachtwoord kunt inloggen.
6. Door de vragen op de Questionnaire welkomstpagina in te vullen, zul je gepresenteerd worden met de voor jou geselecteerde video's die je individueel kunt afspelen door op de "play button" te drukken.
7. Je kunt je gekozen video, als je deze laat afspelen, vergroten, door op het fullscreen icoon rechtsonder in de video te drukken.



## beschikbare Scripts

In de project directory, kun je de volgende npm commando's runnen:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

