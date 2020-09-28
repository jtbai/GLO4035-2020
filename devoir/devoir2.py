### Devoir 2: La route des bières ###
# 
# Encore une fois, vos réponses doivent s'imprimer sur une seule ligne

from py2neo import Graph

url = "bolt://hobby-cadhdlpnnngcgbkedpdjadbl.dbs.graphenedb.com:24786"
user = "glo4035"
password = "b.SRNR7gZ3brF4.FllenLzVYTKvAvwF"

base_de_donnee = Graph(url, auth=(user,password),  scheme='bolt', secure=True)

#Question de pratique: Quelles sont les microbrasseries dans la ville de Québec? (0 points)
print("#Q0")
requete_0 = base_de_donnee.run("MATCH (micro:Microbrasserie)-[:est_à]->(depart:Ville) WHERE depart.nom = \"Québec\" RETURN micro")
print([x['micro']['nom'] for x in requete_0])

#Quelles sont les bières brassées à Québec?
# (2 points)
print("#Q1")

# Avant de quitter pour la grande aventure, vous désirez connaître quelles sont les villes adjacentes à québec ayant une micro brasserie?
# (2 points)
print("#Q2")

#Vous ne connaissez pas beaucoup les bières de type "Rousse", mais vous aimeriez trouver la meilleure au québec. Quel est le nom de la meilleure bière rousse et quelle est sa cote?
# (2 points)
print("#Q3")

# Vous êtes un grand amateur de bières de types "Saison". Dans quelles villes trouverez vous ce type de bière?
# (2 points)
print("#Q4")

# Vous désirez trouver une place tranquille pour prendre une bière, Quelles sont les villes ayant une microbrasserie et ayant moins de 20 000 habitants
# (2 points)
print("#Q5")

# Combien de bière de type "India Pale Ale" sont faites au québec
# (2 points)
print("#Q6")

# Quels sont les types de bières en commun entre "Dieu du ciel" et "Le trou du diable"
# (3 points)
print("#Q7")