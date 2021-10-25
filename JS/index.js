import { addAppliancesList } from "./appliances_searchBar/function_add-appliances-list.js";
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,
  searchBarByIngredients,
  searchBarByTools,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { addTagsList } from "./function_addTagsList.js";
import { buildArticle } from "./function_buildArticles.js";
import {
  displayBlockSearchByAppliances,
  displayBlockSearchByIngredients,
  displayBlockSearchByTools,
} from "./function_displayBlockSearchBy.js";
import { addIngredientsList } from "./ingredients_searchBar/function_add-ingredients-list.js";
import { addToolsList } from "./tools_searchBar/function_add-tools-list.js";

// au chargement de la page :
//ajout des articles
buildArticle(recipes);

//evenement au clic du bloc ingredients
searchBarByIngredients.addEventListener("click", (event) => {
  event.preventDefault();
  displayBlockSearchByIngredients(event);
});
// ajout de la liste des ingredients
//addIngredientsList(recipes);
//blockSubMenuIngredients.innerHTML = "";
const allIngredients = addIngredientsList(recipes);
addTagsList(blockSubMenuIngredients, allIngredients);

//evenement au clic du bloc appareil
searchBarByAppliances.addEventListener("click", (event) => {
  event.preventDefault();
  displayBlockSearchByAppliances(event);
});
// ajout de la liste des appareils
addAppliancesList(recipes);
const allAppliances = addAppliancesList(recipes);
addTagsList(blockSubMenuAppliances, allAppliances);

//evenement au clic du bloc ustensiles
searchBarByTools.addEventListener("click", (event) => {
  event.preventDefault();
  displayBlockSearchByTools(event);
});
// ajout de la liste des ustensiles
const allTools = addToolsList(recipes);
addTagsList(blockSubMenuTools, allTools);
