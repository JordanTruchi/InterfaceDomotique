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
L'utilisateur a accès à une zone de recherche située dans la barre de navigation. La barre de recherche propose des résultats lors de la saisie.
L'utilisateur peut cliquer sur un icône compte et accèder à ses différentes informations. 

* Sur la page compte :
    * L'utilisateur peut ajouter des zones dans sa maison.
        * L'utilisateur peut ajouter des objets connectés à la nouvelle zone
    * L'utilisateur peut modifier des zones dans sa maison.
        * L'utilisateur peut modifier la zone : nom, coordonées.
            * Les coordoonées se gérent via un Drag & Drop directement sur l'image
        * L'utilisateur peut ajouter, supprimer ou modifier un objet de la zone.
    * L'utilisateur peut supprimer une zone.
    * L'ajout d'objet connecté se fait par scan automatique (WIFI ou Bluetooth)
    * L'utilisateur peut supprimer un objet
    * Gérer son compte nom d'utilisateur, mot de passe, adresse, e-mail, supprimer sa maison, partager sa maison avec un ami pour qu'il puisse controler les objets en cas de vacances.
        * La personne annexe pourra seulement controler les apapreils.
    * Si la personne est administrateur du compte, elle pourra accéder aux différents sous utilisateurs (membre de la famille..) et les gérer.
        * Création d'utilisateur, modification ou supression.
    
## Architecture


### Back

#### Base de données

#### API




### Front





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