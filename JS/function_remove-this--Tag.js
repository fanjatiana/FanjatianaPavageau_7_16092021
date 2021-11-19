/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
} from './const.js';
import { recipes } from './data_recipes.js';
import { buildArticle } from './function_buildArticles.js';
import { addTagsList } from './function_addTagsList.js';
import { searchIn } from './main_searchBar/function_search-in.js';
import { filterByAppliancesTags } from './appliances_searchBar/function_filter-appliance.js';
import { newArrayAfterdeleteThisTag } from './function_delete-this-tag.js';
import { filterByIngredientsTags } from './ingredients_searchBar/function_filter.js';
import { showRecipesFiltered } from './function_show-recipes-filtered-by-tags.js';
import { addingTagsInTheDom } from './function _adding-tags-in-dom.js';
import { filterByToolsTags } from './tools_searchBar/function_filter-tools.js';
import { allAppliances, allIngredients, allTools } from './array.js';
import { displayNoneSearchByAppliances, displayNoneSearchByIngredients, displayNoneSearchByTools } from './function_displayBlockSearchBy.js';

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = (allTagsSelected) => {
  const buttonsTags = document.querySelectorAll('.tag > img');

  // liste de recettes depuis la valeur entrée de l'input
  const arrayMainSearch = searchIn();
  // liste re recettes depuis recipes
  let arrayFilterByTag = recipes;

  /* on verifie :
  si la valeur de l'input n'est pas vide  si "true" la variable arrayFilterByTag
  contient la liste des recettes filtrées depuis la barre de recherche principale,
  sinon arrayFilterByTag contient recipes */
  if (arrayMainSearch.length) {
    arrayFilterByTag = arrayMainSearch;
  } else {
    arrayFilterByTag = recipes;
  }

  // bouton close
  buttonsTags.forEach((button) => {
    button.addEventListener('click', () => {
      // on recupère la valeur de tag correspondant au bouton
      const thisTag = button.previousElementSibling.innerHTML;
      // on cré un nouvel array apres suppression du tag
      const tagList = newArrayAfterdeleteThisTag(allTagsSelected, thisTag);
      // on affiche dans le dom la nouvelle liste de tag
      addingTagsInTheDom(tagList);

      // on affiche la liste de recettes liée aux tags
      showRecipesFiltered(tagList, arrayFilterByTag);

      // mise à jour de la liste de tags de chaque bloc
      const arrayUpdate = showRecipesFiltered(tagList, arrayFilterByTag);
      const allNewIngredients = allIngredients(arrayUpdate);
      const allNewAppliances = allAppliances(arrayUpdate);
      const allNewTools = allTools(arrayUpdate);

      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);
      filterByIngredientsTags();
      filterByAppliancesTags();
      filterByToolsTags();
      removeThisTag(tagList);
      /* on vérifie : si tagList est vide,
        alors on retourne à la liste de recette du départ */
      if (!tagList.length) {
        buildArticle(arrayFilterByTag);
        filterByIngredientsTags();
        filterByAppliancesTags();
        filterByToolsTags();
        displayNoneSearchByAppliances();
        displayNoneSearchByIngredients();
        displayNoneSearchByTools();
      }
    });
  });
};
