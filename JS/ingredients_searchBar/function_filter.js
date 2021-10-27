import { blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { selectThisTag } from "./function _select-this-ingredient-tag.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
import { removeThisTag } from "./function_remove-this-ingredient-Tag.js";
import { showAllRecipesByTag } from "./function_show-all-recipes-includes-ingredientsTags.js";
import { showRecipesFiltered } from "./function_show-recipes-filtered-by-ingredients-tags.js";



export const filterByIngredientsTags = () => {
    let ingredientsTagsListDisplayed = document.querySelectorAll(
        ".sub_menu__ingredients > .tags__list li"
      );
      ingredientsTagsListDisplayed.forEach((tags) => {
        tags.addEventListener("click", (e) => {
          selectThisTag(e);
        //showAllRecipesByTag(); // retourne un array de recettes
          const allTags = getAllTagsSelected();
          const dataFiltered = getRecipesList();
          showRecipesFiltered(allTags, dataFiltered);
          const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
          const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
         blockSubMenuIngredients.innerHTML = "";
          addTagsList(blockSubMenuIngredients, allNewIngredients);
          removeThisTag(allTags, recipes);
        })
      });
}