import { blockSubMenuAppliances, searchBarByAppliances, valueInput } from "../const.js"
import { recipes } from "../data_recipes.js";
import {displayBlockSearchByAppliances } from "../function_displayBlockSearchBy.js";
import {addAppliancesList} from "./function_addAppliancesList.js"
import {tagNoFind} from "../function_messageError.js"

export const searchAppliancesTags = () =>{

    searchBarByAppliances.addEventListener("keyup", displayBlockSearchByAppliances());


  // valeur de l'input
  let valueInput = searchBarByAppliances.value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

  console.log(valueInput);

  // filtre sur les ingrédients
  const array = [];
  recipes.filter((recipe) =>
    array.push(recipe.appliance))

    let newArray = Array.from(new Set(array));
    newArray = newArray.sort();

    let totalAppliances= newArray.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );


  

   if (!totalAppliances.length) {
        return tagNoFind();
      } else if (valueInput.length < 3) {
        blockSubMenuAppliances.innerHTML = "";
        addAppliancesList(newArray);
        //searchInIngredientsRecipes(event);
      } else {
        blockSubMenuAppliances.innerHTML = "";
        addAppliancesList(totalAppliances);
      }

}

