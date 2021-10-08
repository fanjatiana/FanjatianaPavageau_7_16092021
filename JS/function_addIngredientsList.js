import { Tags } from "./class_Tags.js";
import { buildArticle } from "./function_buildArticles.js";
import { removeThisTag } from "./function_removeThisTag.js";
import { recipes } from "./data_recipes.js";
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

      console.log(thisTag);

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;

      const allDivTagDisplayed = document.querySelectorAll(".tag > p");

      const recupName = [];
      allDivTagDisplayed.forEach((element) => {
        const tagName = element.textContent;

        recupName.push(tagName);
      });

      let arr = [];
      recupName.forEach((tag) => {
        const resultFilterByDescription = recipes.filter((recipe) =>
          recipe.description.includes(tag)
        );

        const resultFilterByName = recipes.filter((recipe) =>
          recipe.name.includes(tag)
        );
        const resultFilterByIngredients = recipes.filter((recipe) =>
          recipe.ingredients.map((list) => list.ingredient).includes(tag)
        );

        arr = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients
        );
      });

      console.log(arr);

      buildArticle(arr);

      removeThisTag();
    });
  });
};
