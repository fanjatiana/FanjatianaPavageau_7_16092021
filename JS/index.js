import { arrayTitle, searchBar } from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import {searchByTitle} from "./function_searchByTitle.js"


//creation des articles dans le DOM
buildArticle();

// function filtre par mot clé
searchBar.addEventListener("input", searchByTitle);