import { blockSubMenuIngredients } from "./const.js";

// fonction d'affichage du message d'erreur
 export const tagNoFind = () => {
    blockSubMenuIngredients.innerHTML = "";
    blockSubMenuIngredients.innerHTML += `<p> aucun ingrédient ne correspond à votre critère... vous pouvez chercher sucre,beurre, etc</p>`;
  };