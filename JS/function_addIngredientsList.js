import { Tags } from "./class_Tags.js";
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
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML;
  
      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;
          

      removeThisTag();
    });
  });
};
