import { removeThisTag } from "./function_removeThisTag.js";
import { showAllRecipesFiltered } from "./function_show-all-recipes-includes-ingredientsTags.js";
import { showRecipesFilteredAgain } from "./function_show-recipes-filtered-again.js";

export const selectThisTag = (allLiTags) => {
  // ajout des tags selectionnés au clic

  allLiTags.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant
      console.log(thisTag)

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;
     removeThisTag();
      showAllRecipesFiltered();
      showRecipesFilteredAgain();
    });
  });
};
