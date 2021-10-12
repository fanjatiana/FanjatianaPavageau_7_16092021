import {
  blockSubMenuIngredients,
  searchBarByIngredients,
} from "../const.js";
import { recipes } from "../data_recipes.js";
import { addIngredientsList } from "./function_addIngredientsList.js"
import { displayBlockSearchByIngredients } from "../function_displayBlockSearchBy.js";

import { tagNoFind } from "../function_messageError.js";
import { searchInIngredientsRecipes } from "../main_searchBar/function_search-in-ingredients-recipes.js";
import { showAllRecipesFiltered } from "../function_show-all-recipes-includes-ingredientsTags.js";

export const searchIngredientsTags = (event) => {
  event.preventDefault();
  const subMenuIngredients = document.querySelector(".sub_menu")
  searchBarByIngredients.addEventListener("keyup", displayBlockSearchByIngredients());

  // valeur de l'input
  let valueInput = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // filtre sur les ingrédients
  const array = [];
  recipes.filter((recipe) =>
    recipe.ingredients.map((list) => array.push(list.ingredient))
  );

  const newArray = Array.from(new Set(array));
  const allIngredients = newArray.sort();
  const totalIngredients = newArray.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );



  if (!totalIngredients.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsList(allIngredients);
    searchInIngredientsRecipes(event);
    showAllRecipesFiltered();
  } else {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsList(totalIngredients);
  }
};
