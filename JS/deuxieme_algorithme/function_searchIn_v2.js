import { searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { normalize } from "../function_normalize.js";
import { comparison } from "./functions_comparison-algo-V2.js";

export const searchInV2 = () => {
  // valeur de l'input
  let inputValue = searchBar.value;
    normalize(inputValue)

  // tableau des recettes filtrées
  let listOfRecipes = [];

  // on récupère les données dans l'array recipes
  for (let index = 0; index < recipes.length; index++) {
    const recipe = recipes[index];

    let title = recipe.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    let description = recipe.description
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(" ");

    let ingredients = recipe.ingredients;

    /* on compare les lettres entrées dans l'input aux lettres des titres des recettes:
     si "true" => on push dans le tableau : listOfRecipes*/
    const valid = comparison(valueInput, title);
    if (valid === true) {
      listOfRecipes.push(recipe);
    }

    /* on compare les lettres entrées dans l'input aux lettres de chaques mots de la description des recettes:
     si "true" => on push dans le tableau : listOfRecipes*/
    for (let index = 0; index < description.length; index++) {
      const word = description[index];

      const result = comparison(valueInput, word);
      if (result === true) {
        listOfRecipes.push(recipe);
      }
    }
    /* on compare les lettres entrées dans l'input aux lettres de chaques mots des ingrédients:
     si "true" => on push dans le tableau : listOfRecipes*/
    for (let index = 0; index < ingredients.length; index++) {
      let ingredientsList = ingredients[index];
      let ingredientName = ingredientsList.ingredient
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const valid = comparison(valueInput, ingredientName);
      if (valid === true) {
        console.log(recipe)
        listOfRecipes.push(recipe);
      }
    }
  }

  let newArrayRecipes = Array.from(new Set(listOfRecipes)); // suppression des doublons;
  return newArrayRecipes;
};
