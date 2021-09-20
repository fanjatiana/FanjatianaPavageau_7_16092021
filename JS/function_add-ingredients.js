import { recipes } from "./data_recipes.js";
import { ingredientsList } from "./let-and-const.js";

const arrayIngredient = ingredientsList.map((element) => element.ingredient);
const arrayquantity = ingredientsList.map((element) => element.quantity);
const arrayUnit = ingredientsList.map((element) => element.unit);

console.log(arrayIngredient);
console.log(arrayquantity);
console.log(arrayUnit);

export const addIngredients = () => {
  arrayIngredient.forEach((ingredient) => {
    recipes.forEach((element) => {
      if (element.description.includes(ingredient)) {
        console.log(ingredient);
      }
    });
  });
};
