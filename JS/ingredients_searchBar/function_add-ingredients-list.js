import {blockSubMenuIngredients } from "../const.js";

import { addTagsList } from "../function_addTagsList.js";
// AFFICHER LA LISTE DES INGREDIENTS [DES RECETTES] DANS LE BLOC INGREDIENT


export const addIngredientsList = (array) => {
  const arrayIngredients = [];
  array.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  const newArrayIngredients = Array.from(new Set(arrayIngredients));
  console.log(newArrayIngredients)
  
  blockSubMenuIngredients.innerHTML = "";
  
  
addTagsList(blockSubMenuIngredients, newArrayIngredients)

};
