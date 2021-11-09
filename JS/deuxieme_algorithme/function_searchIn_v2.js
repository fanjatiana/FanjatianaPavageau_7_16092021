import { searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { stringNormalize} from "../function_normalize.js";
import { comparison } from "./functions_comparison-algo-V2.js";

export const searchInV2 = () => {
  // valeur de l'input
  let inputValue = searchBar.value.toLowerCase();
    stringNormalize(inputValue)

  // tableau des recettes filtrées
  let listOfRecipes = [];

  // on récupère les données dans l'array recipes
  for (let index = 0; index < recipes.length; index++) {
    const recipe = recipes[index];

    let title = recipe.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()

    let description = recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
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
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()

      const valid = comparison(valueInput, ingredientName);
      if (valid === true) {
        listOfRecipes.push(recipe);
      }
    }
  }

  let newArrayRecipes = Array.from(new Set(listOfRecipes)); // suppression des doublons;
  return newArrayRecipes;
};
