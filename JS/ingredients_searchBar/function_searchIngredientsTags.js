import { blockSubMenuIngredients, searchBarByIngredients, blockSubMenuTools, blockSubMenuAppliances } from "../const.js";
import { recipes } from "../data_recipes.js";
import { displayBlockSearchByIngredients } from "../function_displayBlockSearchBy.js";
import { tagNoFind } from "../function_messageError.js";
import { searchInIngredientsRecipes } from "../main_searchBar/function_search-ingredients-in-recipes.js";
import { showAllRecipesFiltered } from "./function_show-all-recipes-includes-ingredientsTags.js";
import { addTagsList } from "../function_addTagsList.js";
import { selectThisIngredientTag } from "./function _select-this-ingredient-tag.js";
import { searchRecipesWithThisIngredient } from "../appliances_searchBar/function_search-after-ingredient-selected.js";

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
     blockSubMenuTools.innerHTML = "";
    blockSubMenuIngredients.innerHTML = "";
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(ulTag, source, newArray);
    const allLiTags = document.querySelectorAll("#tags__list > li");
    selectThisIngredientTag(allLiTags);
    searchInIngredientsRecipes();
    showAllRecipesFiltered();
  } else {
    blockSubMenuTools.innerHTML = "";
    blockSubMenuIngredients.innerHTML = "";
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(ulTag, source, totalIngredients);
    const allLiTags = document.querySelectorAll("#tags__list > li");
    selectThisIngredientTag(allLiTags);
  
  }
};
