import { removeThisTag } from "./function_remove-this-ingredient-Tag.js";
import { showAllRecipesFiltered } from "./function_show-all-recipes-includes-ingredientsTags.js";
import { showRecipesFilteredAgain } from "./function_show-recipes-filtered-by-ingredients-tags.js";


//fonction pour ajouter et afficher les tags au clic dans la div YoursTag
export const selectThisIngredientTag = (allLiTags) => {

  allLiTags.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;

      removeThisTag(); // pour supprimer les tags (au click)
      showAllRecipesFiltered(); // pour afficher les recettes au click du premier tag
      showRecipesFilteredAgain(); // pour filtrer la liste des recettes liée au tag lors de l'ajout d'un second tag
    });
  });
};
