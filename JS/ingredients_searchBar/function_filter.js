//import { addAppliancesList } from '../appliances_searchBar/function_add-appliances-list.js';
import { filterByAppliancesTags } from '../appliances_searchBar/function_filter-appliance.js';
import { allAppliances, allIngredients, allTools } from '../array.js';
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByIngredients,
} from '../const.js';
import { selectThisTag } from '../function _select-this-tag.js';
import { getAllTagsSelected } from '../functions_get-all-tags-selected.js';
import { addTagsList } from '../function_addTagsList.js';
import {
  applianceNoFind,
  tagNoFind,
  toolNoFind,
} from '../function_messageError.js';

import { removeThisTag } from '../function_remove-this--Tag.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { showRecipesFiltered } from '../function_show-recipes-filtered-by-tags.js';
import { filterByToolsTags } from '../tools_searchBar/function_filter-tools.js';

export const filterByIngredientsTags = () => {
  const ingredientsTagsListDisplayed = document.querySelectorAll(
    '.sub_menu__ingredients > .tags__list li',
  );

  ingredientsTagsListDisplayed.forEach((tags) => {
    tags.addEventListener('click', (e) => {
      // divYourTags.innerHTML = ""
      // tableau des recettes (recipes ou mainsearch)
      const dataFiltered = returnNewRecipesList();

      // ajout du tag sélectionné dans le dom
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant
      const tagList = [];
      let allTagsSelected = getAllTagsSelected();

      allTagsSelected = Array.from(new Set(allTagsSelected));

      if (!allTagsSelected.includes(thisTag)) {
        tagList.push(thisTag);
      }

      selectThisTag(tagList);

      searchBarByIngredients.value = '';
      // tableau des tags selectionnés
      const allTags = getAllTagsSelected();

      // fonction d'affichage de la liste des recettes en liens avec le tag selectionné
      showRecipesFiltered(allTags, dataFiltered);

      // nouveau tableau de recettes
      const newArrayRecipes = returnNewRecipesList(); // = MainSearch

      // affichage des tags en liens avec les recettes
      const allNewIngredients = allIngredients(newArrayRecipes);
      const allNewAppliances = allAppliances(newArrayRecipes);
      const allNewTools = allTools(newArrayRecipes);

      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);

      if (!newArrayRecipes.length) {
        tagNoFind();
        toolNoFind();
        applianceNoFind();
      }

      filterByIngredientsTags();
      filterByToolsTags();
      filterByAppliancesTags();

      const arrayTagsSelected = getAllTagsSelected();

      removeThisTag(arrayTagsSelected, newArrayRecipes);
    });
  });
};
