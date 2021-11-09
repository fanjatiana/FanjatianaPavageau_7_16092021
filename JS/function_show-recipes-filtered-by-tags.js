import { buildArticle } from "./function_buildArticles.js";
import { capitalizeFirstLetter } from "./function_capitalizer-first-letter.js";

import {
  applianceNoFind,
  RecipesNoFind,
  tagNoFind,
  toolNoFind,
} from "./function_messageError.js";

export const showRecipesFiltered = (allTags, dataFiltered) => {
  let arrayFilteredTag = [];
  allTags.forEach((tag) => {
    const resultFilterByIngredients = dataFiltered.filter((recipe) =>
      recipe.ingredients.map((list) =>
        list.ingredient
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""))
          .includes(
            tag
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    ;
    const resultFilterByAppliances = dataFiltered.filter((recipe) =>
      recipe.appliance.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(tag.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")))
    ;
    const resultFilterByTools = dataFiltered.filter((recipe) =>
      recipe.ustensils.map((list) =>
      list.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")).includes(tag.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""))
    );

    arrayFilteredTag = resultFilterByIngredients.concat(
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
