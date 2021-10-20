import { blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { buildArticle } from "../function_buildArticles.js";
import { addIngredientsListOfRecipes } from "../ingredients_searchBar/function_add-recipes-ingredients.js";

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = () => {
  const tag = document.querySelectorAll(".tag");
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau des tags ajoutés
  const arrayTagsSelected = [];
  allDivTagDisplayed.forEach((element) => {
    arrayTagsSelected.push(element.textContent);
  });

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();

      console.log(arrayTagsSelected);
      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
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

        arrayFilteredTag = Array.from(new Set(arrayFilteredTag));

      });
      buildArticle(arrayFilteredTag);
      addIngredientsListOfRecipes(arrayFilteredTag);
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
        blockSubMenuIngredients.innerHTML = "";
        addIngredientsListOfRecipes(recipes);
      }
    });
  });
};
