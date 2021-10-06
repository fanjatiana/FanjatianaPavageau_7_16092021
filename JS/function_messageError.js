 import { blockRecipesList } from "./const.js";
 
 // fonction d'affichage du message d'erreur
 
 export const RecipesNoFind = () => {
  document.getElementById("recipes-list").innerHTML = "";
  document.getElementById("recipes-list").innerHTML += `<p> aucune recette ne correspond à votre critère... vous pouvezchercher tarte aux pommes,poisson, etc</p>`;
  };