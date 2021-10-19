import { blockSubMenuTools } from "../const.js";
import { addTagsList } from "../function_addTagsList.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addToolsListOfRecipes = (array) => {
  const arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
  });

  const newArrayTools = Array.from(new Set(arrayTools));
  const ulTag = `<ul id="tags__list"></ul>`;
  //blockSubMenuTools.innerHTML = "";
  console.log(newArrayTools);
  addTagsList(ulTag, blockSubMenuTools, newArrayTools);
};
