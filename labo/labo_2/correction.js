// La session d'automne viens tout juste de commencer, vous desirez faire un peu de menage dans votre base de données!

use ulaval
cours = db.cours

//1. Corrigez le typo dans le nom de la cle pour l'enseignant actuel du cours GLO-4035 

cours.update(
        {
            "cours.sigle":"GLO-4035"
        },{
            $unset: {enseignat_actuel: true},
            $set : {enseignant_actuel: "Jean-Thomas Baillargeon"}
        }
)

//2. Il faut incrémenter le compteur de 1 pour tous les cours de l'automne

cours.update(
    {session: "Automne"}, 
    {$inc: {
        "nombre_de_fois_offert":1
        }}, 
    {multi: true}
)


//3. Il semble qu'il manque trois professeurs pour le cours GLO-2100. Veuillez ajouter "Michel Louvain", "Rick Ashtley" et "Stefán Karl Stefánsson" à la liste.

cours.update(
    {"cours.sigle": "GLO-2100"}, 
    {$push : 
        {
            anciens_enseignants:{
                $each: ["Michel Louvain", "Rick Astley", "Stefán Karl Stefánsson"]
        }
    }}
)

//4. Après avoir parlé au département des ressources humaines, vous décidez d'enlever "Stefán Karl Stefánsson" car ils ne sera plus professeur à l'université.

cours.update(
    {"cours.sigle": "GLO-2100"}, 
    {$pop : 
        {anciens_enseignants:1}
    }
)

// Pour préparer des réponse aux question fréquente des étudiants, vous décidez de faire une peu d'exploration dans vos données

//5. Quels sont les cours qui sont offert uniquement au 2e et 3e cycle? 

cours.find(
    {"cours.sigle": 
        {$in :[/-6/, /-7/]},
   
    }
)

//6. Combien de cours on eu moins de 2 enseignants ?

cours.find(
    {$or: [
        {"anciens_enseignants": {$size : 1}},
        {"anciens_enseignants": {$size : 0}}
    ]}
).count()

//7. Quels sont les 2 cours de GLO ou IFT ayant été donnés le plus souvent et combien de fois ont-ils ete offerts?

cours.find(
    {
        "cours.sigle": {$in :[/GLO-/, /IFT-/]}
    }, {cours: true, nombre_de_fois_offert: true}

).sort({nombre_de_fois_offert:-1}).limit(2)

//8. Quels cours sont donnés à l'automne et à l'hiver ?

cours.find(
    {
        session : {$all : ["Automne", "Hiver"]}
    }
)

//9. Quel est le cours ayant eu son local officiel au PLT-1337 13 fois ?

cours.find({
       local_officiel : 
           {$elemMatch: {local: "PLT-1337", nombre_de_cours: 13}}
    }
)


//10. Quel est le cours le plus constant en terme de nombre d'étudiants? On cherche un cours qui a toujours eu entre 30 et 60 étudiants

cours.find(
    {
    nombre_etudiants:{$exists:true},
     $where : "Math.max(...this.nombre_etudiants) >= 30 && Math.max(...this.nombre_etudiants) <= 60 ; "
    }
)

