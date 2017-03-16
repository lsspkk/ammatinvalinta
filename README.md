# ammatinvalinta
Simple node js web application for a query of professional interest.


Eli, Tällä hetkellä:

web-palvelu johon ammatinvalinnan soveltuvuuskysely


# versio 1 - node.js express.js -framework

- node, jotta palvelinpuoli JavaScriptillä, ja jotta voi lisätä websocket.io:n
  voi tehdä monen pelaajan enginen
- express, jotta templatet ja voi lisätä tietokannan
  http://expressjs.com/en/guide/database-integration.html

- repository githubissa https://github.com/lsspkk/ammatinvalinta
- käytetään handlebars-template-engineä eli generator käynnistettiin hbs:llä
  http://expressjs.com/en/starter/generator.html
- vagrant -palvelimella pitää npm install yms. komennoissa käyttää parametriä
  npm install --no-bin-links
  (koska windows-tiedostojärjestelmään ei saa linkkejä)

- ei käyttäjätunnuksia/salasanoja (lisätään myöhemmin)
- kysymysten lisäys suoraan JSON-tiedostoon kirjoittelemalla

## asennus
asenna vagrant jos haluat virtuaalipalvelimen
asenna nodejs ja expressjs
git clone https://github.com/lsspkk/ammatinvalinta
cd ammatinvalinta
npm install


aja web-palvelin
DEBUG=myapp:* npm start
ota yhtyettä palvelimen porttiin 1337


## tuotanto - serveri päälle
Lue ohjeet täältä https://github.com/Unitech/pm2/blob/master/README.md
npm install pm2 -g
npm install pm2@latest -g; pm2 update
pm2 startup systemd
pm2 start bin/www -n "ammatinvalinta"


## konffaus
- bin/web -tiedostoon palvelimen porttimuutokset yms.
- muokkaa kysymykset.json -tiedostoon kysymykset ja arviointiasteikot
- muokkaa routes evaluate.js, jos arviointilaskutapaa pitää muuttaa
  (nyt yhteenlasku)


## sovelluksen rakenne
app.js sisältää url-osoitteet,

routes niitä joka url:ille tietorakenteet/koodit

views sisältää templatet, jotka käyttää public-hakemistosta css ja js tietoja


## ulkoasu
kopioi haluamasi bootstrap -teema tänne public/stylesheets/bootstrap.css
teemoja saa esim täältä https://bootswatch.com/
tällä hetkellä käytössä Superhero -teema :D

muut muutokset CSS:ään public/stylesheets/style.css
