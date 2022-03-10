import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "recettes" : [
      {
        "nom" : "Quiche Lorraine",
        "id" : 1,
        "typeID" : 1,
        "nbPersonne" : 4,
        "ingredients" : "1 rouleau pate brisée - 3 oeufs - 250g crème fraiche - 150g lardon - muscade - sel - poivre",
        "etapes" : "Pré-chauffer le four à 200°C (thermostat 6-7). Dérouler la pâte brisée et la placer dans un plat à tarte. Piquer le fond avec une fourchette. - Faire dorer les lardons. -Pendant ce temps, mélanger les oeufs battus et la crème fraîche. - Une fois les lardons dorés, les mélanger à la préparation aux oeufs. - Saler, poivrer, et ajouter la muscade selon votre convenance. - Verser la préparation sur le fond de pâte et Mettre au four pendant 30 min.",
        "image" :  'quiche_lorraine.jpg'
      },
      {
        "nom" : "Porc Caramel",
        "id" : 2,
        "typeID" : 2,
        "nbPersonne" : 4,
        "ingredients" : "1kg echine de porc - 4 C à S sauce soja - 1 CàS gingembre - 1 cube bouillon volaille - 20g sucre - 400g riz thaï",
        "etapes" : "Découpez l\\'échine en bouchées. Faites-les revenir 5 minutes dans une cocotte à fond épais avec un peu d\\'huile - Préparez ensuite le bouillon dans un récipient à part, délayez les cubes de bouillon de poule dans ½ litre d\\'eau chaude en les écrasant. Puis rajoutez le gingembre et la sauce soja. - préparer votre caramel avec le sucre et 5 cl d\\'eau. Dès que le caramel est bien roux, jetez-y d\\'un seul coup le bouillon. Le caramel va se durcir rapidement, vous devez continuer à tourner avec une cuillère en bois pour le diluer petit à petit dans le bouillon. - Dès que le caramel s\\'est bien dissous au bouillon, plongez-y votre viande. Le bouillon doit recouvrir environ la viande. Faites ensuite bouillir à feu vif en remuant votre viande pour ne pas qu\\'elle accroche. Le plat est terminé au moment où l\\'eau s\\'est évaporée pour laisser place à un sirop caramélisé épicé qui se mélangera à vos morceaux de viande.",
        "image" : "porc_caramel.jpg"
      },
      {
        "nom" : "Cheesecake",
        "id" : 3,
        "typeID" : 3,
        "nbPersonne" : 8,
        "ingredients" : "250 g de biscuits émiettés - 125 g de beurre fondu - 500 g de fromage blanc - 150 g de sucre semoule - 2 cuillères à soupe de farine - 3 œufs - 25 cl de crème fraîche - cuillère à café d'extrait de vanille.",
        "etapes" : "Tapissez de papier sulfurisé et préalablement beurré un moule de 23 cm de diamètre.Mélangez les biscuits et le beurre fondu. - Tapissez le fond du moule de ce mélange en tassant bien avec le dos d\\'une cuillère. Placez au réfrigérateur. Battez la faisselle au fouet jusqu\\'à ce qu\\'elle soit lisse, puis ajoutez le sucre et la farine et les oeufs un par un.\\r\\nAjoutez ensuite la crème et le parfum de votre choix. - Versez cette préparation sur la croûte biscuitée. - Enfournez pour 50-55 minutes de cuisson jusqu\\'à ce que la préparation au fromage soit ferme au toucher. - Laissez refroidir, démoulez et servez frais.",
        "image" : "Cheesecake.jpg"
      },
    ],
    "type" : [
      {
        "id" : 1,
        "nom" : "Entrée"
      },
      {
        "id" : 2,
        "nom" : "Plat"
      },
      {
        "id" : 3,
        "nom" : "Dessert"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
