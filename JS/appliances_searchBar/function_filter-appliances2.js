import { blockSubMenuAppliances } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { selectThisTag } from "../ingredients_searchBar/function _select-this-ingredient-tag.js";
import { filterByIngredientsTags } from "../ingredients_searchBar/function_filter.js";
import { addAppliancesList } from "./function_add-appliances-list.js";
import { filterByAppliancesTags } from "./function_filter-appliance.js";
import { removeThisApplianceTag } from "./function_remove-this-appliance-tag.js";
import { showAllRecipesIncludesApplianceTag } from "./function_show-all-recipes-includes-appliances-tags.js";
import { showRecipesFilteredByApplianceTag } from "./function_show-recipes-filtered-by-appliances-tags.js";

export const newFilterByAppliancesTags = (
  appliancesTagsListDisplayed,
  allTags,
  dataFiltered,
  newArray,
  allNewAppliances,
  blockSubMenuAppliances
) => {
  appliancesTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__appliances > .tags__list li"
  );
  appliancesTagsListDisplayed.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      selectThisTag(e);
      allTags = getAllTagsSelected();
      dataFiltered = getRecipesList();
      showRecipesFilteredByApplianceTag(allTags, dataFiltered);
      newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
      allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      removeThisApplianceTag(allTags);
      filterByAppliancesTags();
    
    });
  });
};
