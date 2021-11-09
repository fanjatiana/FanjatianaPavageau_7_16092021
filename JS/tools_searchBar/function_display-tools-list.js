import { searchBarByTools } from "../const.js";
import { capitalizeFirstLetter } from "../function_capitalizer-first-letter.js";
import {stringNormalize} from "../function_normalize.js";

export const displayToolsList = (array) => {
  // valeur de l'input
  let inputValueTools = searchBarByTools.value.toLowerCase();
  stringNormalize(inputValueTools)

  let arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
  });

   let newArrayTools = []

   arrayTools.forEach((word)=>{
     let newWord = capitalizeFirstLetter(word);
     newArrayTools.push(newWord)
   })
  
  newArrayTools = Array.from(new Set(newArrayTools));

  // filtre sur les appareils
  const resultFilterByTools = newArrayTools.filter((recipe) =>
    recipe
      .normalize("NFD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "")
      .includes(inputValueTools)
  );

  return resultFilterByTools;
};
