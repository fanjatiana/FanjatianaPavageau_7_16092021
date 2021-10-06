import { selectTAgs } from "./function_selectTags.js";
import { Tags } from "./class_Tags.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
  document.querySelector(
    ".sub_menu").innerHTML += `<ul id="ingredients_tags"></ul>`;

  array.forEach((element) => {
    const list = new Tags(element);
  });
 const allTagsIngredients =  document.querySelectorAll(
    "#ingredients_tags > li"
  );
  
  allTagsIngredients.forEach((tags) => {
    //document.getElementById("yoursTags").innerHTML = "";
    tags.addEventListener("click", selectTAgs);
  });
};
