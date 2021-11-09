import { searchBarByIngredients } from "../const.js";
import { capitalizeFirstLetter } from "../function_capitalizer-first-letter.js";
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

  let newArrayIngredients = []

  ingredientsList.forEach((word)=>{
     let newWord = capitalizeFirstLetter(word);
     newArrayIngredients.push(newWord)
   })
  
   newArrayIngredients = Array.from(new Set(newArrayIngredients));



  
   newArrayIngredients.sort();

  const totalIngredients = newArrayIngredients.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(inputValue));
    

      console.log(totalIngredients)
  return totalIngredients;
};
