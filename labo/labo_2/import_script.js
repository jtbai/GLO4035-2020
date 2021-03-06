use ulaval

db.cours.insert(
[{
    "cours":{
        "sigle":"GLO-4035",
        "nom":"BASES DE DONNÉES AVANCÉES",
        "equivalent":"GLO-7035"
    },
    "session":["Automne"],
    "nombre_de_fois_offert" : 1,
    "nombre_etudiants" : [30, 62],
    "local_officiel" : [{"local":"PLT-3928", "nombre_de_cours":13}, {"local":"PLT-1337", "nombre_de_cours":2}],
    "enseignat_actuel": "Jean-Thomas Baillargeon",
    "anciens_enseignants": ["Jean-Thomas Baillargeon", "Richard Khoury"]
},
{
    "cours":{
        "sigle":"GLO-1901",
        "nom":"INTRODUCTION À LA PROGRAMMATION AVEC PYTHON"
    },
    "session":["Automne", "Hiver"],
    "nombre_de_fois_offert" : 18,
    "nombre_etudiants" : [100, 200, 150, 125, 123, 76, 23, 11, 130, 123, 136, 143, 65, 30, 62, 53, 86],
    "enseignant_actuel": "Marc Parizeau",
    "anciens_enseignants": ["Marc Parizeau"]
},
{
    "cours":{
        "sigle":"GLO-7027",
        "nom":"ANALYSE ET TRAITEMENT DE DONNÉES MASSIVES",
        "equivalent":"GLO-4027"
    },
    "enseignant_actuel": "Richard Khoury",
    "nombre_etudiants" : [32, 25, 64],
    "local_officiel" : [{"nombre_de_cours":13, "local":"PLT-1337"}, {"local":"PLT-3928", "nombre_de_cours":17}],
    "anciens_enseignants": ["Richard Khoury"],
    "session":["Hiver"],
    "nombre_de_fois_offert" : 2
},
{
    "cours":{
        "sigle":"GLO-4030",
        "nom":"APPRENTISSAGE PAR RÉSEAUX DE NEURONES PROFONDS",
        "equivalent":"GLO-7030"
    },
    "enseignant_actuel": "Philippe Giguère",
    "anciens_enseignants": [],
    "nombre_etudiants" : [22],
    "session":["Hiver"],
    "nombre_de_fois_offert" : 1
},
{
    "cours":{
        "sigle":"GLO-2100",
        "nom":"Algorithmes et structures de données pour ingénieurs"
    },
    "nombre_etudiants" : [30, 32, 45, 50, 32, 45, 55, 57, 48, 32, 36, 45, 54, 34],
    "enseignant_actuel": "Mario Marchand",
    "anciens_enseignants": ["Mario Marchand"],
    "session":["Automne"],
    "nombre_de_fois_offert" : 14
},
{
    "cours":{
        "sigle":"ACT-1002",
        "nom":"ANALYSE PROBABILISTE DES RISQUES ACTUARIELS"
    },
    "session":["Hiver", "Automne"],
    "enseignant_actuel": "Hélène Cossette",
    "local_officiel" : [{"nombre_de_cours":13, "local":"CMT-00154"}, {"nombre_de_cours": 133, "local":"PLT-1337"} ],
    "anciens_enseignants": ["Ghislain Léveillé", "Etienne Marceau"],
    "nombre_de_fois_offert" : 26
},
{
    "cours":{
        "sigle":"IFT-7022",
        "nom":"TECHNIQUES ET APPLICATIONS DU TRAITEMENT DE LA LANGUE NATURELLE"
    },
    "session":["Automne"],
    "enseignant_actuel": "Luc Lamontagne",
    "anciens_enseignants": ["Luc Lamontagne"],
    "nombre_de_fois_offert" : 8
},
{
    "cours":{
        "sigle":"ESG-1010",
        "nom":"ESPAÑOL ELEMENTAL I"
    },
    "session":["Ete_1", "Ete_2"],
    "enseignant_actuel": "Miriam Rodriguez",
    "anciens_enseignants": ["Enith-Dolorès Ceballos Diaz"],
    "nombre_de_fois_offert" : 56
}])