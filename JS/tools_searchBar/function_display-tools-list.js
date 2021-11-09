import { searchBarByTools } from "../const.js";
import {stringNormalize} from "../function_normalize.js";

export const displayToolsList = (array) => {
  // valeur de l'input
  let inputValueTools = searchBarByTools.value.toLowerCase();
  stringNormalize(inputValueTools)

  let arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
  });

  let newArrayTools = Array.from(new Set(arrayTools));

  // filtre sur les appareils
  const resultFilterByTools = newArrayTools.filter((recipe) =>
    recipe
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(inputValueTools)
  );

  return resultFilterByTools;
};
