import { TagsFactory } from "./class/factory_Tags.js";
//import { selectThisIngredientTag } from "./function _select-this-ingredient-tag.js";
//import { removeThisTag } from "./function_removeThisTag.js";


// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addTagsList = (source, array) => {
  const ulTag = `<ul class="tags__list"></ul>`;
  source.innerHTML += `${ulTag}`;
  array.sort();
  array.forEach((element) => {
    TagsFactory.buildTags(source,element)
  });

}
 
