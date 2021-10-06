import { blockSubMenuIngredients } from "./const.js";

import { Tags } from "./class_Tags.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsListOfRecipes = (array) => {
  const arrayIngredients = [];
  array.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  const newArrayIngredients = Array.from(new Set(arrayIngredients));
  blockSubMenuIngredients.innerHTML += `<ul id="ingredients_tags"></ul>`;

  newArrayIngredients.forEach((element) => {
    const list = new Tags(element);
  });
};
