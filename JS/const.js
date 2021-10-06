import { recipes } from "./data_recipes.js";

// Const DOM
export const searchBar = document.getElementById("site-search");
export const searchBarByTheme = document.querySelectorAll(
  "#filter-by > section"
);
export const searchBarByIngredients =
  document.getElementById("ingredients-search");
export const blockSubMenuIngredients = document.querySelector(
  "#by_ingredients > .sub_menu"
);
export const blockRecipesList = document.getElementById("recipes-list");
export const allTagsIngredients = document.querySelectorAll(
  "#ingredients_tags > li"
);


export const allBtnCross = document.querySelectorAll(".btn_cross");
export const blockYoursTags = document.getElementById("yoursTags");
// Const ARRAY
// tableau des titres
export const arrayTitle = recipes.map((element) => element.name);

// tableau des descriptions
export const arrayDescription = recipes.map((element) => element.description);

// tableau des appareils
export const arrayAppliance = recipes.map((element) => element.appliance);

// tableau des ustensiles
let arrayUstensils = recipes.map((element) => element.ustensils);
export let ustensilsList = [];
arrayUstensils.forEach((element) => {
  ustensilsList.push(...element);
});

  // valeur de l'input
  export let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();