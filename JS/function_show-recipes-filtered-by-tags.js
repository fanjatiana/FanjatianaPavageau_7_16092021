/* eslint-disable max-len */
import { buildArticle } from './function_buildArticles.js';
import {
  applianceNoFind,
  RecipesNoFind,
  tagNoFind,
  toolNoFind,
} from './function_messageError.js';
import { wordNormalize } from './function_normalize.js';

export const showRecipesFiltered = (allTags, dataFiltered) => {
  let arrayFilteredTag = dataFiltered;
  allTags.forEach((tag) => {
    const resultFilterByIngredients = arrayFilteredTag.filter((recipe) => recipe.ingredients.map((list) => wordNormalize(list.ingredient)).includes(wordNormalize(tag)));

    const resultFilterByAppliances = arrayFilteredTag.filter((recipe) => wordNormalize(recipe.appliance).includes(wordNormalize(tag)));

    const resultFilterByTools = arrayFilteredTag.filter((recipe) => recipe.ustensils.map((list) => wordNormalize(list)).includes(wordNormalize(tag)));

    arrayFilteredTag = resultFilterByIngredients.concat(
      resultFilterByAppliances,
      resultFilterByTools,
    );

    arrayFilteredTag = Array.from(new Set(arrayFilteredTag));

    if (!arrayFilteredTag.length) {
      RecipesNoFind();
      tagNoFind();
      toolNoFind();
      applianceNoFind();
    } else {
      buildArticle(arrayFilteredTag);
    }
  });
  return arrayFilteredTag;
};
