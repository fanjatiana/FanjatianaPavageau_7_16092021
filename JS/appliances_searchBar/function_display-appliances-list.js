import { searchBarByAppliances } from '../const.js';
import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';
import { inputNormalize } from '../function_normalize.js';

export const displayAppliancesList = (array) => {
  // valeur de l'input
  const inputValueAppliance = searchBarByAppliances.value.toLowerCase();
  inputNormalize(inputValueAppliance);

  // filtre sur les ingrédients
  const arrayAppliances = [];
  array.filter((recipe) => arrayAppliances.push(
    recipe.appliance
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''),
  ));

  let newArrayAppliances = [];

  arrayAppliances.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayAppliances.push(newWord);
  });

  newArrayAppliances = Array.from(new Set(newArrayAppliances));

  newArrayAppliances = newArrayAppliances.sort();

  const totalAppliances = newArrayAppliances.filter((element) => element
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .includes(inputValueAppliance));

  return totalAppliances;
};
