import { blockSubMenuAppliances, blockSubMenuIngredients, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";

import { buildArticle } from "../function_buildArticles.js";

import { applianceNoFind} from "../function_messageError.js";

import { displayBlockSearchByAppliances } from "../function_displayBlockSearchBy.js";
import { addAppliancesList } from "../appliances_searchBar/function_add-appliances-list.js";

export const searchInAppliances = () => {

  blockSubMenuAppliances.addEventListener("click", displayBlockSearchByAppliances)
  // valeur de l'input
  let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // filtre sur les appareils
  const resultFilterByAppliances = recipes.filter((recipe) =>
  recipe.appliance
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  let arrayAppliances =  resultFilterByAppliances;
 let newArrayAppliances = Array.from(new Set(arrayAppliances));
 newArrayAppliances.sort()
 

  if (!newArrayAppliances.length) {
    return applianceNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuAppliances.innerHTML = "";
    addAppliancesList(recipes);
    buildArticle(recipes);
  } else {
    blockSubMenuAppliances.innerHTML = "";
    addAppliancesList(newArrayAppliances);
    buildArticle(newArrayAppliances);
  }
};
