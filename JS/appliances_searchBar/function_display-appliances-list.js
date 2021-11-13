import { searchBarByAppliances } from '../const.js';
import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';
import { wordNormalize } from '../function_normalize.js';

export const displayAppliancesList = (array) => {
  // valeur de l'input
  const inputValueAppliance = searchBarByAppliances.value;
  wordNormalize(inputValueAppliance);

  // filtre sur les ingrédients
  const arrayAppliances = [];
  array.filter((recipe) => arrayAppliances.push(wordNormalize(recipe.appliance)));

  let newArrayAppliances = [];

  arrayAppliances.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayAppliances.push(newWord);
  });

  newArrayAppliances = Array.from(new Set(newArrayAppliances));

  newArrayAppliances = newArrayAppliances.sort();

  const totalAppliances = newArrayAppliances.filter((element) => wordNormalize(element).includes(inputValueAppliance));

  return totalAppliances;
};
