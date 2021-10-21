import { blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";
import { buildArticle } from "../function_buildArticles.js";
import { addToolsListOfRecipes } from "./function_add-recipes-tools.js";

export const removeThisToolsTag = () => {
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

      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
        const resultFilterByTools = recipes.filter((recipe) =>
          recipe.ustensils.includes(tag)
        );

        arrayFilteredTag = Array.from(new Set(resultFilterByTools));
      });

      buildArticle(arrayFilteredTag);
      addToolsListOfRecipes(arrayFilteredTag);
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
        blockSubMenuTools.innerHTML = "";
        addToolsListOfRecipes(recipes);
      }
    });
  });
};
