import { searchBarByIngredients, blockSubMenuIngredients } from '../const.js';
import { recipes } from '../data_recipes.js';
import { addTagsList } from '../function_addTagsList.js';
import { tagNoFind } from '../function_messageError.js';
import { wordNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { addIngredientsList } from './function_add-ingredients-list.js';
import { displayIngredientsList } from './function_display-ingredients-list.js';
import { filterByIngredientsTags } from './function_filter.js';

// recherche de tags ingrédients

export const searchInIngredientsTags = () => {
  searchBarByIngredients.addEventListener('input', () => {
    const blockIngredient = document.getElementById('by_ingredients');
    blockIngredient.style.height = 'auto';
    const valueInput = searchBarByIngredients.value;
    wordNormalize(valueInput);
    const newArray = returnNewRecipesList();
    const allNewIngredients = addIngredientsList(newArray);
    const ingredients = displayIngredientsList(recipes);

    if (!ingredients.length) {
      return tagNoFind();
    } if (valueInput.length < 3) {
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      filterByIngredientsTags();
    } else {
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, ingredients);
      filterByIngredientsTags();
    }
    return allNewIngredients;
  });
};
