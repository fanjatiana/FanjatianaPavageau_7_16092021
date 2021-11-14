/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBar,
} from './const.js';
import { recipes } from './data_recipes.js';
import { buildArticle } from './function_buildArticles.js';

import { addTagsList } from './function_addTagsList.js';
import { searchIn } from './main_searchBar/function_search-in.js';

import { filterByAppliancesTags } from './appliances_searchBar/function_filter-appliance.js';

import { newArrayAfterdeleteThisTag } from './function_delete-this-tag.js';
import { filterByIngredientsTags } from './ingredients_searchBar/function_filter.js';
import { showRecipesFiltered } from './function_show-recipes-filtered-by-tags.js';
import { selectThisTag } from './function _select-this-tag.js';
import { filterByToolsTags } from './tools_searchBar/function_filter-tools.js';

import { wordNormalize } from './function_normalize.js';
import { allAppliances, allIngredients, allTools } from './array.js';

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = (allTagsSelected, listRecipes) => {
  const buttonsTags = document.querySelectorAll('.tag > img');
  const divYoursTags = document.getElementById('yoursTags');

  const valueInput = searchBar.value;

  // bouton close
  buttonsTags.forEach((button) => {
    button.addEventListener('click', () => {
      // on recupère la valeur de tag correspondant au bouton
      const thisTag = button.previousElementSibling.innerHTML;
      // on cré un nouvel array apres suppression du tag
      const tagList = newArrayAfterdeleteThisTag(
        allTagsSelected,
        thisTag,
        recipes,
      );

      // on vide la liste de tag dans le dom
      divYoursTags.innerHTML = '';

      // on affiche la nouvelle liste de tag
      selectThisTag(tagList);

      // filtre les recettes qui correspondent au nouvel array de tags
      listRecipes = [];
      tagList.forEach((tag) => {
        // eslint-disable-next-line max-len
        const resultFilterByDescription = recipes.filter((recipe) => recipe.description.includes(tag));

        const resultFilterByName = recipes.filter((recipe) => recipe.name.includes(tag));

        const resultFilterByIngredients = recipes.filter((recipe) => recipe.ingredients
          .map((list) => wordNormalize(list.ingredient)).includes(wordNormalize(tag)));

        const resultFilterByAppliances = recipes.filter((recipe) => wordNormalize(recipe.appliance).includes(wordNormalize(tag)));

        const resultFilterByTools = recipes.filter((recipe) => recipe.ustensils.map((list) => wordNormalize(list)).includes( wordNormalize(tag)));

        let arrayFilteredTag = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients,
          resultFilterByAppliances,
          resultFilterByTools,
        );

        arrayFilteredTag = Array.from(new Set(arrayFilteredTag));
        arrayFilteredTag.sort();
        listRecipes = arrayFilteredTag;
      });

      // on affiche la liste des recettes liée aux tags
      showRecipesFiltered(tagList, listRecipes);

      // fonction de suppression sur la nouvelle liste de tags
      removeThisTag(tagList, listRecipes);

      const allNewIngredients = allIngredients(listRecipes);
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);

      const allNewAppliances = allAppliances(listRecipes);
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);

      const allNewTools = allTools(listRecipes);
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);

      filterByIngredientsTags();
      filterByAppliancesTags();
      filterByToolsTags();

      if (tagList.length === 0 && valueInput !== '') {
        const mainsearch = searchIn();

        const allIngredientsWithMainSearch = allIngredients(mainsearch);
        blockSubMenuIngredients.innerHTML = '';
        addTagsList(blockSubMenuIngredients, allIngredientsWithMainSearch);

        const allNewAppliancesWithMainSearch = allAppliances(mainsearch);
        blockSubMenuAppliances.innerHTML = '';
        addTagsList(blockSubMenuAppliances, allNewAppliancesWithMainSearch);

        const allNewToolsWithMainSearch = allTools(mainsearch);
        blockSubMenuTools.innerHTML = '';
        addTagsList(blockSubMenuTools, allNewToolsWithMainSearch);

        buildArticle(mainsearch);
        filterByIngredientsTags();
        filterByAppliancesTags();
        filterByToolsTags();
      } else if (tagList.length === 0 && valueInput === '') {
        const allIngredientWithRecipes = allIngredients(recipes);
        blockSubMenuIngredients.innerHTML = '';
        addTagsList(blockSubMenuIngredients, allIngredientWithRecipes);

        const allNewAppliancesWithRecipes = allAppliances(recipes);
        blockSubMenuAppliances.innerHTML = '';
        addTagsList(blockSubMenuAppliances, allNewAppliancesWithRecipes);

        const allNewToolsWithRecipes = allTools(recipes);
        blockSubMenuTools.innerHTML = '';
        addTagsList(blockSubMenuTools, allNewToolsWithRecipes);

        buildArticle(recipes);
        filterByIngredientsTags();
        filterByAppliancesTags();
        filterByToolsTags();
      }
    });
  });
};
