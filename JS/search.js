import { recipes } from "./recipes.js";


// tableau des titres
const arrayTitle = recipes.map((element) => element.name );
//console.log(arrayTitle);

// tableau des ingrédients
const arrayIngredient = recipes.map((element) => element.ingredients);

let ingredientsList = []
arrayIngredient.forEach((product) => {
        ingredientsList.push(product[0].ingredient);
})
//console.log(ingredientsList)

// tableau des descriptions
const arrayDescription = recipes.map((element) => element.description);
//console.log(arrayDescription);

// tableau des appareils
const arrayAppliance = recipes.map((element) => element.appliance);
//console.log(arrayAppliance);

// tableau des ustensiles

let arrayUstensils= recipes.map((element) => element.ustensils);

let ustensilsList = [];
arrayUstensils.forEach(element => {
    ustensilsList.push(...element);
});

//console.log(ustensilsList)



