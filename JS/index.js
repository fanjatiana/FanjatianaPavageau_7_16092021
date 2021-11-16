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
} from './const.js';
import { recipes } from './data_recipes.js';
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

const blockIngredient = document.getElementById('by_ingredients');
const blockAppliance = document.getElementById('kitchen-appliance');
const blockTool = document.getElementById('kitchen-tool');
// AU CHARGEMENT DE LA PAGE:

// ajout des articles
buildArticle(recipes);

// evenement au clic du bloc ingredients
searchBarByIngredients.addEventListener('click', () => {
  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
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
searchBar.addEventListener('input', () => {
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
  const divYourTags = document.getElementById('yoursTags');
  // recherche dans le titre, description, ingrédient
  const array = searchIn();
  // searchInV2();
  // valeur de l'input
  const inputValue = searchBar.value;
  wordNormalize(inputValue);
  if (!array.length) {
    toolNoFind();
    tagNoFind();
    applianceNoFind();
    return RecipesNoFind();
  } if (inputValue !== '') {
    divYourTags.innerHTML = '';
    searchBarByIngredients.value = '';
    searchBarByTools.value = '';
    searchBarByAppliances.value = '';
  } else if (inputValue.length > 2) {
    buildArticle(array);
  } else {
    buildArticle(recipes);
  }

  // affichage de la liste des ingrédients en fonction de la liste des recettes
  const allNewIngredients = allIngredients(array);
  blockSubMenuIngredients.innerHTML = '';
  addTagsList(blockSubMenuIngredients, allNewIngredients);
  searchInIngredientsTags();
  filterByIngredientsTags();
  buildArticle(array);
  if (!allNewIngredients.length) {
    tagNoFind();
  }

  // affichage de la liste des appareils en fonction de la liste des recettes
  const allNewAppliances = allAppliances(array);
  blockSubMenuAppliances.innerHTML = '';
  addTagsList(blockSubMenuAppliances, allNewAppliances);
  searchInAppliancesTags();
  filterByAppliancesTags();
  if (!allNewAppliances.length) {
    applianceNoFind();
  }

  // affichage de la liste des ustensiles en fonction de la liste des recettes
  const allNewTools = allTools(array);
  blockSubMenuTools.innerHTML = '';
  addTagsList(blockSubMenuTools, allNewTools);
  searchInToolsTags();
  filterByToolsTags();
  if (!allNewTools.length) {
    toolNoFind();
  }
});
