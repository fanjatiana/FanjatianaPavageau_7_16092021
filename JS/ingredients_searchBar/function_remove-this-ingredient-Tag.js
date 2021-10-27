import { blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { buildArticle } from "../function_buildArticles.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = (arrayTagsSelected, array) => {
  const tag = document.querySelectorAll(".tag");
 

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();

      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
        
        const resultFilterByDescription = array.filter((recipe) =>
          recipe.description.includes(tag)
        );

        const resultFilterByName = array.filter((recipe) =>
          recipe.name.includes(tag)
        );
        const resultFilterByIngredients = array.filter((recipe) =>
          recipe.ingredients.map((list) => list.ingredient).includes(tag)
        );

        arrayFilteredTag = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients
        );

        arrayFilteredTag = Array.from(new Set(arrayFilteredTag));
        arrayFilteredTag.sort();
      });
      buildArticle(arrayFilteredTag);
      //addIngredientsList(arrayFilteredTag);
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
        //addIngredientsList(recipes);
      }
    });
  });
};
