# Projet: Parcours de vélo épicurien 
Vous avez eu l'excellente idée pour une application! Il s'agit d'une application permettant à un utilisateur d'obtenir un parcours à vélo sur lequel sont situés les meilleurs restaurants d'une région.
Afin de matérialiser votre idée, vous désirez monter un dossier de candidature pouvant être présenté à des investisseurs potentiels qui financeront son développement (en échange de votre âme).

# Le dossier de candidature comprend:
### GLO-4035
- Une application MVP (produit minimum viable) (15%)
- Un rapport technique de l'application (15%)

### GLO-7035
- Une application MVP (produit minimum viable) (20%)
- Un rapport technique de l'application (20%)


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
- Utiliser 2 types de bases de données différentes
- Ne pas inclure (trop) de dette technique

## Rapport technique
Le rapport technique est le document qui sera lu par les investisseurs potentiels­. Ces derniers s'attendent à trouver les éléments suivants:

- Introducion **(1 point)**
    - Explication de la problématique
    - Sommaire de la solution 
    - Présentation du rapport
- Stratégie d'acquisition des données  **(2 points)**
    - Source, Taille
    - Analyse descriptive des données (nombre, moyenne, total des distance, etc.)
    - Présentation d'exemples de données source
- Technologies utilisées **(2 points)**
    - Langage de programmation
    - Bases de données
- Les détails de votre processus d'ETL  **(3 points)**
    - Processus d'extraction des données brutes
    - Processus de transformation vers les données transormées
    - Les données présentes dans chacune des bases de données
- Les détails de votre pipeline de donnée  **(3 points)**
    - Présenter L'algorithme permettant de produire les parcours
    - Calcul permettant de trouver le parcours épicurien le plus intéressant pour l'usager
- Une explication du plan d'expansion **(4 points)**
    - Gestion d'un volume plus grand de données et d'utilisateurs 
        - Stratégie de réplication 
        - Stratégie de partitionnement
        - Sécurité des bases de données
    - Fonctionnalités additionnelles pouvant être implémentées grâce à la structure de vos données. 
        - Présenter les données à acquérir, et la stratégie pour les acquérir
        - Présenter l'algorithme 

  **GLO-7035**
- Fonctionnalité avancées **(5 points)**
    - Algorithmes d'intelligence artificielle / requêtes de BI / statistiques additionnelles
    - Pensez "multi-disciplinaire"

Il est possible que certains investisseurs potentiels soient eux-mêmes des informaticiens; il est impératifs que vous justifier **chacuns** de vos choix technologiques selon les considérations de fiabilité, maintenabilité et d'extensibilité.

# Remises
Chaque remise est cumulative, c'est-à-dire que les livrables doivent toujours rester dans les remises ultérieures. Ainsi le rapport et l'application seront des  *work-in-progress* tout au long de la session. Évidemment, une mécanique de points permet de reprendre des points perdu en corigeant ses erreurs.

Évidemment, chaque *kick-off* de remise sera accompagnée d'un barême de correction de telle sorte que vous pourrez vous assurer d'avoir 100% à chaque remise ;)

## Remise 1: Étude de faisabilité (29 septembre 2020):
Avant de se lancer dans le développement d'une application, il est important de valider que les données et technologies nécessaires au projet existent et peuvent être expoitées. Dans cette remise, vous devez écrire un document de deux pages maximum décrivant la 


### Rapport
- Stratégie d'acquisition des données (Section 1)
- Technologies utilisées (Section 2)
    

### Application
- Un fichier docker compose qui 
    - Lance une application web sur le port 80
    - Docker compose qui lance les deux bases de données choisies

- Réponds à la requete sur le port 80 

```
@GET /heartbeat

returns:
{
    "villeChoisie": str
}

```

Où l'objet retourné contient: 
- `villeChoisie`: le nom de la ville choisie pour votre projet

## Remise 2 : Dérisquer l'application
Votre projet comporte deux grand risques: soient l'aspect infrastructure de tout connecter ensemble et importer les données externes à vos bases de données. Dans cette remise, ces deux aspects doivent être dérisqués.

### Rapport
- Les détails de votre processus d'ETL (Section 3)

### Application
- Doit répondre à la requête

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




## Remise 3: Présenter le MVP
Il s'agit de la remise de l'application MVP prête à présenter aux investisseurs


### Rapport 
- Intro (Section 0)
- Les détails de votre pipeline de donnée (Section 4)
- Une explication du plan d'expansion (Section 5)
    

### Application 
Votre MVP devrait pouvoir maintenant répondre à ces 4 appels additionnels. 
**Pour les gens de GLO-7035 - C'est ici que votre imagination doit être fertile ;) **


#### Readme
Cet appel permet de recevoir un fichier readme (en markdown) qui contient tous les appels possibles, les payloads attendus et la réponse.

```
@GET /readme
```

#### Obtenir la liste des types disponibles
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
#### Obtenir un point de départ 
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

#### Générer un parcours 
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
