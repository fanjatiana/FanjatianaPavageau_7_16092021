import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';
import { wordNormalize } from '../function_normalize.js';
// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addToolsList = (array) => {
  const arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((tool) => arrayTools.push(wordNormalize(tool)));
    return arrayTools;
  });

  let newArrayTools = [];

  arrayTools.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayTools.push(newWord);
  });

  newArrayTools = Array.from(new Set(newArrayTools));

  return newArrayTools;
};
