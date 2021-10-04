import { searchBar,searchBarByIngredients} from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { searchIn } from "./function_searchIn.js";
import {searchInIngredients} from "./function_searchInIngredients.js";


//creation des articles dans le DOM
buildArticle(recipes);

// fonction filtre par mot clé
searchBar.addEventListener("input", searchIn);

// fonction filtre par ingrédients
searchBarByIngredients.addEventListener("input",searchInIngredients);

