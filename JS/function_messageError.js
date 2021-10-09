// fonction d'affichage du message d'erreur des articles 

export const RecipesNoFind = () => {
  document.getElementById("recipes-list").innerHTML = "";
  document.getElementById(
    "recipes-list"
  ).innerHTML += `<p> aucune recette ne correspond à votre critère... vous pouvezchercher tarte aux pommes,poisson, etc</p>`;
};

import { blockSubMenuIngredients } from "./const.js";

// fonction d'affichage du message d'erreur des tags ingrédient
export const tagNoFind = () => {
  blockSubMenuIngredients.innerHTML = "";
  blockSubMenuIngredients.innerHTML += `<p> aucun ingrédient ne correspond à votre critère... vous pouvez chercher sucre,beurre, etc</p>`;
};
