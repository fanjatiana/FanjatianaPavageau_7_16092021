import { addAppliancesList } from "../appliances_searchBar/function_add-appliances-list.js";
import { filterByAppliancesTags } from "../appliances_searchBar/function_filter-appliance.js";
//import { newFilterByAppliancesTags } from "../appliances_searchBar/function_filter-appliances2.js";
import { removeThisApplianceTag } from "../appliances_searchBar/function_remove-this-appliance-tag.js";
import { blockSubMenuAppliances, blockSubMenuIngredients, blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { selectThisTag } from "../ingredients_searchBar/function _select-this-ingredient-tag.js";
import { addIngredientsList } from "../ingredients_searchBar/function_add-ingredients-list.js";
import { filterByIngredientsTags } from "../ingredients_searchBar/function_filter.js";
//import { newFilterByIngredientsTags } from "../ingredients_searchBar/function_filter2.js";
import { removeThisTag } from "../ingredients_searchBar/function_remove-this-ingredient-Tag.js";
import { addToolsList } from "./function_add-tools-list.js";
//import { newFilterByToolsTags } from "./function_filter-tools2.js";
import { removeThisToolsTag } from "./function_remove-this-tool-tag.js";
import {showRecipesFilteredByTools} from"./function_show-recipes-filtered-by-tools.js";


export const filterByToolsTags = () => {
    let ingredientsTagsListDisplayed = document.querySelectorAll(
      ".sub_menu__ingredients > .tags__list li"
    );
    let appliancesTagsListDisplayed = document.querySelectorAll(
      ".sub_menu__appliances > .tags__list li"
    );
    let toolsTagsListDisplayed = document.querySelectorAll(
        ".sub_menu__tools > .tags__list li"
      );

    toolsTagsListDisplayed.forEach((tags) => {
      tags.addEventListener("click", (e) => {
        selectThisTag(e);
        const allTags = getAllTagsSelected();
        const dataFiltered = getRecipesList();
       showRecipesFilteredByTools(allTags, dataFiltered);
        const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
        const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        const allNewTools = addToolsList(newArray)
        const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        blockSubMenuIngredients.innerHTML = "";
        addTagsList(blockSubMenuIngredients, allNewIngredients);
        blockSubMenuAppliances.innerHTML = "";
        addTagsList(blockSubMenuAppliances, allNewAppliances);
        blockSubMenuTools.innerHTML = "";
        addTagsList(blockSubMenuTools,allNewTools);
        removeThisTag(allTags);
        removeThisApplianceTag(allTags);
        removeThisToolsTag(allTags)

        filterByToolsTags();
        filterByAppliancesTags();
        filterByIngredientsTags();
        /*newFilterByIngredientsTags(
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
        )*/
      });
    });
  };
  