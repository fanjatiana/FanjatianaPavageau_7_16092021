import { blockSubMenuAppliances, blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { selectThisTag } from "../ingredients_searchBar/function _select-this-ingredient-tag.js";
import { addIngredientsList } from "../ingredients_searchBar/function_add-ingredients-list.js";
import { newFilterByIngredientsTags } from "../ingredients_searchBar/function_filter2.js";
import { removeThisTag } from "../ingredients_searchBar/function_remove-this-ingredient-Tag.js";
import { addAppliancesList } from "./function_add-appliances-list.js";
import { newFilterByAppliancesTags } from "./function_filter-appliances2.js";
import { removeThisApplianceTag } from "./function_remove-this-appliance-tag.js";
import { showRecipesFilteredByApplianceTag } from "./function_show-recipes-filtered-by-appliances-tags.js";

export const filterByAppliancesTags = () => {
    let appliancesTagsListDisplayed = document.querySelectorAll(
        ".sub_menu__appliances > .tags__list li"
      );
      let ingredientsTagsListDisplayed = document.querySelectorAll(
        ".sub_menu__ingredients > .tags__list li"
      );
      appliancesTagsListDisplayed.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      selectThisTag(e);
      const allTags = getAllTagsSelected();
      const dataFiltered = getRecipesList();
      showRecipesFilteredByApplianceTag(allTags, dataFiltered);
     const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
     const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées 
     const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      removeThisTag(allTags, recipes);
      removeThisApplianceTag(allTags, recipes);
      newFilterByAppliancesTags(appliancesTagsListDisplayed, allTags, dataFiltered,newArray,allNewAppliances,blockSubMenuAppliances)
      newFilterByIngredientsTags(ingredientsTagsListDisplayed, allTags, dataFiltered,newArray,allNewIngredients,blockSubMenuIngredients);
    });
  });
};
