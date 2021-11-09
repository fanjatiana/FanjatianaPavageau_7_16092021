import { capitalizeFirstLetter } from "../function_capitalizer-first-letter.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addAppliancesList = (array) => {
  let arrayAppliances = [];
  array.filter((recipe) => {
    arrayAppliances.push(
      recipe.appliance
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
  });

  let newArrayAppliances = [];

  arrayAppliances.forEach((word) => {
    let newWord = capitalizeFirstLetter(word);
    newArrayAppliances.push(newWord);
  });

  newArrayAppliances = Array.from(new Set(newArrayAppliances));
  return newArrayAppliances;
};
