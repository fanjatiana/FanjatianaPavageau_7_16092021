import {
  searchBar,
  searchBarByAppliances,
  searchBarByIngredients,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { searchIn } from "./main_searchBar/function_searchIn.js";
//import {searchInIngredients} from "./function_searchInIngredients.js";
//import { searchAppliancesTags } from "./function_ searchAppliancesTags.js";
import { searchInIngredientsRecipes } from "./main_searchBar/function_search-in-ingredients-recipes.js";
import { searchIngredientsTags } from "./ingredients_searchBar/function_searchIngredientsTags.js";
import { addIngredientsList } from "./ingredients_searchBar/function_addIngredientsList.js";
import { displayBlockSearchBy } from "./function_displayBlockSearchBy.js";
import { selectThisTag } from "./function _selectThisTag.js";
import { removeThisTag } from "./function_removeThisTag.js";

//creation des articles dans le DOM
buildArticle(recipes);

// barre de recherche : fonction filtre par mot clé
searchBar.addEventListener("input", searchIn);

// barre de recherche :  fonction filtre par mot clé et affichage des ingrédients des recettes dans le bloc : ingrédients
searchBar.addEventListener("input", searchInIngredientsRecipes);

// barre de recherche par ingrédients : affichage de la liste des ingrédients au click de la souris
searchBarByIngredients.addEventListener("click", (event) => {
    event.preventDefault();
    displayBlockSearchBy();
});

// barre de recherche par ingrédients : affichage de la liste des ingrédients au clavier
searchBarByIngredients.addEventListener("keyUp", (event) => {
    event.preventDefault();
    displayBlockSearchBy();
});


// barre de recherche par ingrédients : valeur de l'input
let valueInput = searchBarByIngredients.value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

// barre de recherche par ingrédients : filtre sur les ingrédients
const array = [];
recipes.filter((recipe) =>
  recipe.ingredients.map((list) => array.push(list.ingredient))
);

const newArray = Array.from(new Set(array));

const totalIngredients = newArray.filter((element) =>
  element
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .includes(valueInput)
);

searchBarByIngredients.addEventListener(
  "click",
  addIngredientsList(totalIngredients)
);
searchBarByIngredients.addEventListener("input", searchIngredientsTags);



















searchBarByAppliances.addEventListener("click", (event) => {
    event.preventDefault();
    searchAppliancesTags;
})


searchBarByAppliances.addEventListener("input", (event) => {
    event.preventDefault();
    searchAppliancesTags;

})
