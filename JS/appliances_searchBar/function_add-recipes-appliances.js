import { blockSubMenuAppliances } from "../const.js";
import { addTagsList } from "../function_addTagsList.js";
import { selectThisApplianceTag } from "./function_select-this-appliance-tag.js";

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addAppliancesListOfRecipes = (array) => {
  const arrayAppliances = [];
  array.filter((recipe) => {
    arrayAppliances.push(recipe.appliance);
  });

  const newArrayAppliances = Array.from(new Set(arrayAppliances));
  const ulTag = `<ul id="tags__list"></ul>`;
  blockSubMenuAppliances.innerHTML = "";
  addTagsList(ulTag, blockSubMenuAppliances, newArrayAppliances);
  const allLiTags = document.querySelectorAll(
    "#tags__list > li"
  );
  selectThisApplianceTag(allLiTags)
};
