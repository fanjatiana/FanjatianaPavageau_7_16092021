import { searchBarByIngredients } from "../const.js";
import { stringNormalize } from "../function_normalize.js";

export const displayIngredientsList = (array) => {
  // valeur de l'input
  let inputValue = searchBarByIngredients.value.toLowerCase();
  stringNormalize(inputValue)

  // filtre sur les ingrédients
  let ingredientsList = [];
  array.filter((recipe) =>
    recipe.ingredients.map((list) => ingredientsList.push(list.ingredient))
  );

  let arrayIngredients = Array.from(new Set(ingredientsList));
  arrayIngredients.sort();

  const totalIngredients = arrayIngredients.filter((element) =>
    element
      .normalize("NFD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "")
      .includes(inputValue)
  );
  return totalIngredients;
};
