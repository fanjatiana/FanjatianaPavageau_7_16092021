import { displayBlockSearchByTools } from "../function_displayBlockSearchBy.js";

import {
  

  blockSubMenuAppliances,
    blockSubMenuIngredients,
    blockSubMenuTools,

    searchBarByTools,
  } from "../const.js";

  import { addTagsList } from "../function_addTagsList.js";
  
  import { applianceNoFind,} from "../function_messageError.js";
import { recipes } from "../data_recipes.js";
  

  
  
   export const searchToolsTags = (event) => {
    event.preventDefault();
   searchBarByTools.addEventListener(
      "keyup",
      displayBlockSearchByTools()
    );
  
    // valeur de l'input
    let valueInputTools = searchBarByTools.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  
  
  
    // filtre sur les ingrédients
 
    const arrayTools = [];
 recipes.filter((recipe) =>{
    recipe.ustensils.map(e=> arrayTools.push(e))
  })

  
    let newArrayTools = Array.from(new Set(arrayTools));
    newArrayTools = newArrayTools.sort();
  
    console.log(newArrayTools)
  
    let totalTools= newArrayTools.filter((element) =>
      element
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(valueInputTools)
    );
  
    const ulTagTools = document.querySelector(".sub_menu__tools");
  
    const addUlTagTools = `<ul id="tags__list"></ul>`;
  console.log(totalTools)
    if (!totalTools.length) {
      return applianceNoFind();
    } else if (valueInputTools.length < 3) {
      blockSubMenuTools.innerHTML = "";
      addTagsList(addUlTagTools, ulTagTools, newArrayTools);
    } else {
      blockSubMenuTools.innerHTML = "";
      addTagsList(addUlTagTools, ulTagTools, totalTools);
    }
  };
  