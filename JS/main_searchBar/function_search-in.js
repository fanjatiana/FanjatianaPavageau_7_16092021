import { recipes } from '../data_recipes.js';
import { searchBar } from '../const.js';
import { inputNormalize } from '../function_normalize.js';

// Fonction pour afficher la liste des menus en fonction des titres, descriptions, ingrédients

export const searchIn = () => {
  // valeur de l'input
  const inputValue = searchBar.value.toLowerCase();
  inputNormalize(inputValue);

  // filtre sur les titres
  const resultFilterByName = recipes.filter((recipe) => recipe.name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .includes(inputValue));

  // filtre sur les descritptions
  const resultFilterByDescription = recipes.filter((recipe) => recipe.description
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .includes(inputValue));

  // filtre sur les ingrédients
  const resultFilterByIngredients = recipes.filter((recipe) => recipe.ingredients
    .map((list) => list.ingredient
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase())
    .includes(inputValue));

  // concaténation des tableaux
  const array = resultFilterByName.concat(
    resultFilterByDescription,
    resultFilterByIngredients,
  );

  const newArrayRecipes = Array.from(new Set(array)); // suppression des doublons;
  return newArrayRecipes;
};
