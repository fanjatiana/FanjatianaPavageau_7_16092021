import { searchBarByTheme, searchBar,searchBarByIngredients } from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { searchIn } from "./function_searchIn.js";
import{displayBlockSearchBy} from "./function_displayBlockSearchBy.js";
import {searchInIngredients} from "./function_searchInIngredients.js"


//creation des articles dans le DOM
buildArticle(recipes);

// function filtre par mot clé
searchBar.addEventListener("input", searchIn);



// evenement pour l'affichage des blocks de listes par theme
/*searchBarByTheme.forEach((input)=>{
    input.addEventListener("keydown",displayBlockSearchBy);
})*/


searchBarByIngredients.addEventListener("input",searchInIngredients);
