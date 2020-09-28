// Vous êtes à la recherche d'une maison, mais les webapp et les interfaces graphiques vous donnent mal au coeur!
// (C'est normal vu que vous aimez beaucoup la ligne de commande!!!)
// Vous avez demandé à votre ami hackerman de vous trouver les codes d'accès direct à la base de données.
//////////////////////////////////
//// Il vous dit d'éxécuter les lignes suivantes:
// docker stop mongo_devoir1
// docker system prune -f
// docker run -d --name mongo_devoir1 mongo:4.2
// docker exec -it mongo_devoir1 mongo ds349587.mlab.com:49587/glo4035-datasets -u etudiant -p maison2000
//////////////////////////////////
// Comme c'est une mongoDB (c'est pas pantoute arrangé avec le gars des vues....), 
// vous utilisez votre grande expertise pour trouver la maison de vos rêves.
// Les critères données aux questions suivantes sont CUMULATIFS! 
//////
// Pour valider vos réponses, une formule de hashing vous sera données 
// par exemple MD5(Q2 * Q3) signifie : On passe dans un hash md5 le produit de la réponse à la Q2 et celle de la Q3, 
//////////////////////////////////
// Enfilez votre trench-coat et vos lunettes fumées de hacker.
// https://i.imgur.com/iVHfwLc.gif
//////////////////////////////////
// Pour tester votre solution
// docker exec -i mongo_devoir1 mongo < devoir1.js
//////////////////////////////////
// Listez les collections des documents. Créez la variable maison qui pointe vers la collection. 
show collections
maison = db['devoir1']


// 0. Creez une variable ulaval contenant un objet geospatial pouvant être utilisé pour faire des requêtes
// géospatiales near. Utilisez les coordonnées suivantes. latitude = 46.778665, longitude = -71.274410.
// Ce sont des coordonnées du Pavillon Pouliot de l'université Laval.
print("#Q0")


// 1. Quel champ de la base de données contient un index géospatial?
print("#Q1")

// 2. Combien de maisons à vendre y a-t-il dans un rayon de 10km de votre emplacement actuel?
print("#Q2")

// 3. Combien de maisons à vendre y a-t-il dans la zone précédente si on enlève les maisons à l'intérieur de 1km?
// MD5(Q2 * Q3) = 2ba20ddc7a57633a2c3b70700c0b4eec
print("#Q3")


// 4. Le prix que vous désirez payer est entre 200 000 et 450 000. Combien de maisons répondent à ce critère?
print("#Q4")


// 5. De plus, vous voulez du chauffage de type **Thermopompe** et à **Bois** mais pas de **Plinthe**! 
// Combien de maisons répondent à tous ces critères
// MD5(Q3 * Q5) = 9adeb82fffb5444e81fa0ce8ad8afe7a
print("#Q5") 


// 6. Pour des soucis d'uniformité, vous désirez une maison avec un seul élément composant sa façade extérieure! Combien de maisons répondent à ce critère?
print("#Q6")


// 7. Il semble que la maison de votre rêve est malheureusement sur la RIVE SUD DE QUÉBEC!
// La mention du mot Rive-Sud dans son identifiant vous fait frissonner.
// Vous êtes prêt à vous débarrasser de votre thermopompe OU votre chauffage au bois (mais pas des deux)  pour ne pas avoir de mention rive-sud ou
// chaudiere-appalaches dans l'identifiant (URL) de la maison. Combien de maisons répondent à ce critère ?
// MD5(Q7 ^ Q5) = f718499c1c8cef6730f9fd03c8125cab
print("#Q7") 


// 8. Comme vous savez que vous allez faire beaucoup de $$$ dans le futur, vous décidez d'hypothéquer votre vie avec la maison la plus chère du lot.
// Combien coute-t-elle ? (je désire le prix de la base de données - et non pas celle du site!)
// MD5(Q8 * Q6) = 6d3edda874581ee340d5a1bd9adad5b9 (uniquement les 6 chiffre de la Q8)
print("#Q8")


// 9. Pouvez-vous m'extraire automatiquement le nom de la ville dans laquelle se trouve votre maison de rêves? N'oubliez pas que le nom d'une 
// ville commence par une lettre majuscule!
print("#Q9")
