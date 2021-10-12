import {
  searchBar,
  searchBarByAppliances,
  searchBarByIngredients,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { searchIn } from "./main_searchBar/function_searchIn.js";
//import {searchInIngredients} from "./function_searchInIngredients.js";
import { searchAppliancesTags } from "./appliances_searchBar/function_searchAppliancesTags.js";
import { searchInIngredientsRecipes } from "./main_searchBar/function_search-in-ingredients-recipes.js";
import { searchIngredientsTags } from "./ingredients_searchBar/function_searchIngredientsTags.js";

import { displayBlockSearchByIngredients } from "./function_displayBlockSearchBy.js";
import { selectThisTag } from "./function _selectThisTag.js";
import { removeThisTag } from "./function_removeThisTag.js";
import { searchToolsTags } from "./tools_searchBar/function_searchToolsTags.js";
import { addTagsList } from "./function_addTagsList.js";


//creation des articles dans le DOM
buildArticle(recipes);

// barre de recherche : fonction filtre par mot clé
searchBar.addEventListener("input", searchIn);

// barre de recherche :  fonction filtre par mot clé et affichage des ingrédients des recettes dans le bloc : ingrédients
searchBar.addEventListener("input", searchInIngredientsRecipes);

// barre de recherche par ingrédients : affichage de la liste des ingrédients au click de la souris
searchBarByIngredients.addEventListener("click", (event) => {
    event.preventDefault();
    displayBlockSearchByIngredients();
});

// barre de recherche par ingrédients : affichage de la liste des ingrédients au clavier
searchBarByIngredients.addEventListener("keyUp", (event) => {
    event.preventDefault();
    displayBlockSearchByIngredients();
});



searchBarByIngredients.addEventListener("click", searchIngredientsTags);
searchBarByIngredients.addEventListener("input", searchIngredientsTags);



















searchBarByAppliances.addEventListener("click", (event) => {
  event.preventDefault()
    searchAppliancesTags();
})


searchBarByAppliances.addEventListener("input", (event) => {
  event.preventDefault()
    searchAppliancesTags();

})


