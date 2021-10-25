import { searchBarByIngredients } from "../const.js";

export const searchIngredientsTags = (array) => {
  // valeur de l'input
  let valueInput = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

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
      .includes(valueInput)
  );
  return totalIngredients;
};
