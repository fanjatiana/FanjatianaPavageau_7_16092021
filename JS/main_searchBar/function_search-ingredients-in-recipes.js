import { blockSubMenuIngredients, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { addIngredientsList } from "../ingredients_searchBar/function_add-ingredients-list.js";
import { buildArticle } from "../function_buildArticles.js";
import { tagNoFind } from "../function_messageError.js";



export const searchInIngredientsRecipes = (array) => {
  // valeur de l'input
  let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();


  // filtre sur les ingrédients
  const resultFilterByIngredients = array.filter((recipe) =>
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
  const resultFilterByDescription = array.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  const total = resultFilterByIngredients.concat(resultFilterByDescription);

  const totalResult= Array.from(new Set(total));
return totalResult;
  /*if (!totalResult.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
   blockSubMenuIngredients.innerHTML = "";
    addIngredientsListOfRecipes(recipes);
   
    buildArticle(recipes);
  } else {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsListOfRecipes(totalResult);
    buildArticle(totalResult);
  }*/
};
