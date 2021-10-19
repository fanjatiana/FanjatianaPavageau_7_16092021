import { removeThisApplianceTag } from "./function_remove-this-appliance-tag.js";
import { showAllRecipesIncludesApplianceTag } from "./function_show-all-recipes-includes-appliances-tags.js";
import { showRecipesFilteredByApplianceTag } from "./function_show-recipes-filtered-by-appliances-tags.js";

export const selectThisApplianceTag = (allLiTags) => {
  // ajout des tags selectionnés au clic

  allLiTags.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;

     removeThisApplianceTag();
      showAllRecipesIncludesApplianceTag();
      showRecipesFilteredByApplianceTag();
    });
  });
};
