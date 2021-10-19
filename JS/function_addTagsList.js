import { TagsFactory } from "./class/factory_Tags.js";
//import { selectThisIngredientTag } from "./function _select-this-ingredient-tag.js";
//import { removeThisTag } from "./function_removeThisTag.js";


// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addTagsList = (ulTag, source, array) => {
  const addUlToDOM = ulTag;
  source.innerHTML += `${addUlToDOM}`;
  array.sort();
  array.forEach((element) => {
    TagsFactory.buildTags(element)
  });
  /*const allLiTags = document.querySelectorAll(
    "#tags__list > li"
  );
  selectThisIngredientTag(allLiTags)*/
}
 
