Krótki opis: \
Nie wziąłem pod uwagę, terminu oddania więc niestety robione dość szybko "na kolanie". _variables.scss tylko kilka zmiennych dla pokazania znajomości działania scss. Starałem się zachować w większości przypadków konwencję nazewnictwa BEM.\
Braki:
1. @media
2. brak podstawowych zachowań typu hover

Strona, głównie scss kompilowana przy pomocy narzędzia Gulp(przydaje się też m.in. jako "liver server", który na bieżąco odświeża zmiany w kodzie) dlatego na głównym branchu master jest folder ze stroną i scss przed kompilacją a na gałęzi gh-pages jest strona gotowa do dystrybucji ze skompilowanym scss w fromie css, automatycznie wpięta na github pages hosting.\
Zatem mój kod podlegający ocenie znajduje się w gałęzi master(bez kompilacji proponuję nie włączać podglądu html gdyż linki do obrazków, cssów itd są napisane tak jak byśmy znajdowali się w folderze .dist dla ułatwienie kompilacji, fizycznie w nim nie jesteśmy zatem nic z tego się nie wyświetli) a strona gotowa do podglądu znajduje się pod linkiem: https://r4v88.github.io/TechnologieInternetuPJATK/


# To use Gulp:

`npm install -g gulp-cli`

`npm install`

`gulp`

