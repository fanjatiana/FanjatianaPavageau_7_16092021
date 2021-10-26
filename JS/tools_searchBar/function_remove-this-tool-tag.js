import { blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";
import { addToolsList } from "./function_add-tools-list.js";

export const removeThisToolsTag = () => {
  const tag = document.querySelectorAll(".tag");
  let arrayTagsSelected = getAllTagsSelected();

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
      addToolsList(arrayFilteredTag);
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
        addToolsList(recipes);
      }
    });
  });
};
