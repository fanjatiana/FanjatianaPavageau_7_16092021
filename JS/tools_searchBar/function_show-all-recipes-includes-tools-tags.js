import { blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { buildArticle } from "../function_buildArticles.js";
import { addToolsList } from "./function_add-tools-list.js";

export const showAllRecipesIncludesToolsTags = () => {
  const retrieveTags = getAllTagsSelected();
  // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné

  retrieveTags.forEach((tag) => {
    const resultFilterByTools = recipes.filter((recipe) =>
      recipe.ustensils.includes(tag)
    );

    let newArrayIFilteredTag = resultFilterByTools;
    newArrayIFilteredTag = Array.from(new Set(resultFilterByTools));

    if (tag.length === 1) {
      blockSubMenuTools.innerHTML = "";
      addToolsList(newArrayIFilteredTag);
      buildArticle(newArrayIFilteredTag);
    } else if (tag.length > 1) {
      addToolsList(newArrayIFilteredTag);
    } else {
      blockSubMenuTools.innerHTML = "";
      addToolsList(recipes);
      buildArticle(recipes);
    }
  });
};
