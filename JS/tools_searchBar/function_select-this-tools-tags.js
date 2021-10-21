

import { showAllRecipesIncludesToolsTags } from "./function_show-all-recipes-includes-tools-tags.js";
import { showRecipesFilteredByToolsAgain } from "./function-show-recipes-filtered-by-tools-tags.js";
import { removeThisToolsTag } from "./function_remove-this-tool-tag.js";
import { searchRecipesWithThisIngredient } from "../appliances_searchBar/function_search-after-ingredient-selected.js";
export const selectThisToolsTag = (allLiTags) => {
  // ajout des tags selectionnés au clic

  allLiTags.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;

     removeThisToolsTag();
      showAllRecipesIncludesToolsTags();
      showRecipesFilteredByToolsAgain();
      searchRecipesWithThisIngredient()
    });
  });
 
};
