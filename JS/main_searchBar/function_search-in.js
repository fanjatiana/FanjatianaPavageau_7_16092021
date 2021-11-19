import { recipes } from '../data_recipes.js';
import { searchBar } from '../const.js';
import { wordNormalize } from '../function_normalize.js';

// Fonction pour afficher la liste des menus en fonction des titres, descriptions, ingrédients

export const searchIn = () => {
  // valeur de l'input
  const inputValue = wordNormalize(searchBar.value);

  // filtre sur les titres
  const resultFilterByName = recipes.filter((recipe) => wordNormalize(recipe.name).includes(inputValue));

  // filtre sur les descritptions
  const resultFilterByDescription = recipes.filter((recipe) => wordNormalize(recipe.description).includes(inputValue));

  // filtre sur les ingrédients
  const resultFilterByIngredients = recipes.filter((recipe) => recipe.ingredients.map((list) => wordNormalize(list.ingredient)).includes(inputValue));

  // concaténation des tableaux
  const array = resultFilterByName.concat(
    resultFilterByDescription,
    resultFilterByIngredients,
  );

  const newArrayRecipes = Array.from(new Set(array)); // suppression des doublons;
  return newArrayRecipes;
};
