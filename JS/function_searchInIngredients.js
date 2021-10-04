import {  blockSubMenuIngredients, searchBarByIngredients} from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { addIngredientsList } from "./function_addIngredientsList.js";
import { displayBlockSearchBy } from "./function_displayBlockSearchBy.js";
import { buildArticle } from "./function_buildArticles.js";
import { messageError } from "./function_messageError.js";
import { selectTAgs } from "./function_selectTags.js";
import { removeThisTag } from "./function_removeThisTag.js";
export const searchInIngredients = (event) => {
  event.preventDefault();
  searchBarByIngredients.addEventListener("keydown", displayBlockSearchBy);

  // valeur de l'input
  let valueInput = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();


  // filtre sur les ingrédients
  const resultFilterByIngredients = recipes.filter((recipe) =>
    recipe.ingredients
      .map((list) =>
        list.ingredient
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
      .includes(valueInput)
  );
  // filtre sur les descritptions
  const resultFilterByDescription = recipes.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  const array = resultFilterByIngredients.concat(resultFilterByDescription);

  
  const newArrayIngredients = Array.from(new Set(array));


  if (!newArrayIngredients.length) {
    return messageError();
  }   
  else if (valueInput.length < 3) {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsList(recipes);
    buildArticle(recipes);
  } else {
    blockSubMenuIngredients.innerHTML = "";
     addIngredientsList(newArrayIngredients);
    buildArticle(newArrayIngredients);
  }

  const allTagsIngredients = document.querySelectorAll("#ingredients_tags > li");
allTagsIngredients.forEach((tags)=>{
  document.getElementById("yoursTags").innerHTML ="";
  tags.addEventListener("click", selectTAgs);
})

};
