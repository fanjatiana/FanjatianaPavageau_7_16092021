import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { buildArticle } from "../function_buildArticles.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { RecipesNoFind } from "../function_messageError.js";
import { addToolsList } from "./function_add-tools-list.js";

export const showRecipesFilteredByTools = (allTags,dataFiltered) => {

  let arrayFilteredTag = [];
  allTags.forEach((tag) => {
    const resultFilterByTools = dataFiltered.filter((recipe) =>
      recipe.ustensils.includes(tag)
    );

    arrayFilteredTag = resultFilterByTools;

    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
    buildArticle(newArrayIFilteredTag);
    addToolsList(newArrayIFilteredTag);

    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }
  });
};
