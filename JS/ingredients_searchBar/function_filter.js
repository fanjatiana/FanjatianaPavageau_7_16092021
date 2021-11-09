import { addAppliancesList } from "../appliances_searchBar/function_add-appliances-list.js";
import { filterByAppliancesTags } from "../appliances_searchBar/function_filter-appliance.js";
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByIngredients,
} from "../const.js";
import { selectThisTag } from "../function _select-this-tag.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import {
  applianceNoFind,
  tagNoFind,
  toolNoFind,
} from "../function_messageError.js";

import { removeThisTag } from "../function_remove-this--Tag.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { showRecipesFiltered } from "../function_show-recipes-filtered-by-tags.js";
import { searchIn } from "../main_searchBar/function_search-in.js";
import { addToolsList } from "../tools_searchBar/function_add-tools-list.js";
import { filterByToolsTags } from "../tools_searchBar/function_filter-tools.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";

export const filterByIngredientsTags = () => {
  let ingredientsTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__ingredients > .tags__list li"
  );

  const divYourTags = document.getElementById("yoursTags");

  ingredientsTagsListDisplayed.forEach((tags) => {
    
    tags.addEventListener("click", (e) => {
      //divYourTags.innerHTML = ""
      // tableau des recettes (recipes ou mainsearch)
      const dataFiltered = returnNewRecipesList();

      // ajout du tag sélectionné dans le dom
      let thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

      let tags = [];
      tags.push(thisTag);

      selectThisTag(tags);

      searchBarByIngredients.value = "";
      // tableau des tags selectionnés
      let allTags = getAllTagsSelected();

      // fonction d'affichage de la liste des recettes en liens avec le tag selectionné
      showRecipesFiltered(allTags, dataFiltered);

      // nouveau tableau de recettes
      const newArrayRecipes = returnNewRecipesList(); // = MainSearch

      // affichage des tags en liens avec les recettes
      const allNewIngredients = addIngredientsList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewAppliances = addAppliancesList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewTools = addToolsList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées

      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = "";
      addTagsList(blockSubMenuTools, allNewTools);

      if (!newArrayRecipes.length) {
        tagNoFind();
        toolNoFind();
        applianceNoFind();
      }

      filterByIngredientsTags();
      filterByToolsTags();
      filterByAppliancesTags();

      let arrayTagsSelected = getAllTagsSelected();

      removeThisTag(arrayTagsSelected, newArrayRecipes);
    });
  });
};
