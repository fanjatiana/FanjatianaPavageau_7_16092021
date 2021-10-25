import { addAppliancesList } from "./appliances_searchBar/function_add-appliances-list.js";
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,
  searchBarByIngredients,
  searchBarByTools,
  searchBar
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { addTagsList } from "./function_addTagsList.js";
import { buildArticle } from "./function_buildArticles.js";
import {
  displayBlockSearchByAppliances,
  displayBlockSearchByIngredients,
  displayBlockSearchByTools,
} from "./function_displayBlockSearchBy.js";
import { RecipesNoFind } from "./function_messageError.js";
import { addIngredientsList } from "./ingredients_searchBar/function_add-ingredients-list.js";
import { searchIn } from "./main_searchBar/function_search-in.js";
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




                                                                // barre de recherche principale :


// recherche dans le titre, description, ingrédient
searchBar.addEventListener("input", searchIn);


//affichage des tags ingrédients en fonction des recettes 