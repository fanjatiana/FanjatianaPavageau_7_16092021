import { Tags } from "./class_Tags.js";
import { buildArticle } from "./function_buildArticles.js";
import { removeThisTag } from "./function_removeThisTag.js";
import { recipes } from "./data_recipes.js";
// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
  // ajout des tags ingredients
  document.querySelector(
    ".sub_menu"
  ).innerHTML += `<ul id="ingredients_tags"></ul>`;

  array.forEach((element) => {
    const list = new Tags(element);
  });

  // ajout des tags selectionnés au clic
  const allTagsIngredients = document.querySelectorAll(
    "#ingredients_tags > li"
  );
  console.log(allTagsIngredients);
  allTagsIngredients.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

      console.log(thisTag);

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;

      const allDivTagDisplayed = document.querySelectorAll(".tag > p");
      console.log(allDivTagDisplayed);

      // tableau de recupération de la liste des tags selectionnés
      const retrieveTags = [];
      allDivTagDisplayed.forEach((element) => {
        const tagName = element.textContent;

        retrieveTags.push(tagName);
      });

      // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné
      let arrayFilteredTag = [];
      retrieveTags.forEach((tag) => {
        const resultFilterByDescription = recipes.filter((recipe) =>
          recipe.description.includes(tag)
        );

        const resultFilterByName = recipes.filter((recipe) =>
          recipe.name.includes(tag)
        );
        const resultFilterByIngredients = recipes.filter((recipe) =>
          recipe.ingredients.map((list) => list.ingredient).includes(tag)
        );

        arrayFilteredTag = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients
        );
      });
      console.log(arrayFilteredTag);
      buildArticle(arrayFilteredTag);
      
      // fonction pour supprimer le tag selectionné
      removeThisTag();
    });
  });
};
