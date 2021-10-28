
import { buildArticle } from "../function_buildArticles.js";
import { RecipesNoFind } from "../function_messageError.js";


 export const showRecipesFilteredByApplianceTag = (allTags,dataFiltered) => {


  allTags.forEach((tag) => {
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
    
    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }else{
      buildArticle(newArrayIFilteredTag);
    }
  });
};
