import { searchBarByAppliances } from "../const.js";
import { stringNormalize } from "../function_normalize.js";

export const displayAppliancesList = (array) => {
  // valeur de l'input
  let inputValueAppliance = searchBarByAppliances.value.toLowerCase();
  stringNormalize(inputValueAppliance);

  // filtre sur les ingrédients
  let arrayAppliances = [];
  array.filter((recipe) => arrayAppliances.push(recipe.appliance));

  let newArrayAppliances = Array.from(new Set(arrayAppliances));
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
