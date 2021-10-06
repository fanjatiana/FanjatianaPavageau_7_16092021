import { blockSubMenuIngredients, allTagsIngredients } from "./const.js";

import { Tags } from "./class_Tags.js";

import { recipes } from "./data_recipes.js";
import { removeThisTag } from "./function_removeThisTag.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
  document.querySelector(
    ".sub_menu"
  ).innerHTML += `<ul id="ingredients_tags"></ul>`;

  array.forEach((element) => {
    const list = new Tags(element);
  });

  const allTagsIngredients = document.querySelectorAll(
    "#ingredients_tags > li"
  );
  allTagsIngredients.forEach((tags) => {
    // document.getElementById("yoursTags").innerHTML = "";
    tags.addEventListener("click", (e) => {
      const a = e.currentTarget.innerHTML;
      console.log(a);

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${a}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;

      removeThisTag();
    });
  });
};
