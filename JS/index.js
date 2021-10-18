import {
  searchBar,
  searchBarByAppliances,
  searchBarByIngredients,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { searchIn } from "./main_searchBar/function_searchIn.js";

import { searchInIngredientsRecipes } from "./main_searchBar/function_search-in-ingredients-recipes.js";
import { searchIngredientsTags } from "./ingredients_searchBar/function_searchIngredientsTags.js";
import { displayBlockSearchByAppliances, displayBlockSearchByIngredients } from "./function_displayBlockSearchBy.js";
import { searchInAppliancesRecipes } from "./main_searchBar/function_search-in-appliances-recipes.js";

//creation des articles dans le DOM
buildArticle(recipes);

// barre de recherche : fonction filtre par mot clé
searchBar.addEventListener("input", searchIn);

// barre de recherche :  fonction filtre par mot clé et affichage des ingrédients des recettes dans le bloc : ingrédients
searchBar.addEventListener("input", () => {
  searchInIngredientsRecipes();
  searchInAppliancesRecipes()
})


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



searchBarByIngredients.addEventListener("click", (event) => {
  searchIngredientsTags(event);
})
searchBarByIngredients.addEventListener("input", searchIngredientsTags);



searchBarByAppliances.addEventListener("click", (event) => {
  event.preventDefault();
  displayBlockSearchByAppliances();
});

















