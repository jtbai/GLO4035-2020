// En n'utilisant que la fonction aggregate
// mettre les documents dans la bd avec
// docker exec -i mongodb mongo < db_ulaval_actions.js

use ulaval
actions = db.actions

// 1 - A quelles dates est-ce que Erin O'Toole a-t-il des transactions 

// 2 - Combien de transactions Jagmeet Singh a-t-il faites

// 3 - Combien vaut le portefeuille de cryptomonnaie de Justin Trudeau en date du 1 octobre 2019 (11002.23$ / XBT)

// 4 - Combien on investi, annuellement, nos chers leaders en cryptomonnaie depuis 2016. On veut voir l'evolution par personne, par annee?

// 5 - Qui a acheté ses XBT au plus bas prix moyen? 

// 6 - Quelle est la difference entre le prix d'achat moyen minimum et maximum?

// 7 - Combien vaut le portfeuille de crypto de Jagmeet Singh? (XBT:11002.23 ETH:232.86)




///// MAP REDUCE - AIDE AU DEBOGAGE ///////

var emit = function(key, value){ 
    print("émission - clé: " + key + " valeur: " + value); 
}
actions.find()[3]
monMap.apply(actions.find()[3])

var cle_debogage = [{client:"Jean-Thomas Baillargeon"}]
var valeurs_debogage = [1,3,3,7]
monReduce(cle_debogage, valeurs_debogage)

