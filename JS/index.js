import { addAppliancesList } from "./appliances_searchBar/function_add-appliances-list.js";
import { filterByAppliancesTags } from "./appliances_searchBar/function_filter-appliance.js";
import { searchInAppliancesTags } from "./appliances_searchBar/function_search-in-appliances-tags.js";
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,
  searchBarByIngredients,
  searchBarByTools,
  searchBar,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { searchInV2 } from "./deuxieme_algorithme/function_searchIn_v2.js";
import { addTagsList } from "./function_addTagsList.js";
import { buildArticle } from "./function_buildArticles.js";
//import { getRecipesList } from "./function_display-recipes-filtered.js";
import {
  displayBlockSearchByAppliances,
  displayBlockSearchByIngredients,
  displayBlockSearchByTools,
  displayNoneSearchByAppliances,
  displayNoneSearchByIngredients,
  displayNoneSearchByTools,
} from "./function_displayBlockSearchBy.js";
import {
  applianceNoFind,
  RecipesNoFind,
  tagNoFind,
  toolNoFind,
} from "./function_messageError.js";
import { normalize } from "./function_normalize.js";
import { returnNewRecipesList } from "./function_return-new-recipes-list.js";
import { addIngredientsList } from "./ingredients_searchBar/function_add-ingredients-list.js";
import { filterByIngredientsTags } from "./ingredients_searchBar/function_filter.js";
import { searchInIngredientsTags } from "./ingredients_searchBar/function_search-in-ingredients-tags.js";
import { searchIn } from "./main_searchBar/function_search-in.js";
import { addToolsList } from "./tools_searchBar/function_add-tools-list.js";
import { filterByToolsTags } from "./tools_searchBar/function_filter-tools.js";
import { searchInToolsTags } from "./tools_searchBar/function_search-in-tools-tags.js";


// AU CHARGEMENT DE LA PAGE:

//ajout des articles
buildArticle(recipes);

//evenement au clic du bloc ingredients
searchBarByIngredients.addEventListener("focus", () => {
  displayBlockSearchByIngredients();
  displayNoneSearchByTools();
  displayNoneSearchByAppliances();
});
// ajout de la liste des ingredients
const allIngredients = addIngredientsList(recipes);
addTagsList(blockSubMenuIngredients, allIngredients);
searchInIngredientsTags();
filterByIngredientsTags();

//evenement au clic du bloc appareil
searchBarByAppliances.addEventListener("focus", () => {
  displayBlockSearchByAppliances();
  displayNoneSearchByTools();
  displayNoneSearchByIngredients();
});
// ajout de la liste des appareils
const allAppliances = addAppliancesList(recipes);
addTagsList(blockSubMenuAppliances, allAppliances);
searchInAppliancesTags();
filterByAppliancesTags();

//evenement au clic du bloc ustensiles
searchBarByTools.addEventListener("focus", () => {
  displayBlockSearchByTools();
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
});
// ajout de la liste des ustensiles
const allTools = addToolsList(recipes);
addTagsList(blockSubMenuTools, allTools);
searchInToolsTags();
filterByToolsTags();

// BARRE DE RECHERCHE PRINCIPALE

// fermeture des blocs lorsque le focus est porté sur la barre de recherche principale
searchBar.addEventListener("focus", () => {
  displayNoneSearchByAppliances();
  displayNoneSearchByIngredients();
  displayNoneSearchByTools();
});

// algo de recherche
searchBar.addEventListener("input", () => {
  const divYourTags = document.getElementById("yoursTags");
  // recherche dans le titre, description, ingrédient
  const array = searchIn();
  //searchInV2()
  // valeur de l'input
  let inputValue = searchBar.value;
  normalize(inputValue)
  if (!array.length) {
    
     toolNoFind();
     tagNoFind();
     applianceNoFind();
     return RecipesNoFind();
  }else if (inputValue !== ""){
    divYourTags.innerHTML="";
  }  
  else if (inputValue.length < 3) {
    buildArticle(recipes);
  }
  else {
    buildArticle(array);
 
  }

  //affichage de la liste des ingrédients en fonction de la liste des recettes
  const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
  const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  blockSubMenuIngredients.innerHTML = "";
  addTagsList(blockSubMenuIngredients, allNewIngredients);
  searchInIngredientsTags();
  filterByIngredientsTags();
  buildArticle(array);
  if (!allNewIngredients.length) {
    tagNoFind();
  }

  //affichage de la liste des appareils en fonction de la liste des recettes
  const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  blockSubMenuAppliances.innerHTML = "";
  addTagsList(blockSubMenuAppliances, allNewAppliances);
  searchInAppliancesTags();
  filterByAppliancesTags();
  if (!allNewAppliances.length) {
    applianceNoFind();
  }

  //affichage de la liste des ustensiles en fonction de la liste des recettes
  const allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  blockSubMenuTools.innerHTML = "";
  addTagsList(blockSubMenuTools, allNewTools);
  searchInToolsTags();
  filterByToolsTags();
  if (!allNewTools.length) {
    toolNoFind();
  }
});
