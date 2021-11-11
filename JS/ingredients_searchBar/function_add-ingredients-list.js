import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';

// AFFICHER LA LISTE DES INGREDIENTS [DES RECETTES] DANS LE BLOC INGREDIENT

export const addIngredientsList = (array) => {
  const arrayIngredients = [];
  array.filter((recipe) => {
    recipe.ingredients.map((list) => arrayIngredients.push(
      list.ingredient
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
    ));
    return arrayIngredients;
  });

  let newArrayIngredients = [];

  arrayIngredients.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayIngredients.push(newWord);
  });

  newArrayIngredients = Array.from(new Set(newArrayIngredients));

  return newArrayIngredients;
};
