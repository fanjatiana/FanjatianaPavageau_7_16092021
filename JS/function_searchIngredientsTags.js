import {
  blockSubMenuIngredients,
  searchBarByIngredients,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { addIngredientsList } from "./function_addIngredientsList.js";
import { displayBlockSearchBy } from "./function_displayBlockSearchBy.js";
import { buildArticle } from "./function_buildArticles.js";

//import { selectTAgs } from "./function_selectTags.js";
import { removeThisTag } from "./function_removeThisTag.js";
import { tagNoFind } from "./function_messageError-tags.js";
export const searchIngredientsTags = (event) => {
  event.preventDefault();
  searchBarByIngredients.addEventListener("keyup", displayBlockSearchBy());



  // valeur de l'input
  let valueInput = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // filtre sur les ingrédients
  const array = [];
  recipes.filter((recipe) =>
    recipe.ingredients.map((list) => array.push(list.ingredient))
  );

  const newArray = Array.from(new Set(array));

  const totalIngredients = newArray.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );


  console.log(totalIngredients);

  if (!totalIngredients.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuIngredients.innerHTML = "";
    return addIngredientsList(newArray);
  } else {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsList(totalIngredients);
  }


  /*const allTagsIngredients = document.querySelectorAll(
    "#ingredients_tags > li"
  );
  allTagsIngredients.forEach((tags) => {
   // document.getElementById("yoursTags").innerHTML = "";
    tags.addEventListener("click", selectTAgs);
    
  });*/

};
