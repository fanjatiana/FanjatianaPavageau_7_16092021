
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { buildArticle } from "../function_buildArticles.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { RecipesNoFind } from "../function_messageError.js";
import { addAppliancesList } from "./function_add-appliances-list.js";

 export const showRecipesFilteredByApplianceTag = () => {
  const retrieveTags = getAllTagsSelected();
  const dataFiltered = getRecipesList();

  retrieveTags.forEach((tag) => {
    /*const resultFilterByDescription = dataFiltered.filter((recipe) =>
      recipe.description.includes(tag)
    );

    const resultFilterByName = dataFiltered.filter((recipe) =>
      recipe.name.includes(tag)
    );*/
    const resultFilterByAppliances = dataFiltered.filter((recipe) =>
      recipe.appliance.includes(tag)
    );

    let arrayFilteredTag =
      /*resultFilterByDescription.concat(
      resultFilterByName,*/
      resultFilterByAppliances;

    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
    buildArticle(newArrayIFilteredTag);
    addAppliancesList(newArrayIFilteredTag);

    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }
  });
};
