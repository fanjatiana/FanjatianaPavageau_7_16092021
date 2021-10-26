import { addAppliancesList } from "./appliances_searchBar/function_add-appliances-list.js";
import { searchAppliancesTags } from "./appliances_searchBar/function_searchAppliancesTags.js";
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

import { addTagsList } from "./function_addTagsList.js";
import { buildArticle } from "./function_buildArticles.js";
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
  tagNoFind,
  toolNoFind,
} from "./function_messageError.js";
import { returnNewRecipesList } from "./function_return-new-recipes-list.js";
import { selectThisTag } from "./ingredients_searchBar/function _select-this-ingredient-tag.js";
import { addIngredientsList } from "./ingredients_searchBar/function_add-ingredients-list.js";
import { removeThisTag } from "./ingredients_searchBar/function_remove-this-ingredient-Tag.js";
import { searchIngredientsTags } from "./ingredients_searchBar/function_searchIngredientsTags.js";
import { showAllRecipesByTag } from "./ingredients_searchBar/function_show-all-recipes-includes-ingredientsTags.js";
import { showRecipesFilteredAgain } from "./ingredients_searchBar/function_show-recipes-filtered-by-ingredients-tags.js";
import { searchInAppliances } from "./main_searchBar/function_search-appliances-in-recipes.js";
import { searchIn } from "./main_searchBar/function_search-in.js";
import { addToolsList } from "./tools_searchBar/function_add-tools-list.js";
import { searchToolsTags } from "./tools_searchBar/function_searchToolsTags.js";

                                                  // au chargement de la page :

                                                  //ajout des articles
buildArticle(recipes);
//evenement au clic du bloc ingredients
searchBarByIngredients.addEventListener("focus", () => {

  displayBlockSearchByIngredients();
  displayNoneSearchByAppliances();
  displayNoneSearchByTools()
  blockSubMenuIngredients.innerHTML =""
  // ajout de la liste des ingredients
  const allIngredients = addIngredientsList(recipes);
  addTagsList(blockSubMenuIngredients, allIngredients);
  //selection des tags

  //tags ingrédients
  let ingredientsTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__ingredients > .tags__list li"
  );
  ingredientsTagsListDisplayed.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      selectThisTag(e);
      showAllRecipesByTag();
      showRecipesFilteredAgain();
      removeThisTag();
    });
  });
});

//evenement au clic du bloc appareil
searchBarByAppliances.addEventListener("focus", () => {
  blockSubMenuAppliances.innerHTML = "";
displayNoneSearchByIngredients();
displayNoneSearchByTools();
  displayBlockSearchByAppliances();
  // ajout de la liste des appareils
addAppliancesList(recipes);
const allAppliances = addAppliancesList(recipes);
addTagsList(blockSubMenuAppliances, allAppliances);
});

//evenement au clic du bloc ustensiles
searchBarByTools.addEventListener("focus", () => {
  blockSubMenuTools.innerHTML = ""
  displayNoneSearchByIngredients();
  displayNoneSearchByAppliances();
  displayBlockSearchByTools();
  // ajout de la liste des ustensiles
const allTools = addToolsList(recipes);
addTagsList(blockSubMenuTools, allTools);
});


// barre de recherche principale :

searchBar.addEventListener("input", () => {
  // recherche dans le titre, description, ingrédient
  searchIn();
  // rechercher un appareil
  searchInAppliances();
  //rechercher un ustensile

  //affichage de la liste des ingrédients en fonction de la liste des recettes
  const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
  const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  blockSubMenuIngredients.innerHTML = "";
  addTagsList(blockSubMenuIngredients, allNewIngredients);
  if (!allNewIngredients.length) {
    tagNoFind();
  }
  //affichage de la liste des appareils en fonction de la liste des recettes
  const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  blockSubMenuAppliances.innerHTML = "";
  addTagsList(blockSubMenuAppliances, allNewAppliances);
  if (!allNewAppliances.length) {
    applianceNoFind();
  }
  //affichage de la liste des ustensiles en fonction de la liste des recettes
  const allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  blockSubMenuTools.innerHTML = "";
  addTagsList(blockSubMenuTools, allNewTools);
  if (!allNewTools.length) {
    toolNoFind();
  }

  //selection des tags

  //tags ingrédients
  let ingredientsTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__ingredients > .tags__list li"
  );
  selectThisTag(ingredientsTagsListDisplayed);
});

// recherche de tags ingrédients
searchBarByIngredients.addEventListener("input", () => {
  let inputValue = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
  const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  const ingredients = searchIngredientsTags(recipes);

  console.log(ingredients);
  if (!ingredients.length) {
    return tagNoFind();
  } else if (inputValue.length < 3) {
    blockSubMenuIngredients.innerHTML = "";
    addTagsList(blockSubMenuIngredients, allNewIngredients);
  } else {
    blockSubMenuIngredients.innerHTML = "";
    addTagsList(blockSubMenuIngredients, ingredients);
  }
});

// recherche de tags appareil
searchBarByAppliances.addEventListener("input", () => {
  let inputValue = searchBarByAppliances.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
  const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  const appliances = searchAppliancesTags(recipes);

  if (!appliances.length) {
    return applianceNoFind();
  } else if (inputValue.length < 3) {
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(blockSubMenuAppliances, allNewAppliances);
  } else {
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(blockSubMenuAppliances, appliances);
  }
});

// recherche de tags ustensiles
searchBarByTools.addEventListener("input", () => {
  let inputValue = searchBarByTools.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
  const allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
  const tools = searchToolsTags(recipes);

  if (!tools.length) {
    return toolNoFind();
  } else if (inputValue.length < 3) {
    blockSubMenuTools.innerHTML = "";
    addTagsList(blockSubMenuTools, allNewTools);
  } else {
    blockSubMenuTools.innerHTML = "";
    addTagsList(blockSubMenuTools, tools);
  }
});

