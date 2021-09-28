import { arrayTitle, searchBar, ingredientsList } from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import {searchIn} from "./function_searchIn.js";



//creation des articles dans le DOM

    buildArticle(recipes);



// function filtre par mot clé
searchBar.addEventListener("input", searchIn);