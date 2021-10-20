import { blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";
import { RecipesNoFind, tagNoFind } from "../function_messageError.js";
import { removeThisTag } from "./function_remove-this-ingredient-Tag.js";
import { showRecipesFilteredAgain } from "./function_show-recipes-filtered-by-ingredients-tags.js";
import { addIngredientsListOfRecipes } from "../ingredients_searchBar/function_add-recipes-ingredients.js";
import { searchRecipesWithThisIngredient } from "../appliances_searchBar/function_search-after-ingredient-selected.js";

export const showAllRecipesFiltered = () => {
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau de recupération de la liste des tags selectionnés
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });

  // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné
  let arrayFilteredTag = [];
  retrieveTags.forEach((tag) => {
    const resultFilterByDescription = recipes.filter((recipe) =>
      recipe.description.includes(tag)
    );

    const resultFilterByName = recipes.filter((recipe) =>
      recipe.name.includes(tag)
    );
    const resultFilterByIngredients = recipes.filter((recipe) =>
      recipe.ingredients.map((list) => list.ingredient).includes(tag)
    );

    arrayFilteredTag = resultFilterByDescription.concat(
      resultFilterByName,
      resultFilterByIngredients
    );
    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
  

    if (tag.length === 1) {
      blockSubMenuIngredients.innerHTML = "";
      addIngredientsListOfRecipes(newArrayIFilteredTag);
      
      return buildArticle(newArrayIFilteredTag);
    } else if (tag.length > 1) {
      blockSubMenuIngredients.innerHTML = "";
      addIngredientsListOfRecipes(newArrayIFilteredTag);
      return showRecipesFilteredAgain();
    } else {
      blockSubMenuIngredients.innerHTML = "";
      addIngredientsListOfRecipes(recipes);
      return buildArticle(recipes);
    }

    
  });
  
};
