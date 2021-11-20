import { filterByAppliancesTags } from './appliances_searchBar/function_filter-appliance.js';
import { searchInAppliancesTags } from './appliances_searchBar/function_search-in-appliances-tags.js';
import { allAppliances, allIngredients, allTools } from './array.js';
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,
  searchBarByIngredients,
  searchBarByTools,
  searchBar,
  chevronBlockIngredient,
  chevronBlockTool,
  chevronBlockAppliance,
} from './const.js';
import { recipes } from './data_recipes.js';
import { searchInV2 } from './deuxieme_algorithme/function_searchIn_v2.js';
// import { searchInV2 } from './deuxieme_algorithme/function_searchIn_v2.js';
import { addTagsList } from './function_addTagsList.js';
import { buildArticle } from './function_buildArticles.js';
import {
  displayBlockSearchByAppliances,
  displayBlockSearchByIngredients,
  displayBlockSearchByTools,
  displayNoneSearchByAppliances,
  displayNoneSearchByIngredients,
  displayNoneSearchByTools,
} from './function_displayBlockSearchBy.js';
import {
  applianceNoFind,
  RecipesNoFind,
  tagNoFind,
  toolNoFind,
} from './function_messageError.js';
import { wordNormalize } from './function_normalize.js';

import { filterByIngredientsTags } from './ingredients_searchBar/function_filter.js';
import { searchInIngredientsTags } from './ingredients_searchBar/function_search-in-ingredients-tags.js';
import { searchIn } from './main_searchBar/function_search-in.js';
import { filterByToolsTags } from './tools_searchBar/function_filter-tools.js';
import { searchInToolsTags } from './tools_searchBar/function_search-in-tools-tags.js';

// AU CHARGEMENT DE LA PAGE:

// ajout des articles
buildArticle(recipes);

// ouverture/fermeture des blocs
// évènement clavier : fermeture des blocs de recherche au clavier
const onKeyUp = (e) => {
  if (e.key === 'Escape') {
    displayNoneSearchByTools();
    displayNoneSearchByIngredients();
    displayNoneSearchByAppliances();
  }
};
document.addEventListener('keydown', onKeyUp);

// bloc de recherche par ingrédients :
// évènement au clic du bloc ingredients : affichage du bloc sous menu ingredient
searchBarByIngredients.addEventListener('click', () => {
  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
});
// ouverture du bloc sous menu ingrédient au clic du chevron (et rotation de celui-ci)
chevronBlockIngredient.addEventListener('click', () => {
  if (chevronBlockIngredient.classList.contains('rotate')) {
    displayNoneSearchByIngredients();
  } else {
    displayBlockSearchByIngredients();
    displayNoneSearchByTools();
    displayNoneSearchByAppliances();
  }
});
// évènement clavier du bloc ingredients
searchBarByIngredients.addEventListener('keydown', () => {
  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
});

// bloc de recherche par appareils :
// évènement au clic du bloc appareil
searchBarByAppliances.addEventListener('click', () => {
  displayBlockSearchByAppliances();
  displayNoneSearchByIngredients();
  displayNoneSearchByTools();
});
// ouverture du bloc sous menu appareil au clic du chevron (et rotation de celui-ci)
chevronBlockAppliance.addEventListener('click', () => {
  if (chevronBlockAppliance.classList.contains('rotate')) {
    displayNoneSearchByAppliances();
  } else {
    displayBlockSearchByAppliances();
    displayNoneSearchByIngredients();
    displayNoneSearchByTools();
  }
});
// évènement au clavier du bloc appareil
searchBarByAppliances.addEventListener('keydown', () => {
  displayBlockSearchByAppliances();
  displayNoneSearchByIngredients();
  displayNoneSearchByTools();
});

// bloc de recherche par ustensiles :
// évènement au clic du bloc ustensiles
searchBarByTools.addEventListener('click', () => {
  displayBlockSearchByTools();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
});
// ouverture du bloc sous menu ustensile au clic du chevron (et rotation de celui-ci)
chevronBlockTool.addEventListener('click', () => {
  if (chevronBlockTool.classList.contains('rotate')) {
    displayNoneSearchByTools();
  } else {
    displayBlockSearchByTools();
    displayNoneSearchByIngredients();
    displayNoneSearchByAppliances();
  }
});
// évènement au clavier du bloc ustensiles
searchBarByTools.addEventListener('keydown', () => {
  displayBlockSearchByTools();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
});

