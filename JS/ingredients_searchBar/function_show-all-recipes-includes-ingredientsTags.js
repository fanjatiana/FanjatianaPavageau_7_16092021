import { blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { buildArticle } from "../function_buildArticles.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
import { filterByIngredientsTags } from "./function_filter.js";
 const showAllRecipesByTag = () => {
 const retrieveTags = getAllTagsSelected();
  // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné

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

    let arrayFilteredTag = resultFilterByDescription.concat(
      resultFilterByName,
      resultFilterByIngredients
    );
    arrayFilteredTag = Array.from(new Set(arrayFilteredTag));

    if (tag.length === 1) {
      //blockSubMenuIngredients.innerHTML = "";
      buildArticle(arrayFilteredTag);
      //filterByIngredientsTags()
    } else {
      buildArticle(recipes);
    }
  });
};
