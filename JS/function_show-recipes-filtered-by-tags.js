import { buildArticle } from "./function_buildArticles.js";

import { applianceNoFind, RecipesNoFind, tagNoFind, toolNoFind } from "./function_messageError.js";

export const showRecipesFiltered = (allTags, dataFiltered) => {
  let arrayFilteredTag = [];
  allTags.forEach((tag) => {

    const resultFilterByIngredients = dataFiltered.filter((recipe) =>
      recipe.ingredients.map((list) => list.ingredient).includes(tag)
    );
    const resultFilterByAppliances = dataFiltered.filter((recipe) =>
      recipe.appliance.includes(tag)
    );
    const resultFilterByTools = dataFiltered.filter((recipe) =>
      recipe.ustensils.includes(tag)
    );
 

    arrayFilteredTag =
      resultFilterByIngredients.concat(
      resultFilterByAppliances,
      resultFilterByTools
    );

   let newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));


    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
      tagNoFind();
      toolNoFind();
      applianceNoFind();
    } else {
      buildArticle(newArrayIFilteredTag);
    }
  });
};
