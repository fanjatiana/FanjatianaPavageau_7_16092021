import { blockSubMenuIngredients, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { addIngredientsListOfRecipes } from "../ingredients_searchBar/function_add-recipes-ingredients.js";
import { buildArticle } from "../function_buildArticles.js";
import { tagNoFind } from "../function_messageError.js";



export const searchInIngredientsRecipes = () => {
  // valeur de l'input
  let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();


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

  // filtre sur les descritptions
  const resultFilterByDescription = recipes.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  const array = resultFilterByIngredients.concat(resultFilterByDescription);

  const newArray = Array.from(new Set(array));

  if (!newArray.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
   blockSubMenuIngredients.innerHTML = "";
    addIngredientsListOfRecipes(recipes);
   
    buildArticle(recipes);
  } else {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsListOfRecipes(newArray);
    buildArticle(newArray);
  }
};
