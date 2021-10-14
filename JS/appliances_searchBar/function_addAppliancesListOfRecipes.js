import {blockSubMenuAppliances, blockSubMenuIngredients } from "../const.js";

import { addTagsList } from "../function_addTagsList.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addAppliancesListOfRecipes = (array) => {
  const arrayAppliances = [];
  array.filter((recipe) => {
    arrayAppliances.push(recipe);
    });
console.log(arrayAppliances)

  const ulTag = `<ul id="tags__list"></ul>`;
  const newArrayAppliances = Array.from(new Set(arrayAppliances));
  console.log(newArrayAppliances)
addTagsList(ulTag, blockSubMenuAppliances, newArrayAppliances)
  

};
