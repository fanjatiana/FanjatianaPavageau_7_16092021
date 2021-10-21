import {
  searchBar,
  searchBarByAppliances,
  searchBarByIngredients,
  searchBarByTools,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { searchIn } from "./main_searchBar/function_search-in.js";
import { searchInIngredientsRecipes } from "./main_searchBar/function_search-ingredients-in-recipes.js";
import { searchIngredientsTags } from "./ingredients_searchBar/function_searchIngredientsTags.js";
import {
  displayBlockSearchByAppliances,
  displayBlockSearchByIngredients,
  displayBlockSearchByTools,
  displayNoneSearchByAppliances,
  displayNoneSearchByIngredients,
  displayNoneSearchByTools,
} from "./function_displayBlockSearchBy.js";
import { searchInAppliancesRecipes } from "./main_searchBar/function_search-appliances-in-recipes.js";

import { searchAppliancesTags } from "./appliances_searchBar/function_searchAppliancesTags.js";
import { searchToolsTags } from "./tools_searchBar/function_searchToolsTags.js";
import { searchInToolsRecipes } from "./main_searchBar/function-search-tools-in-recipes.js";

//creation des articles dans le DOM
buildArticle(recipes);

// barre de recherche : fonction filtre par mot clé
searchBar.addEventListener("input", searchIn);

// barre de recherche par ingrédients : affichage de la liste des ingrédients au click de la souris
searchBarByIngredients.addEventListener("click", (event) => {
  event.preventDefault();
  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
  searchIngredientsTags(event);
});

// barre de recherche par ingrédients : affichage de la liste des ingrédients au clavier
searchBarByIngredients.addEventListener("input", (event) => {
  event.preventDefault();
  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
  searchIngredientsTags();
});

searchBarByAppliances.addEventListener("click", (event) => {
  event.preventDefault();
  displayBlockSearchByAppliances();
  displayNoneSearchByTools();
  displayNoneSearchByIngredients();
  searchAppliancesTags(event);
});

searchBarByAppliances.addEventListener("input", (event) => {
  event.preventDefault();
  displayBlockSearchByAppliances();
  displayNoneSearchByTools();
  displayNoneSearchByIngredients();
  searchAppliancesTags(event);
});

searchBarByTools.addEventListener("click", (event) => {
  event.preventDefault();
  displayBlockSearchByTools();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
  searchToolsTags(event);
});

searchBarByTools.addEventListener("input", (event) => {
  event.preventDefault();
  displayBlockSearchByTools();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
  searchToolsTags(event);
});

// barre de recherche :  fonction filtre par mot clé et affichage des ingrédients des recettes dans le bloc : ingrédients
searchBar.addEventListener("input", (event) => {
  event.preventDefault();
  searchInIngredientsRecipes();
  searchInAppliancesRecipes();
  searchInToolsRecipes();
});

searchBar.addEventListener("click", (event) => {
  event.preventDefault();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools();
});
