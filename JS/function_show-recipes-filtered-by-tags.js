import { buildArticle } from "./function_buildArticles.js";

import { RecipesNoFind } from "./function_messageError.js";

export const showRecipesFiltered = (retrieveTags, dataFiltered) => {
  let arrayFilteredTag = [];
  retrieveTags.forEach((tag) => {
    const resultFilterByDescription = dataFiltered.filter((recipe) =>
      recipe.description.includes(tag)
    );

    const resultFilterByName = dataFiltered.filter((recipe) =>
      recipe.name.includes(tag)
    );
    const resultFilterByIngredients = dataFiltered.filter((recipe) =>
      recipe.ingredients.map((list) => list.ingredient).includes(tag)
    );
    const resultFilterByAppliances = dataFiltered.filter((recipe) =>
      recipe.appliance.includes(tag)
    );

    arrayFilteredTag = resultFilterByDescription.concat(
      resultFilterByName,
      resultFilterByIngredients,
      resultFilterByAppliances
    );

    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));

    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    } else {
      buildArticle(newArrayIFilteredTag);
    }
  });
};
