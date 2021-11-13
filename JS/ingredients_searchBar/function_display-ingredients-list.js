import { searchBarByIngredients } from '../const.js';
import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';
import { wordNormalize } from '../function_normalize.js';

export const displayIngredientsList = (array) => {
  // valeur de l'input
  const inputValue = searchBarByIngredients.value;
  wordNormalize(inputValue);

  // filtre sur les ingrédients
  const ingredientsList = [];
  array.filter((recipe) => recipe.ingredients.map((list) => ingredientsList.push(list.ingredient)));

  let newArrayIngredients = [];

  ingredientsList.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayIngredients.push(newWord);
  });

  newArrayIngredients = Array.from(new Set(newArrayIngredients));

  newArrayIngredients.sort();

  const totalIngredients = newArrayIngredients.filter((element) =>wordNormalize(element).includes(inputValue));

  return totalIngredients;
};
