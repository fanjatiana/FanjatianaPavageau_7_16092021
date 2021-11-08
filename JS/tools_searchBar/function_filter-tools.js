import { addAppliancesList } from "../appliances_searchBar/function_add-appliances-list.js";
import { filterByAppliancesTags } from "../appliances_searchBar/function_filter-appliance.js";
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
} from "../const.js";
import { recipes } from "../data_recipes.js";
import { selectThisTag } from "../function _select-this-tag.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { removeThisTag } from "../function_remove-this--Tag.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { showRecipesFiltered } from "../function_show-recipes-filtered-by-tags.js";
import { addIngredientsList } from "../ingredients_searchBar/function_add-ingredients-list.js";
import { filterByIngredientsTags } from "../ingredients_searchBar/function_filter.js";
import { addToolsList } from "./function_add-tools-list.js";

export const filterByToolsTags = () => {
  let toolsTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__tools > .tags__list li"
  );

  toolsTagsListDisplayed.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      // tableau des recettes (recipes ou mainsearch)
      const dataFiltered = getRecipesList();

      // ajout du tag sélectionné dans le dom
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant
      let tags = [];
      tags.push(thisTag);

      tags = Array.from(new Set(tags));

      selectThisTag(tags);

      // tableau des tags selectionnés
      const allTags = getAllTagsSelected();

      // fonction d'affichage de la liste des recettes en liens avec le tag selectionné
      showRecipesFiltered(allTags, dataFiltered);

      // nouveau tableau de recettes
      const newArrayRecipes = returnNewRecipesList(); // = MainSearch

      const allNewIngredients = addIngredientsList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewTools = addToolsList(newArrayRecipes);
      const allNewAppliances = addAppliancesList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées

      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = "";
      addTagsList(blockSubMenuTools, allNewTools);

      filterByToolsTags();
      filterByAppliancesTags();
      filterByIngredientsTags();

      let arrayTagsSelected = getAllTagsSelected();

      removeThisTag(arrayTagsSelected, newArrayRecipes);
    });
  });
};
