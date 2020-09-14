show dbs
use ulaval
show collections

professeurs = db.professeurs

// 1 - trouver le professeur Étienne Marceau
etienne_marceau = {"nom": "Marceau", "prenom": "Etienne"}
champs_a_conserver = {"nom":true, "prenom":true, "_id":false}
professeurs.find(etienne_marceau, champs_a_conserver)

// 2 - trouvez le professeur Luc Lamontagne
luc_lamontagne = {"Nom": "Lamontagne", "Prenom": "Luc"}
professeurs.find(luc_lamontagne)
// pourtant il y a bel et bien un professeur nommé Luc Lamontagne. quel est le problème ??
luc_lamontagne = professeurs.find({"nom":"Lamontagne"})

// 3 - Enlevez les cours donnés à la session précédente  par Richard Khoury
rikho = professeurs.findOne({"nom":"Khoury"})
delete rikho.cours_derniere_session
professeurs.update({"nom":"Khoury"}, rikho)
professeurs.find({"nom":"Khoury"})

// 4 - Ajouter un nouveau professeur de votre choix. Il devrait au moins avoir un nom, prenom et une date de naissance ?
uncle_bob = {
    "nom" : "Martin",
    "2enom" : "Cecil",
    "prenom": "Robert",
    "date_naissance" : new Date(1960,03,12)
}
professeurs.insert(uncle_bob)
professeurs.find().count()

// 5 - Il semble qu'il y ait un professeur qui soit en double. Est-ce possible d'enlever la deuxieme occurence ? 
philippe_gregoire_2e_occurence = professeurs.find(ObjectId("5b90c0e33c3ed3e69da64544"))[0]
professeurs.remove(philippe_gregoire_2e_occurence)

// 6 - Comment trouver tous les professeurs d'une faculté de science ?
professeurs_fs = professeurs.find({"faculte":/fs/})

// 7 - Est-ce qu'il serait possible de n'avoir que leur nom et prénom ?
professeursfs = professeurs.find({"faculte":/fs/}, {'nom':1, 'prenom':1})

// 8 - Est-ce qu'il serait possible de normaliser les noms dans la base de données pour les prénoms soient en minuscule et les nom en majuscule? 
professeurs.find({}).forEach(function normalise(entry) {
    entry.nom = entry.nom.toUpperCase();
    entry.prenom = entry.prenom.toLowerCase();
    professeurs.save(entry)
});

// 9 - A quelle date a été ajouté le professeur Richard Khoury la base de données ?
rikho = professeurs.findOne({"nom":"Khoury"}, {"id":1})
rikho._id.getTimestamp()
