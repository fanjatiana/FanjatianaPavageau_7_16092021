import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { selectThisTag } from "../ingredients_searchBar/function _select-this-ingredient-tag.js";
import { addToolsList } from "./function_add-tools-list.js";
import { filterByToolsTags } from "./function_filter-tools.js";
import { removeThisToolsTag } from "./function_remove-this-tool-tag.js";
import { showRecipesFilteredByTools } from "./function_show-recipes-filtered-by-tools.js";

export const newFilterByToolsTags = (
    toolsTagsListDisplayed,
    allTags,
    dataFiltered,
    newArray,
    allNewTools,
    blockSubMenuTools
  ) => {
    toolsTagsListDisplayed = document.querySelectorAll(
        ".sub_menu__tools > .tags__list li"
      );

      toolsTagsListDisplayed.forEach((tags) => {
      tags.addEventListener("click", (e) => {
        selectThisTag(e);
        allTags = getAllTagsSelected();
        dataFiltered = getRecipesList();
       showRecipesFilteredByTools(allTags, dataFiltered);
        newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
        allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        blockSubMenuTools.innerHTML = "";
        addTagsList(blockSubMenuTools, allNewTools);
        removeThisToolsTag(allTags);
        filterByToolsTags();
      
      });
    });
  };
  