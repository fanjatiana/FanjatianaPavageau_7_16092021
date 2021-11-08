import { searchBarByTools } from "../const.js";

export const displayToolsList = (array) => {
  // valeur de l'input
  let valueInputTools = searchBarByTools.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

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
      .includes(valueInputTools)
  );

  return resultFilterByTools;
};
