import { searchBarByAppliances } from "../const.js";
import { recipes } from "../data_recipes.js";


export const searchAppliancesTags = (array) => {


  // valeur de l'input
  let valueInputAppliance = searchBarByAppliances.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

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
      .includes(valueInputAppliance)
  );

  return totalAppliances;
};