// ajout des tags dans les blocs
// ajout de la liste des appareils
const appliancesList = allAppliances(recipes);
addTagsList(blockSubMenuAppliances, appliancesList);
searchInAppliancesTags();
filterByAppliancesTags();

// ajout de la liste des ingredients
const ingredientsList = allIngredients(recipes);
addTagsList(blockSubMenuIngredients, ingredientsList);
searchInIngredientsTags();
filterByIngredientsTags();

// ajout de la liste des ustensiles
const toolsList = allTools(recipes);
addTagsList(blockSubMenuTools, toolsList);
searchInToolsTags();
filterByToolsTags();

// BARRE DE RECHERCHE PRINCIPALE

// algo de recherche
// eslint-disable-next-line consistent-return
searchBar.addEventListener('focus', () => {
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
});
searchBar.addEventListener('keyup', () => {
  const divYourTags = document.getElementById('yoursTags');

  // searchInV2();
  // on récupère la valeur de l'input
  const inputValue = wordNormalize(searchBar.value);
  /* on supprimer les valeurs affichées dans les inputs des blocs de recherche si il y a
  et on vide la div des tags sélèctionnés */
  divYourTags.innerHTML = '';
  searchBarByIngredients.value = '';
  searchBarByTools.value = '';
  searchBarByAppliances.value = '';

  if (inputValue.length > 2) {
    // recherche dans le titre, description, ingrédient
    // const arrayMainSearch = searchInV2();
    const arrayMainSearch = searchInV2();
    if (!arrayMainSearch.length) {
      toolNoFind();
      tagNoFind();
      applianceNoFind();
      return RecipesNoFind();
    }
    buildArticle(arrayMainSearch);
    // affichage de la liste des ingrédients en fonction de la liste des recettes arrayMainSearch
    const allNewIngredients = allIngredients(arrayMainSearch);
    blockSubMenuIngredients.innerHTML = '';
    addTagsList(blockSubMenuIngredients, allNewIngredients);
    searchInIngredientsTags();
    filterByIngredientsTags();
    if (!allNewIngredients.length) {
      tagNoFind();
    }

    // affichage de la liste des appareils en fonction de la liste des recettes arrayMainSearch
    const allNewAppliances = allAppliances(arrayMainSearch);
    blockSubMenuAppliances.innerHTML = '';
    addTagsList(blockSubMenuAppliances, allNewAppliances);
    searchInAppliancesTags();
    filterByAppliancesTags();
    if (!allNewAppliances.length) {
      applianceNoFind();
    }

    // affichage de la liste des ustensiles en fonction de la liste des recettes arrayMainSearch
    const allNewTools = allTools(arrayMainSearch);
    blockSubMenuTools.innerHTML = '';
    addTagsList(blockSubMenuTools, allNewTools);
    searchInToolsTags();
    filterByToolsTags();
    if (!allNewTools.length) {
      toolNoFind();
    }
  } else {
    buildArticle(recipes);
    // affichage de la liste des ingrédients en fonction de la liste des recettes recipes
    const allNewIngredients = allIngredients(recipes);
    blockSubMenuIngredients.innerHTML = '';
    addTagsList(blockSubMenuIngredients, allNewIngredients);
    searchInIngredientsTags();
    filterByIngredientsTags();
    if (!allNewIngredients.length) {
      tagNoFind();
    }

    // affichage de la liste des appareils en fonction de la liste des recettes recipes
    const allNewAppliances = allAppliances(recipes);
    blockSubMenuAppliances.innerHTML = '';
    addTagsList(blockSubMenuAppliances, allNewAppliances);
    searchInAppliancesTags();
    filterByAppliancesTags();
    if (!allNewAppliances.length) {
      applianceNoFind();
    }

    // affichage de la liste des ustensiles en fonction de la liste des recettes recipes
    const allNewTools = allTools(recipes);
    blockSubMenuTools.innerHTML = '';
    addTagsList(blockSubMenuTools, allNewTools);
    searchInToolsTags();
    filterByToolsTags();
    if (!allNewTools.length) {
      toolNoFind();
    }
  }
});
