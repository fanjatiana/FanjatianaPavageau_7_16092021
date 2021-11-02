import { blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { addToolsList } from "./function_add-tools-list.js";
import { filterByToolsTags } from "./function_filter-tools.js";

export const removeThisToolsTag = (arrayTagsSelected) => {
  const tag = document.querySelectorAll(".tag");


  // tableau des tags ajoutés
  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();

      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
        let resultFilterByTools = recipes.filter((recipe) =>
          recipe.ustensils.includes(tag)
        );

        arrayFilteredTag = Array.from(new Set(resultFilterByTools));
      });

      buildArticle(arrayFilteredTag);
      const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
      const allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuTools.innerHTML = "";
      addTagsList(blockSubMenuTools, allNewTools);
      filterByToolsTags();
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
        const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
        const allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        blockSubMenuTools.innerHTML = "";
        addTagsList(blockSubMenuTools, allNewTools);
       
        filterByToolsTags();
      }
    });
  });
};
