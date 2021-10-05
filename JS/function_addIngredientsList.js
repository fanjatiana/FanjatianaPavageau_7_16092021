import {
  blockSubMenuIngredients,
  searchBarByIngredients,
} from "./let-and-const.js";

import { selectTAgs } from "./function_selectTags.js";

import { Tags } from "./class_Tags.js";

import { recipes } from "./data_recipes.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
  blockSubMenuIngredients.innerHTML += `<ul id="ingredients_tags"></ul>`;

  array.forEach((element) => {
    const list = new Tags(element);
  });


  const allTagsIngredients = document.querySelectorAll(
    "#ingredients_tags > li"
  );
  allTagsIngredients.forEach((tags) => {
    //document.getElementById("yoursTags").innerHTML = "";
    tags.addEventListener("click", selectTAgs);
  });
};
