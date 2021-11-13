import { searchBar } from '../const.js';
import { recipes } from '../data_recipes.js';
import { wordNormalize } from '../function_normalize.js';
import { comparison } from './functions_comparison-algo-V2.js';

export const searchInV2 = () => {
  // valeur de l'input
  const inputValue = searchBar.value;
  wordNormalize(inputValue);

  // tableau des recettes filtrées
  const listOfRecipes = [];

  // on récupère les données dans l'array recipes
  for (let index = 0; index < recipes.length; index + 1) {
    const recipe = recipes[index];

    const title = wordNormalize(recipe.name);

    const description = wordNormalize(recipe.description).split(' ');

    const { ingredients } = recipe;

    /* on compare les lettres entrées dans l'input aux lettres des titres des recettes:
     si "true" => on push dans le tableau : listOfRecipes */
    const valid = comparison(inputValue, title);
    if (valid === true) {
      listOfRecipes.push(recipe);
    }

    /* on compare les lettres entrées dans l'input aux lettres
     de chaques mots de la description des recettes:
     si "true" => on push dans le tableau : listOfRecipes */
    for (let i = 0; i < description.length; i + 1) {
      const word = description[index];

      const result = comparison(inputValue, word);
      if (result === true) {
        listOfRecipes.push(recipe);
      }
    }
    /* on compare les lettres entrées dans l'input aux lettres de chaques mots des ingrédients:
     si "true" => on push dans le tableau : listOfRecipes */
    for (let j = 0; j < ingredients.length; j + 1) {
      const ingredientsList = ingredients[index];
      const ingredientName = wordNormalize(ingredientsList.ingredient);

      const compare = comparison(inputValue, ingredientName);
      if (compare === true) {
        listOfRecipes.push(recipe);
      }
    }
  }

  const newArrayRecipes = Array.from(new Set(listOfRecipes)); // suppression des doublons;
  return newArrayRecipes;
};
