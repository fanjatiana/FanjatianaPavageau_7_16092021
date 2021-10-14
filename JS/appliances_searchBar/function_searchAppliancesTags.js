import {
  blockSubMenuAppliances,
  searchBarByAppliances,
  valueInput,
} from "../const.js";
import { recipes } from "../data_recipes.js";
import { addTagsList } from "../function_addTagsList.js";
import { displayBlockSearchByAppliances } from "../function_displayBlockSearchBy.js";
//import {addAppliancesList} from "./function_addAppliancesList.js"
import { applianceNoFind, tagNoFind } from "../function_messageError.js";
import { showAllRecipesFiltered } from "../function_show-all-recipes-includes-ingredientsTags.js";
import { searchInIngredientsRecipes } from "../main_searchBar/function_search-in-ingredients-recipes.js";
import { searchInAppliancesRecipes } from "./function_searchInAppliancesOfRecipes.js";
export const searchAppliancesTags = (event) => {
  event.preventDefault();
  searchBarByAppliances.addEventListener(
    "keyup",
    displayBlockSearchByAppliances()
  );

  // valeur de l'input
  let valueInputAppliance = searchBarByAppliances.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();



  // filtre sur les ingrédients
  let arrayAppliances = [];
 recipes.filter((recipe) => arrayAppliances.push(recipe.appliance));

  let newArrayAppliances = Array.from(new Set(arrayAppliances));
  newArrayAppliances = newArrayAppliances.sort();

  console.log(newArrayAppliances)

  let totalAppliances = newArrayAppliances.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInputAppliance)
  );

  const ulTagAppliances = document.querySelector(".sub_menu__appliances");

  const addUlTagAppliances = `<ul id="tags__list"></ul>`;

  if (!totalAppliances.length) {
    return applianceNoFind();
  } else if (valueInputAppliance.length < 3) {
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(addUlTagAppliances, ulTagAppliances, newArrayAppliances);
  } else {
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(addUlTagAppliances, ulTagAppliances, totalAppliances);
  }
};
