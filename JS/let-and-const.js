import { recipes } from "./data_recipes.js";

// tableau des titres
export const arrayTitle = recipes.map((element) => element.name );
//console.log(arrayTitle);

// tableau des ingrédients
const arrayIngredient = recipes.map((element) => element.ingredients);

export let ingredientsList = [];
arrayIngredient.forEach((product) => {
        ingredientsList.push(product[0].ingredient);
        
})


// tableau des descriptions
export const arrayDescription = recipes.map((element) => element.description);
//console.log(arrayDescription);

// tableau des appareils
export const arrayAppliance = recipes.map((element) => element.appliance);
//console.log(arrayAppliance);

// tableau des ustensiles

let arrayUstensils= recipes.map((element) => element.ustensils);

export let ustensilsList = [];
arrayUstensils.forEach(element => {
    ustensilsList.push(...element);
});

//console.log(ustensilsList)

export const searchBar = document.getElementById("site-search");

export const searchBarByTheme= document.querySelectorAll("#filter-by > section");

export const searchBarByIngredients= document.getElementById("ingredients-search");

export const blockSubMenuIngredients = document.querySelector("#by_ingredients > .sub_menu");

export const articles = document.getElementById("recipes-list");
