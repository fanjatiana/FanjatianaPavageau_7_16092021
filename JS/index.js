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
import { hiddenClick } from './function_hiddenClick.js';
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

const blockIngredient = document.getElementById('by_ingredients');
const blockAppliance = document.getElementById('kitchen-appliance');
const blockTool = document.getElementById('kitchen-tool');
// AU CHARGEMENT DE LA PAGE:

// ajout des articles
buildArticle(recipes);

// évènement clavier : fermeture des blocs de recherche au clavier
const onKeyUp = (e) => {
  if (e.key === 'Escape') {
    displayNoneSearchByTools();
    displayNoneSearchByIngredients();
    displayNoneSearchByAppliances();
  }
};
document.addEventListener('keydown', onKeyUp);

// evenement au clic du bloc ingredients
searchBarByIngredients.addEventListener('click', () => {
  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
});
// hiddenClick(blockSubMenuIngredients, chevronBlockIngredient);

chevronBlockIngredient.addEventListener('click', () => {
  if (chevronBlockIngredient.classList.contains('rotate')) {
    displayNoneSearchByIngredients();
  } else {
    displayBlockSearchByIngredients();
    displayNoneSearchByTools();
    displayNoneSearchByAppliances();
  }
});

// evenement au clavier du bloc ingredients
searchBarByIngredients.addEventListener('keydown', () => {
  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
});

// ajout de la liste des ingredients
const ingredientsList = allIngredients(recipes);
addTagsList(blockSubMenuIngredients, ingredientsList);
searchInIngredientsTags();
filterByIngredientsTags();

// evenement au clic du bloc appareil
searchBarByAppliances.addEventListener('click', () => {
  displayBlockSearchByAppliances();
  displayNoneSearchByIngredients();
  displayNoneSearchByTools();
});
chevronBlockAppliance.addEventListener('click', () => {
  if (chevronBlockAppliance.classList.contains('rotate')) {
    displayNoneSearchByAppliances();
  } else {
    displayBlockSearchByAppliances();
    displayNoneSearchByIngredients();
    displayNoneSearchByTools();
  }
});
// evenement au clavier du bloc appareil
searchBarByAppliances.addEventListener('keydown', () => {
  displayBlockSearchByAppliances();
  displayNoneSearchByIngredients();
  displayNoneSearchByTools();
});

// ajout de la liste des appareils
const appliancesList = allAppliances(recipes);
addTagsList(blockSubMenuAppliances, appliancesList);
searchInAppliancesTags();
filterByAppliancesTags();

// evenement au clic du bloc ustensiles
searchBarByTools.addEventListener('click', () => {
  displayBlockSearchByTools();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
});
chevronBlockTool.addEventListener('click', () => {
  if (chevronBlockTool.classList.contains('rotate')) {
    displayNoneSearchByTools();
  } else {
    displayBlockSearchByTools();
    displayNoneSearchByIngredients();
    displayNoneSearchByAppliances();
  }
});

// evenement au clavier du bloc ustensiles
searchBarByTools.addEventListener('keydown', () => {
  displayBlockSearchByTools();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
});

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
  // valeur de l'input
  const inputValue = wordNormalize(searchBar.value);
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
    // affichage de la liste des ingrédients en fonction de la liste des recettes
    const allNewIngredients = allIngredients(arrayMainSearch);
    blockSubMenuIngredients.innerHTML = '';
    addTagsList(blockSubMenuIngredients, allNewIngredients);
    searchInIngredientsTags();
    filterByIngredientsTags();
    if (!allNewIngredients.length) {
      tagNoFind();
    }

    // affichage de la liste des appareils en fonction de la liste des recettes
    const allNewAppliances = allAppliances(arrayMainSearch);
    blockSubMenuAppliances.innerHTML = '';
    addTagsList(blockSubMenuAppliances, allNewAppliances);
    searchInAppliancesTags();
    filterByAppliancesTags();
    if (!allNewAppliances.length) {
      applianceNoFind();
    }

    // affichage de la liste des ustensiles en fonction de la liste des recettes
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
    // affichage de la liste des ingrédients en fonction de la liste des recettes
    const allNewIngredients = allIngredients(recipes);
    blockSubMenuIngredients.innerHTML = '';
    addTagsList(blockSubMenuIngredients, allNewIngredients);
    searchInIngredientsTags();
    filterByIngredientsTags();
    if (!allNewIngredients.length) {
      tagNoFind();
    }

    // affichage de la liste des appareils en fonction de la liste des recettes
    const allNewAppliances = allAppliances(recipes);
    blockSubMenuAppliances.innerHTML = '';
    addTagsList(blockSubMenuAppliances, allNewAppliances);
    searchInAppliancesTags();
    filterByAppliancesTags();
    if (!allNewAppliances.length) {
      applianceNoFind();
    }

    // affichage de la liste des ustensiles en fonction de la liste des recettes
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
