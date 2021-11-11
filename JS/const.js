import { recipes } from "./data_recipes.js";

// Const DOM
export const baliseUl = document.getElementById("ingredients_tags");
export const searchBar = document.getElementById("site-search");
export const searchBarByTheme = document.querySelectorAll("#filter-by > section");
export const searchBarByIngredients = document.getElementById("ingredients-search");
export const blockSubMenuIngredients = document.querySelector("#by_ingredients > .sub_menu__ingredients");
export const blockRecipesList = document.getElementById("recipes-list");
export const allTagsIngredients = document.querySelectorAll("#ingredients_tags > li");
export const blockSubMenuTools = document.querySelector(".sub_menu__tools")
export const allBtnCross = document.querySelectorAll(".btn_cross");
export const blockYoursTags = document.getElementById("yoursTags");
export const searchBarByAppliances = document.getElementById("appliance-search");
export const blockSubMenuAppliances = document.querySelector(".sub_menu__appliances")
export const searchBarByTools = document.getElementById("tools-search");
export const ingredientsTagsListDisplayed = document.querySelectorAll(
  ".sub_menu__ingredients > .tags__list li"
);
export const appliancesTagsListDisplayed = document.querySelectorAll(
  ".sub_menu__appliances > .tags__list li"
);

//tags ingrédients
export const toolsTagsListDisplayed = document.querySelectorAll(
  ".sub_menu__tools > .tags__list li"
);


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


export const allIngredients = () =>{
  let arrayIngred = []
  recipes.map((recipe)=>{
    recipe.ingredients.map((list)=>{
     arrayIngred.push(list.ingredient)
    })
  
  })

  arrayIngred = Array.from(new Set(arrayIngred));
  return arrayIngred
}

export const allAppliances = () =>{
  let arrayAppliance = []
  recipes.map((recipe)=>{
    arrayAppliance.push(recipe.appliance)
  
  })

  arrayAppliance = Array.from(new Set(arrayAppliance));
  return arrayAppliance
}






// valeur de l'input barre principale
export const valueInput = searchBar.value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

