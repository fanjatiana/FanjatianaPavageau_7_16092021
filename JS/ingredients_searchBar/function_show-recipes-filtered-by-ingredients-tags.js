import { blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { RecipesNoFind } from "../function_messageError.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";

export const showRecipesFiltered = (retrieveTags,dataFiltered) => {


  let arrayFilteredTag = [];
  retrieveTags.forEach((tag) => {
    const resultFilterByDescription = dataFiltered.filter((recipe) =>
      recipe.description.includes(tag)
    );

    const resultFilterByName = dataFiltered.filter((recipe) =>
      recipe.name.includes(tag)
    );
    const resultFilterByIngredients = dataFiltered.filter((recipe) =>
      recipe.ingredients.map((list) => list.ingredient).includes(tag)
    );

    arrayFilteredTag = resultFilterByDescription.concat(
      resultFilterByName,
      resultFilterByIngredients
    );

    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
  
    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }else{
      buildArticle(newArrayIFilteredTag);
      //addIngredientsList(newArrayIFilteredTag)
    }
  });
};
