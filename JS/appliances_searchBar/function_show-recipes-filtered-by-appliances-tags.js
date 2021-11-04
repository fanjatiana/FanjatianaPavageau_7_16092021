
import { buildArticle } from "../function_buildArticles.js";
import { RecipesNoFind } from "../function_messageError.js";


 export const showRecipesFilteredByApplianceTag = (allTags,dataFiltered) => {


  allTags.forEach((tag) => {

    const resultFilterByAppliances = dataFiltered.filter((recipe) =>
      recipe.appliance.includes(tag)
    );

    let arrayFilteredTag =resultFilterByAppliances;

    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
    
    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }else{
      buildArticle(newArrayIFilteredTag);
    }
  });
};
