import { searchBarByIngredients } from "../const.js";
import { normalize } from "../function_normalize.js";

export const displayIngredientsList = (array) => {
  // valeur de l'input
  let inputValue = searchBarByIngredients.value;
    normalize(inputValue)

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
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(inputValue)
  );
  return totalIngredients;
};
