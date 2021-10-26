import { blockSubMenuAppliances } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { buildArticle } from "../function_buildArticles.js";
import { addAppliancesList } from "./function_add-appliances-list.js";


export const showAllRecipesIncludesApplianceTag = () => {
 const retrieveTags = getAllTagsSelected();
  // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné

 
  retrieveTags.forEach((tag) => {
    let resultFilterByAppliances = recipes.filter((recipe) =>
      recipe.appliance.includes(tag)
    );

    const array = Array.from(new Set(resultFilterByAppliances));


    if (tag.length === 1) {
      buildArticle(array);
     blockSubMenuAppliances.innerHTML = "";
     addAppliancesList(array);
    } else if (tag.length > 1) {
      addAppliancesList(array);
    } else {
      buildArticle(recipes);
      blockSubMenuAppliances.innerHTML = "";
      addAppliancesList(recipes);
    }
  });
};
