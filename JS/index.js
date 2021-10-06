import { searchBar,searchBarByIngredients} from "./const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { searchIn } from "./function_searchIn.js";
//import {searchInIngredients} from "./function_searchInIngredients.js";

    import { searchInIngredientsRecipes } from "./function_search-in-ingredients-recipes.js";
import { searchIngredientsTags } from "./function_searchIngredientsTags.js";


//creation des articles dans le DOM
buildArticle(recipes);

// fonction filtre par mot clé
searchBar.addEventListener("input", searchIn);

// fonction filtre par mot clé et affichage des ingrédients des recettes dans le bloc : ingrédients
searchBar.addEventListener("input",searchInIngredientsRecipes);

searchBarByIngredients.addEventListener("click", searchIngredientsTags)
searchBarByIngredients.addEventListener("input", searchIngredientsTags)
