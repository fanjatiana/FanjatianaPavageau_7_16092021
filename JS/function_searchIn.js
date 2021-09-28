import { recipes } from "./data_recipes.js";
import {
  arrayTitle,
  searchBar,
  arrayDescription,
  ingredientsList,
} from "./let-and-const.js";
import { buildArticle } from "./function_buildArticles.js";

// Fonction pour afficher la liste des menus

export const searchIn = (event) => {
  event.preventDefault();
 

  let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const resultFilterByName = recipes.filter((recipe) =>
    recipe.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );
  const resultFilterByDescription = recipes.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );
  const resultFilterByIngredients = recipes.filter((recipe) =>
    recipe.ingredients
      .map((list) =>
        list.ingredient
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
      .includes(valueInput)
  );

  const array = resultFilterByName.concat(
    resultFilterByDescription,
    resultFilterByIngredients
  );

  const newArrayRecipes = Array.from(new Set(array));

if (valueInput.length < 3){
    buildArticle(recipes);
}else if (!newArrayRecipes.length) {
    document.getElementById(
      "recipes-list"
    ).innerHTML += `<p>Aucune recette ne correspond à votre critère... vous pouvez 
      chercher « tarte aux pommes », « poisson », etc.</p>`;
  }
  buildArticle(newArrayRecipes);
   
};
