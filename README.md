# Interface Domotique

## User Experience

L'utilisateur se connecte avec ses identifiants (Nom d'utilisateur, mot de passe).
Une fois connecté, sa maison s'affiche avec les différentes zones gérables. Une barre de navigation s'affiche aussi en haut de l'écran.

---
### <b> Au survol d'une zone </b>
    - La fond change de couleur afin de la marquer comme active et le nom de cette dernière s'affiche.
    - Le nombre d'éléments gérables dans cette pièce s'affiche au travers d'icônes caractéristiques
---
### <b> Au clic d'une zone </b>
    Un menu latéral apparait avec les différents objets que l'utilisateur peut gérer.
---
### <b> Sur le menu latéral de la zone associée </b>
#### <i> Gestion des luminaires </i>
    - Allumer / Éteindre toutes les lumière de la pièce
    - Allumer / Éteindre la lampe selectionnée
    - Modifier l'intensitée de la lampe sélectionnée
####  <i> Gestion de la température </i>
    - Prédéfinir des températures par périodes (Saisons, )
    - Définir la température voulue dans la pièce associée
#### <i> Gestion des volets roulants </i>
    - Ouvrir / Fermer tous les volets de la pièce associée
    - Ouvrir / Fermer le volet sélectionner
---
### <b> Barre de recherche </b>
    L'utilisateur a accès à une zone de recherche située dans la barre de navigation.
    La barre de recherche propose des résultats lors de la saisie.
---
### <b> Gestion de compte </b>

L'utilisateur peut cliquer sur un icône compte et accèder à ses différentes informations.
#### <i> Gestion des informations personnelles / Utilisateurs </i>
    - Nom d'utilisateur, Mot de passe, Adresse postale / mail
    - Possibilité de supprimer sa maison
    - Partager sa maison avec un ami pour qu'il puisse controler les objets en cas de vacances. (La personne annexe pourra seulement controler les apapreils)
    - Si la personne est administrateur du compte, elle pourra accéder aux différents sous utilisateurs (membre de la famille..) et les gérer.
    - Création / Modificatio, / Suppression d'utilisateurs
#### <i> Ajouter des zones dans sa maison </i>
    Ajouter des objets connectés à la nouvelle zone (Via Wifi / Bluetooth)
#### <i> Modifier des zones dans sa maison</i>
    - Ajouter / Modifier / Supprimer un objet de la zone sélectionnée
    - L'utilisateur peut modifier la zone (Nom, Coordonées, ...)
        Les coordoonées de la zone se gérent via un Drag & Drop directement sur l'image

#### <i> Supprimer une zone de la maison</i>
    Tous les objets et parametrages des objets de la zone sont également supprimés
    
## Architecture

### Back
Node.js
Socket.io (event subscriber listener, real time communication)

#### Base de données
Kafka avec SGBD Cassandra

Justification : 
Permet de gérer des grandes superficies en temps réel avec un important nombre de capteurs. Il est possible de faire du machine learning par dessus afin de gérer des statistiques sur l'utilisation des objets.
sExemple : il sera possible de faire une corrélation entre si elle existe entre la température extérieur, la température intérieur et l'inclinaison des stores.

#### API
Mise en place d'une API REST afin de gérer aussi bien les utilisateurs que les zones ou les objets.
Cette API permettra aussi via un middleware dédié de mettre en accord l'action demandée par l'utilisateur à la bonne API et à la requête.
Exemple : 
L'utilisateur allume une ampoule. La marque de l'ampoule et l'action est envoyée à l'API. Notre API récupérera le bon middleware qui se chargera d'exécuter la demande entre l'utilisateur et l'API en question.

Utilisation d'API externe (Prévisions météo, traffic)


#### MCD

![mcd](https://github.com/JordanTruchi/InterfaceDomotique/blob/master/static/img/mcd.png)

### Front
Vue.js 2 (Vue-cli)
Composant mono-fichier
Webpack (Config de prod et de dev présentes)
HTML5
CSS3
SCSS
LinterScss
Eslint
Axios
Lo_dash
Babel

## Installation

Projet Web de gestion d'une maison domotique

### Pré-requis

```
nodejs v10.15
npm v6.8
```

### Installer

Installer toutes les dépendances

```
npm i
```

### Run (dev)

To run the project on localhost

```
npm run devserver
```

To run the project on localhost (accessible from local network)

```
npm run devserver:remote
```

See package.json for others scripts

## Built With

* [Vuejs 2](https://vuejs.org/) - Javascript Framework
* [Webpack 4](https://webpack.js.org/concepts) - Bundler - Dependency Management