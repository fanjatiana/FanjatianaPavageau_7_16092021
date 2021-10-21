import { blockSubMenuTools, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";

import { buildArticle } from "../function_buildArticles.js";
import { displayBlockSearchByTools } from "../function_displayBlockSearchBy.js";
import { toolNoFind } from "../function_messageError.js";

import { addToolsListOfRecipes } from "../tools_searchBar/function_add-recipes-tools.js";

export const searchInToolsRecipes = () => {

  blockSubMenuTools.addEventListener("click", displayBlockSearchByTools)
  // valeur de l'input
  let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();


 // filtre sur les descritptions
  const resultFilterByDescription = recipes.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );
  

  const resultFilterByTools = recipes.filter((recipe) => {
    recipe.ustensils.map((e) => e.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .includes(valueInput));
  });

  console.log(resultFilterByTools)
  


  const array = resultFilterByDescription.concat(resultFilterByTools);
console.log(array)
  const newArray = Array.from(new Set(array));
  console.log(newArray)

  if (!newArray.length) {
    return toolNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuTools.innerHTML = "";
    addToolsListOfRecipes(recipes);
    buildArticle(recipes);
  } else {
    blockSubMenuTools.innerHTML = "";
    addToolsListOfRecipes(newArray);
    buildArticle(newArray);
  }
};
