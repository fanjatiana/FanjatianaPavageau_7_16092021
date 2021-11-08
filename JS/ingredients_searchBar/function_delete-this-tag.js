import { filterByAppliancesTags } from "../appliances_searchBar/function_filter-appliance.js";
import { selectThisTag } from "./function _select-this-ingredient-tag.js";
import { removeThisTag } from "./function_remove-this-ingredient-Tag.js";
import { showRecipesFiltered } from "./function_show-recipes-filtered-by-ingredients-tags.js";

export const  newArrayAfterdeleteThisTag = (arrayTags, thisTag) => {
  const divYoursTags = document.getElementById("yoursTags");
  let tagList = [];

  arrayTags = arrayTags.filter((tag) => {
    if (tag !== thisTag) {
      tagList.push(tag);
    }
  });
  //divYoursTags.innerHTML = "";
  tagList = Array.from(new Set(tagList))
  return tagList;
};
