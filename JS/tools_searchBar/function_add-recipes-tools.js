import { blockSubMenuTools } from "../const.js";
import { addTagsList } from "../function_addTagsList.js";
import { selectThisToolsTag } from "./function_select-this-tools-tags.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addToolsListOfRecipes = (array) => {
  const arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
  });

  const newArrayTools = Array.from(new Set(arrayTools));
  const ulTag = `<ul id="tags__list"></ul>`;
  blockSubMenuTools.innerHTML = "";

  addTagsList(ulTag, blockSubMenuTools, newArrayTools);
  const allLiTags = document.querySelectorAll(
    "#tags__list > li"
  );
  selectThisToolsTag(allLiTags)

};
