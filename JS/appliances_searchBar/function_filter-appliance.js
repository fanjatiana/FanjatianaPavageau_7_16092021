import { allAppliances, allIngredients, allTools } from '../array.js';
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,
} from '../const.js';
import { selectThisTag } from '../function _select-this-tag.js';
import { getAllTagsSelected } from '../functions_get-all-tags-selected.js';
import { addTagsList } from '../function_addTagsList.js';
import { applianceNoFind, tagNoFind, toolNoFind } from '../function_messageError.js';
import { removeThisTag } from '../function_remove-this--Tag.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { showRecipesFiltered } from '../function_show-recipes-filtered-by-tags.js';
import { filterByIngredientsTags } from '../ingredients_searchBar/function_filter.js';
import { filterByToolsTags } from '../tools_searchBar/function_filter-tools.js';

export const filterByAppliancesTags = () => {
  const appliancesTagsListDisplayed = document.querySelectorAll(
    '.sub_menu__appliances > .tags__list li',
  );

  appliancesTagsListDisplayed.forEach((tags) => {
    tags.addEventListener('click', (e) => {
      const dataFiltered = returnNewRecipesList();

      // ajout du tag sélectionné dans le dom
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant
      let tagList = [];
      let allTagsSelected = getAllTagsSelected();
      allTagsSelected = Array.from(new Set(allTagsSelected));

      if (!allTagsSelected.includes(thisTag)) {
        tagList.push(thisTag);
      }

      tagList = Array.from(new Set(tagList));

      selectThisTag(tagList);

      // tableau des tags selectionnés
      const allTags = getAllTagsSelected();
      searchBarByAppliances.value = '';
      showRecipesFiltered(allTags, dataFiltered);

      // nouveau tableau de recettes
      const newArrayRecipes = returnNewRecipesList(); // = MainSearch

      const allNewIngredients = allIngredients(newArrayRecipes);
      const allNewAppliances = allAppliances(newArrayRecipes);
      const allNewTools = allTools(newArrayRecipes);

      // mise à jour des tags dans les blocs
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);

      if (!newArrayRecipes.length) {
        tagNoFind();
        toolNoFind();
        applianceNoFind();
      }

      filterByAppliancesTags();
      filterByToolsTags();
      filterByIngredientsTags();

      const arrayTagsSelected = getAllTagsSelected();
      // fonction de suppression des tags
      removeThisTag(arrayTagsSelected, newArrayRecipes);
    });
  });
};
