import { blockSubMenuIngredients } from "./const.js";
import { Tags } from "./class_Tags.js";
import { removeThisTag } from "./function_removeThisTag.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsListOfRecipes = (array) => {
  const arrayIngredients = [];
  array.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  const newArrayIngredients = Array.from(new Set(arrayIngredients));
  blockSubMenuIngredients.innerHTML += `<ul id="ingredients_tags"></ul>`;

  newArrayIngredients.forEach((element) => {
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
