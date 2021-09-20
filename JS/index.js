import { arrayTitle, searchBar, ingredientsList } from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import {searchByTitle} from "./function_search_ByTitle.js";



//creation des articles dans le DOM
recipes.forEach((element) =>{
    buildArticle(element);
})


// function filtre par mot clé
searchBar.addEventListener("input", searchByTitle);