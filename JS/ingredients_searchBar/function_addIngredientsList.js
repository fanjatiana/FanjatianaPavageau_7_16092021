import { Tags } from "../class/class_Tags.js";
import { selectThisTag } from "../function _selectThisTag.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
  // ajout des tags ingredients
  document.querySelector(
    ".sub_menu"
  ).innerHTML += `<ul id="ingredients_tags"></ul>`;

  array.forEach((element) => {
    const list = new Tags(element);
  });

 selectThisTag()
 
};
