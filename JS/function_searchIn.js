import { recipes } from "./data_recipes.js";
import {
  arrayTitle,
  searchBar,
  arrayDescription,
  ingredientsList,
} from "./let-and-const.js";
import { buildArticle } from "./function_buildArticles.js";

// Fonction pour afficher la liste des menus

export const searchIn = (event) => {
  event.preventDefault();

  // valeur de l'input
  let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // filtre sur les titres
  const resultFilterByName = recipes.filter((recipe) =>
    recipe.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  // filtre sur les descritptions
  const resultFilterByDescription = recipes.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  // filtre sur les ingrédients
  const resultFilterByIngredients = recipes.filter((recipe) =>
    recipe.ingredients
      .map((list) =>
        list.ingredient
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
      .includes(valueInput)
  );

  // concaténation des tableaux
  const array = resultFilterByName.concat(
    resultFilterByDescription,
    resultFilterByIngredients
  );

  const newArrayRecipes = Array.from(new Set(array)); // suppression des doublons
  console.log(newArrayRecipes)

 const messageError =() =>{
   document.getElementById(
    "recipes-list").innerHTML = "";
    document.getElementById(
      "recipes-list").innerHTML += `<p> aucune recette ne correspond à votre critère... vous pouvezchercher tarte aux pommes,poisson, etc</p>`

 }
 
  if (!newArrayRecipes.length) {
    return messageError()

  }else if (valueInput.length < 3) {
   return  buildArticle(recipes);
  }else {
 return  buildArticle(newArrayRecipes);
};

}
