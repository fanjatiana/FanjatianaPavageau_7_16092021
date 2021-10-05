 import { articles } from "./let-and-const.js";
 
 // fonction d'affichage du message d'erreur
 
 export const RecipesNoFind = () => {
   articles.innerHTML = "";
    articles.innerHTML += `<p> aucune recette ne correspond à votre critère... vous pouvezchercher tarte aux pommes,poisson, etc</p>`;
  };