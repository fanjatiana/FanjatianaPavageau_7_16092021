import { searchBarByTools } from '../const.js';
import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';
import { wordNormalize } from '../function_normalize.js';

export const displayToolsList = (array) => {
  // valeur de l'input
  const inputValueTools = searchBarByTools.value;
  wordNormalize(inputValueTools);

  const arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
    return arrayTools;
  });

  let newArrayTools = [];

  arrayTools.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayTools.push(newWord);
  });

  newArrayTools = Array.from(new Set(newArrayTools));

  // filtre sur les appareils
  const resultFilterByTools = newArrayTools.filter((recipe) => wordNormalize(recipe).includes(inputValueTools));

  return resultFilterByTools;
};
