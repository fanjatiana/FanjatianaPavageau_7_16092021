import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';
// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addToolsList = (array) => {
  const arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e.toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')));
    return arrayTools;
  });

  let newArrayTools = [];

  arrayTools.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayTools.push(newWord);
  });

  newArrayTools = Array.from(new Set(newArrayTools));

  newArrayTools = Array.from(new Set(newArrayTools));

  return newArrayTools;
};
