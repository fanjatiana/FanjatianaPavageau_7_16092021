import { recipes } from "./data_recipes.js";
import {
  searchBarByIngredients,
  blockSubMenuIngredients,
} from "./let-and-const.js";

import { AddIngredientsTags } from "./class_addIngredientsTags.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
   
  const arrayIngredients = [];
  array.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  const newArrayIngredients = Array.from(new Set(arrayIngredients));
 blockSubMenuIngredients.innerHTML += `<ul id="ingredients_tags"></ul>`;

  newArrayIngredients.forEach((element) => {
    const list = new AddIngredientsTags(element);
  });
};
