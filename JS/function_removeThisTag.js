import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { showAllRecipesFiltered } from "./function_show-all-recipes-includes-ingredientsTags.js";
import { showRecipesFilteredAgain } from "./function_show-recipes-filtered-again.js";
import { addIngredientsListOfRecipes } from "./ingredients_searchBar/function_addIngredientsListOfRecipes.js";

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = () => {
  const tag = document.querySelectorAll(".tag");
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });
  console.log(retrieveTags);

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      retrieveTags.pop();
      console.log(retrieveTags);

      let arrayFilteredTag = [];
      retrieveTags.forEach((tag) => {
        const resultFilterByDescription = recipes.filter((recipe) =>
          recipe.description.includes(tag)
        );

        const resultFilterByName = recipes.filter((recipe) =>
          recipe.name.includes(tag)
        );
        const resultFilterByIngredients = recipes.filter((recipe) =>
          recipe.ingredients.map((list) => list.ingredient).includes(tag)
        );

        arrayFilteredTag = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients
        );
        console.log(arrayFilteredTag);

        const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));

        buildArticle(newArrayIFilteredTag);
      });

      if(retrieveTags.length ===0 ){
        buildArticle(recipes)
      }
    });
  });
};
