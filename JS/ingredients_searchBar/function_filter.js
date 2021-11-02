import { addAppliancesList } from "../appliances_searchBar/function_add-appliances-list.js";
import { newFilterByAppliancesTags } from "../appliances_searchBar/function_filter-appliances2.js";
import { removeThisApplianceTag } from "../appliances_searchBar/function_remove-this-appliance-tag.js";
import { showRecipesFilteredByApplianceTag } from "../appliances_searchBar/function_show-recipes-filtered-by-appliances-tags.js";
import { blockSubMenuAppliances, blockSubMenuIngredients, blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { addToolsList } from "../tools_searchBar/function_add-tools-list.js";
import { newFilterByToolsTags } from "../tools_searchBar/function_filter-tools2.js";
import { removeThisToolsTag } from "../tools_searchBar/function_remove-this-tool-tag.js";
import { selectThisTag } from "./function _select-this-ingredient-tag.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
import { newFilterByIngredientsTags } from "./function_filter2.js";
import { removeThisTag } from "./function_remove-this-ingredient-Tag.js";
import { showRecipesFiltered } from "./function_show-recipes-filtered-by-ingredients-tags.js";


export const filterByIngredientsTags = () => {
  let ingredientsTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__ingredients > .tags__list li"
  );
  let appliancesTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__appliances > .tags__list li"
  );
  let toolsTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__tools > .tags__list li"
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
      const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = "";
        addTagsList(blockSubMenuTools, allNewTools);
      removeThisTag(allTags);
      removeThisApplianceTag(allTags);
      removeThisToolsTag(allTags);
      newFilterByIngredientsTags(
        ingredientsTagsListDisplayed,
        allTags,
        dataFiltered,
        newArray,
        allNewIngredients,
        blockSubMenuIngredients
      );
      newFilterByAppliancesTags(
        appliancesTagsListDisplayed,
        allTags,
        dataFiltered,
        newArray,
        allNewAppliances,
        blockSubMenuAppliances
      );
      newFilterByToolsTags(
        toolsTagsListDisplayed,
        allTags,
        dataFiltered,
        newArray,
        allNewTools,
        blockSubMenuTools
      )
    });
  });
};
