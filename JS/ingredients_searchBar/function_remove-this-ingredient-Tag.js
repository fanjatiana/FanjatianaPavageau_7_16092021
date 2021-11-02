import { blockSubMenuIngredients, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { searchIn } from "../main_searchBar/function_search-in.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
import { filterByIngredientsTags } from "./function_filter.js";
import { searchIngredientsTags } from "./function_searchIngredientsTags.js";
// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = (arrayTagsSelected) => {
  const tag = document.querySelectorAll(".tag");

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();

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
        arrayFilteredTag.sort();
      });
      buildArticle(arrayFilteredTag);
      const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
      const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      filterByIngredientsTags();

      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
        const newArray = returnNewRecipesList(); 
        console.log(newArray)// retourne la liste des recettes filtrée depuis la barre de recherche principale
        const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        blockSubMenuIngredients.innerHTML = "";
        addTagsList(blockSubMenuIngredients, allNewIngredients);
        filterByIngredientsTags();
      }
    });
  });
};
