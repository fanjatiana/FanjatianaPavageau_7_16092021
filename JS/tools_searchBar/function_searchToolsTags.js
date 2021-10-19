
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  searchBarByTools,
} from "../const.js";
import { addTagsList } from "../function_addTagsList.js";
import { toolNoFind } from "../function_messageError.js";
import { recipes } from "../data_recipes.js";
import { searchInToolsRecipes } from "../main_searchBar/function-search-tools-in-recipes.js";

export const searchToolsTags = () => {
  // valeur de l'input
  let valueInputTools = searchBarByTools.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // filtre sur les ingrédients

  const arrayTools = [];
  recipes.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
  });

  let newArrayTools = Array.from(new Set(arrayTools));

  let totalTools = newArrayTools.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInputTools)
  );

  const ulTagTools = document.querySelector(".sub_menu__tools");

  const addUlTagTools = `<ul id="tags__list"></ul>`;
  if (!totalTools.length) {
    return toolNoFind();
  } else if (valueInputTools.length < 3) {
    blockSubMenuAppliances.innerHTML = "";
    blockSubMenuIngredients.innerHTML = "";
    addTagsList(addUlTagTools, ulTagTools, newArrayTools);
    searchInToolsRecipes();
  } else {
    addTagsList(addUlTagTools, ulTagTools, totalTools);
  }
};
