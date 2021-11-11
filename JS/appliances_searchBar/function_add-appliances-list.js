import { capitalizeFirstLetter } from '../function_capitalizer-first-letter.js';

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addAppliancesList = (array) => {
  const arrayAppliances = [];
  array.filter((recipe) => {
    arrayAppliances.push(
      recipe.appliance
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
    );
    return arrayAppliances;
  });

  let newArrayAppliances = [];

  arrayAppliances.forEach((word) => {
    const newWord = capitalizeFirstLetter(word);
    newArrayAppliances.push(newWord);
  });

  newArrayAppliances = Array.from(new Set(newArrayAppliances));
  return newArrayAppliances;
};
