import { blockSubMenuIngredients, searchBar } from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { addIngredientsListOfRecipes } from "./function_addIngredientsListOfRecipes.js";
import { displayBlockSearchBy } from "./function_displayBlockSearchBy.js";
import { buildArticle } from "./function_buildArticles.js";
import { tagNoFind } from "../function_messageError-tags.js";
import { selectTAgs } from "./function_selectTags.js";
export const searchInIngredientsRecipes = (event) => {
  event.preventDefault();
  searchBar.addEventListener("keydown", displayBlockSearchBy);

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

  const newArrayIngredients = Array.from(new Set(array));

  if (!newArrayIngredients.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsListOfRecipes(recipes);
    buildArticle(recipes);
  } else {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsListOfRecipes(newArrayIngredients);
    buildArticle(newArrayIngredients);
  }

  const allTagsIngredients = document.querySelectorAll(
    "#ingredients_tags > li"
  );
  allTagsIngredients.forEach((tags) => {
    document.getElementById("yoursTags").innerHTML = "";
    tags.addEventListener("click", selectTAgs);
  });
};
