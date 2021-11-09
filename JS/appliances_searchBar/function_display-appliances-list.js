import { searchBarByAppliances } from "../const.js";
import { capitalizeFirstLetter } from "../function_capitalizer-first-letter.js";
import { stringNormalize } from "../function_normalize.js";
export const displayAppliancesList = (array) => {
  // valeur de l'input
  let inputValueAppliance = searchBarByAppliances.value.toLowerCase();
  stringNormalize(inputValueAppliance);

  // filtre sur les ingrédients
  let arrayAppliances = [];
  array.filter((recipe) =>
    arrayAppliances.push(
      recipe.appliance
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    )
  );

  let newArrayAppliances = [];

  arrayAppliances.forEach((word) => {
    let newWord = capitalizeFirstLetter(word);
    newArrayAppliances.push(newWord);
  });

  newArrayAppliances = Array.from(new Set(newArrayAppliances));

  newArrayAppliances = newArrayAppliances.sort();

  let totalAppliances = newArrayAppliances.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(inputValueAppliance)
  );

  return totalAppliances;
};
