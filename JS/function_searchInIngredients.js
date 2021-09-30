import { searchBarByIngredients } from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { addIngredientsList } from "./function_addIngredientsList.js";
import { displayBlockSearchBy } from "./function_displayBlockSearchBy.js";
import { AddIngredientsTags } from "./class_addIngredientsTags.js";

export const searchInIngredients = () => {
  searchBarByIngredients.addEventListener("keydown", displayBlockSearchBy);

  // valeur de l'input
  let valueInput = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  console.log(valueInput);

  // filtre sur les ingrédients
  const resultFilterByIngredients = recipes.filter((recipe) =>
    recipe.ingredients
      .map((list) =>
        list.ingredient
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
      .includes(valueInput)
  );

  const arrayIngredients = [];
  recipes.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  const newArrayIngredients = Array.from(new Set(arrayIngredients));
  console.log(resultFilterByIngredients)

  if ( newArrayIngredients) {
    const baliseUl = document.getElementById("ingredients_tags");
    baliseUl.innerHTML = "";
    addIngredientsList(resultFilterByIngredients);
  }
};