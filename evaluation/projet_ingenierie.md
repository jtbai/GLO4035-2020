# Projet: Parcours de vélo épicurien 
Vous avez eu l'excellente idée pour une application! Il s'agit d'une application permettant à un utilisateur d'obtenir un parcours à vélo sur lequel sont situés les meilleurs restaurants d'une région.
Afin de matérialiser votre idée, vous désirez monter un dossier de candidature pouvant être présenté à des investisseurs potentiels qui financeront son développement (en échange de votre âme).

# Le dossier de candidature comprend:
### GLO-4035
- Une application MVP (produit minimum viable) (15%)
- Un rapport technique de l'application (10%)

### GLO-7035
- Une application MVP (produit minimum viable) (20%)
- Un rapport technique de l'application (15%)


## Application preuve de concept
Une preuve de concept n'est pas une application finale. Elle doit être cependant être suffisamment complété afin de la rendre intéressante et de prouver que le concept est viable des points de vue fonctionnels, techniques et financiers.

D'un point de vue fonctionnel, l'application doit permettre à un utilisateur d'obtenir un parcours en spécifiant 
- un nombre d'arrêt souhaité, 
- la distance maximale à parcourir et 
- une liste de types de restaurants
- pour une ville en particulier.

Bien que non nécessaire, l'application peut prévoir
- Une interface graphique attrayante
- Des statistiques intéressantes
- Des recommandation de parcours
- L'utilisation de données externes 
- Un sentiment de proximité pour les investisseurs qui sont de la ville de Québec

D'un point de vue technique, l'application doit
- Se déployer complètement par Docker (avec docker-compose)
    - Télécharger le code via github (ou tout autre repo en ligne)
    - Télécharger le jeu de données via aws (ou tout autre service de stockage enligne)
- Utiliser 2 types de bases de données différentes
- Ne pas inclure (trop) de dette technique

## Rapport technique
Le rapport technique est le document qui sera lu par les investisseurs potentiels­. Ces derniers s'attendent à trouver les éléments suivants:

- La présentation des données utilisées pour le projet **(1 point)**
    - Source, Taille
    - Analyse descriptive des données
- Les technologies utilisées pour le projet **(3 points)**
    - Langage de programmation
    - Bases de données
    - Modélisation des données en BD
- L'algorithme permettant de produire les parcours **(2 points)**
    - Comminucation des valeurs calculées entre les bases de données 
    - Calcul permettant de trouver le parcours épicurien le plus intéressant pour l'usager
- Une documentation de l'api (et/ou de l'interface) **(1 point)**
- Une explication du plan d'expansion **(3 points)**
    - Gestion d'un volume plus grand de données et d'utilisateurs 
    - Fonctionnalités additionnelles pouvant être implémentées grâce à la structure de vos données. 
        - Il est essentiel de présenter la structure des données et les algorithmes / requêtes 
        - Nouvelles données à acquérir (et fournir la stratégie pour les acquérir)  

  **GLO-7035**
- Fonctionnalité avancées **(5 points)**
    - Algorithmes d'intelligence artificielle / requêtes de BI / statistiques additionnelles
    - Pensez "multi-disciplinaire"

Il est possible que certains investisseurs potentiels soient eux-mêmes des informaticiens; il est impératifs que vous justifier **chacuns** de vos choix technologiques.

# Remises

## Remise 1: Évaluer la faisabilité (30 septembre 23h59)
Avant de se lancer dans le développement d'une application, il est important de valider que les données nécessaires au projet existent et peuvent être expoitées.
Dans cette remise, vous devez écrire un document d'une page au maximum décrivant la 
- Stratégie d'acquisition des données (route de vélo, restaurants)
    - La Provenance
    - La méthode d'acquisition
    - Le format attendu des données
- Stratégie de déploiement 
    - Le serveur web utilisé
    - La disponibilité d'un conteneur
    - Les bases de données utilisées
    - La disponibilité de ces conteneurs 

## Remise 2: Dérisquer l'infrastructure et les données (5 novembre 23h59)
Votre projet comporte deux grand risques: soient l'aspect infrastructure de tout connecter ensemble et importer les données externes à vos bases de données. Dans cette remise, ces deux aspects doivent être dérisqués. Une excellente façon d'atteindre cet objectif est de fournir 

un fichier docker-compose qui lance
- votre application (API) web 
- les bases de données utilisées

l'application devra répondre à une requête sur le port **8080**
```
@GET /heartbeat

returns:
{
    "nb_restaurants":int,
    "total_path_length":float
}

```
Où l'objet retourné contient: 
- le nombre de restaurants `nb_restaurant` contenu dans votre base de données
- la longueur totale `total_path_length` en m de route cyclable contenue dans votre base de données


## Remise 3: L'application MVP (2 décembre 23h59)
Pour la remise de votre projet final, vous devriez être capable de réutiliser le même fichier docker-compose. 
S'il doit être modifié afin de refléter certains éléments que vous n'aviez pas envisagés, n'hésitez pas à le mettre à jour.
Votre application devrait maintenant répondre à ces quatre appels. 

**GLO-7035 En plus de ces quatre appels, vous devriez songer à intégrer des éléments mettant en valeur vos études supérieures!**

### Readme
Cet appel permet de recevoir un fichier readme (en markdown) qui contient tous les appels possibles, les payloads attendus et la réponse.

```
@GET /readme
```

### Obtenir la liste des types disponibles
Cet appel permet à un utilisateur ou a une application d'obtenir tous les types de parcours disponibles.
Il s'agit tout simplement de la liste des types de restaurants disponibles dans votre base de données

```
@GET /type

returns:
[
    str,
    str,
    str,
    ...
]

```
### Obtenir un point de départ 
Cet appel permet à un utilisateur ou une application cliente d'obtenir un point de départ aléatoire:
- d'un trajet d'une longueur `maximum_length` ± 10%
- comprenant des restaurants inclus dans les types définis dans le tableau `type`

Le point de départ est un objet géographique de type `GeoPoint`

```
@GET /starting-point (avec le payload):
{
    "maximum_length": int (en mètre),
    "type": [str, str, ... ]
}

returns:
{
    "starting_point" : {"type":"Point", "coordinates":[float, float]}
}
```

### Générer un parcours 
Cet appel permet à un utilisateur ou une application cliente d'obtenir: 
- un trajet partant d'un point dans un rayon de 500m du point `starting_point`
- le trajet obtenu est d'une longueur de `maximum_length` ± 10%
- le trajet à au plus (et de préférence) `number_of_stops` arrets
- qui sont des restaurants inclus dans les types définis dans le tableau `type`

Le trajet obtenu est une liste de 
- segments définis comme un paire
    - d'objet géographique `path` de type LineString
    - d'objet restaurant  `restaurant`

```
@GET /parcours (avec le payload):
{
    "starting_point" : {"type":"Point", "coordinates":[float, float]},
    "maximum_length": int (en mètre),
    "number_of_stops": int,
    "type": [str, str, ... ]
}

returns:
[
    {
        "segment_id":1,
       "path": {
           "type":"LineString", 
           "coordinates":[[float, float], [float, float]]
        },
        "restaurant": {
            "name": string,
            "type": string,
            "cote": float,
    },{
        "segment_id":2,
        ....   
    }
]
```

## Remise 4: le rapport technique (9 décembre 23h59)
Le rapport technique doit être remis en format pdf et doit contenir toutes les sections décrites plus haut
