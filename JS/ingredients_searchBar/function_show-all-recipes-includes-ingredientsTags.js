import { blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";


export const showAllRecipesByTag = (retrieveTags) => {
 retrieveTags = getAllTagsSelected();
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
    console.log(newArrayIFilteredTag)
 

    if (tag.length === 1) {
      blockSubMenuIngredients.innerHTML = "";
      addIngredientsList(newArrayIFilteredTag);
      return buildArticle(newArrayIFilteredTag);
    } else if (tag.length > 1) {
      blockSubMenuIngredients.innerHTML = "";
      addIngredientsList(newArrayIFilteredTag);
    } else {
      blockSubMenuIngredients.innerHTML = "";
      addIngredientsList(recipes);
      return buildArticle(recipes);
    }

    
  });
  
};
