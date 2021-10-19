import { blockSubMenuIngredients, searchBarByIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { displayBlockSearchByIngredients } from "../function_displayBlockSearchBy.js";
import { tagNoFind } from "../function_messageError.js";
import { searchInIngredientsRecipes } from "../main_searchBar/function_search-in-ingredients-recipes.js";
import { showAllRecipesFiltered } from "../function_show-all-recipes-includes-ingredientsTags.js";
import { addTagsList } from "../function_addTagsList.js";


export const searchIngredientsTags = () => {

 


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
  newArray.sort();
  const totalIngredients = newArray.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );
  const source = document.querySelector(".sub_menu");

  const ulTag = `<ul id="tags__list"></ul>`;
  const allLiTags = document.querySelectorAll("#tags__list > li");

  if (!totalIngredients.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuIngredients.innerHTML = "";
    addTagsList(ulTag, source,newArray);

    searchInIngredientsRecipes();
    showAllRecipesFiltered();
  } else {
    blockSubMenuIngredients.innerHTML = "";
    addTagsList(ulTag, source, totalIngredients);
  }
};
