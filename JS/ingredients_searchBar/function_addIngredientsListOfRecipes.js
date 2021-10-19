import {blockSubMenuIngredients } from "../const.js";
import { addTagsList } from "../function_addTagsList.js";

// AFFICHER LA LISTE DES INGREDIENTS [DES RECETTES] DANS LE BLOC INGREDIENT


export const addIngredientsListOfRecipes = (array) => {
  const arrayIngredients = [];
  array.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  blockSubMenuIngredients.innerHTML = "";
  const ulTag = `<ul id="tags__list"></ul>`;
  const newArrayIngredients = Array.from(new Set(arrayIngredients));
addTagsList(ulTag, blockSubMenuIngredients, newArrayIngredients)
  

};
