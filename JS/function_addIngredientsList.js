import {blockSubMenuIngredients,
} from "./let-and-const.js";

import { Tags } from "./class_Tags.js";
import { selectTAgs } from "./function_selectTags.js";
import { removeThisTag } from "./function_removeThisTag.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addIngredientsList = (array) => {
   
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


  const allTagsIngredients = document.querySelectorAll("#ingredients_tags > li");
allTagsIngredients.forEach((tags)=>{
  tags.addEventListener("click", selectTAgs);
})

const allTagsSelected = document.querySelectorAll(".btn_cross");
 
allTagsSelected.forEach((cross) =>{
    cross.addEventListener("click", removeThisTag)
});
}