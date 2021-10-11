
import { TagsIngredientsFactory } from "../class/factory_recipes.js";
import { baliseUl } from "../const.js";
import { selectThisTag } from "../function _selectThisTag.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
  // ajout des tags ingredients
  document.querySelector(
    ".sub_menu"
  ).innerHTML += `<ul id="ingredients_tags"></ul>`;

  array.forEach((element) => {
    const list = TagsIngredientsFactory.buildTags(element);
  });

 selectThisTag()
 
};
