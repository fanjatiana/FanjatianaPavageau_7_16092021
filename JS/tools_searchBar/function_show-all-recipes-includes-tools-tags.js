import { blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";

import { buildArticle } from "../function_buildArticles.js";

import { addToolsListOfRecipes } from "./function_add-recipes-tools.js";
import { showRecipesFilteredByToolsAgain } from "./function-show-recipes-filtered-by-tools-tags.js";

export const showAllRecipesIncludesToolsTags = () => {
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau de recupération de la liste des tags selectionnés
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });

  // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné

  retrieveTags.forEach((tag) => {
    const resultFilterByTools = recipes.filter((recipe) =>
      recipe.ustensils.includes(tag)
    );
 

    const newArrayIFilteredTag = Array.from(new Set(resultFilterByTools));

    if (tag.length === 1) {
      blockSubMenuTools.innerHTML = "";
      addToolsListOfRecipes(newArrayIFilteredTag);
      buildArticle(newArrayIFilteredTag);
    } else if (tag.length > 1) {
      blockSubMenuTools.innerHTML = "";
      addToolsListOfRecipes(newArrayIFilteredTag);
      showRecipesFilteredByToolsAgain();
    } else {
      blockSubMenuTools.innerHTML = "";
      addToolsListOfRecipes(recipes);
      buildArticle(recipes);
    }
  });
};
