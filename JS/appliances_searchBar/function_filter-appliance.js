import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,
} from "../const.js";
import { selectThisTag } from "../function _select-this-tag.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { applianceNoFind, tagNoFind, toolNoFind } from "../function_messageError.js";
import { removeThisTag } from "../function_remove-this--Tag.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { showRecipesFiltered } from "../function_show-recipes-filtered-by-tags.js";
import { addIngredientsList } from "../ingredients_searchBar/function_add-ingredients-list.js";
import { filterByIngredientsTags } from "../ingredients_searchBar/function_filter.js";
import { addToolsList } from "../tools_searchBar/function_add-tools-list.js";
import { filterByToolsTags } from "../tools_searchBar/function_filter-tools.js";
import { addAppliancesList } from "./function_add-appliances-list.js";
import { searchInAppliancesTags } from "./function_search-in-appliances-tags.js";

export const filterByAppliancesTags = () => {
  let appliancesTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__appliances > .tags__list li"
  );

  appliancesTagsListDisplayed.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const dataFiltered = returnNewRecipesList();

      // ajout du tag sélectionné dans le dom
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant
      let tags = [];
      tags.push(thisTag);

      tags = Array.from(new Set(tags));

      selectThisTag(tags);
console.log(tags)
      // tableau des tags selectionnés
      const allTags = getAllTagsSelected();
      searchBarByAppliances.value = "";
      showRecipesFiltered(allTags, dataFiltered);

      // nouveau tableau de recettes
      const newArrayRecipes = returnNewRecipesList(); // = MainSearch

      const allNewIngredients = addIngredientsList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewAppliances = addAppliancesList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewTools = addToolsList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées

      // mise à jour des tags dans les blocs
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuTools.innerHTML = "";
      addTagsList(blockSubMenuTools, allNewTools);

      if(!newArrayRecipes.length){
        tagNoFind();
        toolNoFind();
        applianceNoFind()
      }
      

      filterByAppliancesTags();
      filterByToolsTags();
      filterByIngredientsTags();

      let arrayTagsSelected = getAllTagsSelected();
      //fonction de suppression des tags
      removeThisTag(arrayTagsSelected, newArrayRecipes);
    });
  });
};
