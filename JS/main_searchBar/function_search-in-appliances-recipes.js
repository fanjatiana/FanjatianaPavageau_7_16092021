import {
    blockSubMenuIngredients,
    searchBar,
  
  } from "../const.js";
  import { recipes } from "../data_recipes.js";

  import { buildArticle } from "../function_buildArticles.js";
  
  import { applianceNoFind, tagNoFind } from "../function_messageError.js";
  import { addAppliancesListOfRecipes } from "../appliances_searchBar/function_addAppliancesListOfRecipes.js";

  export const searchInAppliancesRecipes = () => {

   
  
    // valeur de l'input
    let valueInput = searchBar.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  console.log(valueInput)

    // filtre sur les descritptions
    const resultFilterByDescription = recipes.filter((recipe) =>
      recipe.description
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(valueInput)
    );
  
    // filtre sur les appareils
    const resultFilterByAppliances = recipes.filter((recipe) =>
      recipe.appliance
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(valueInput)
    );
  
    const array = resultFilterByDescription.concat(resultFilterByAppliances
    );
  
    const newArray = Array.from(new Set(array));
  
    console.log(newArray);
  
  
  
    if (!newArray.length) {
      return applianceNoFind();
    } else if (valueInput.length < 3) {
     blockSubMenuIngredients.innerHTML = "";
      addAppliancesListOfRecipes(recipes)
      buildArticle(recipes);
    } else {
      blockSubMenuIngredients.innerHTML = "";
      addAppliancesListOfRecipes(newArray)
      buildArticle(newArray);
      
    }
  };
  