import {
    blockSubMenuTools,
    searchBar,
  
  } from "../const.js";
  import { recipes } from "../data_recipes.js";

  import { buildArticle } from "../function_buildArticles.js";
  
  import { tagNoFind } from "../function_messageError.js";
import { addToolsListOfRecipes } from "../tools_searchBar/function_addToolsListOfRecipes.js";

  

  export const searchInToolsRecipes = () => {

   
  
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
    const resultFilterByTools= recipes.filter((recipe) =>
    recipe.ustensils.map(e=>e
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  ));


   
  
    const array = resultFilterByDescription.concat(resultFilterByTools
    );
  
    const newArray = Array.from(new Set(array));
  
    console.log(newArray);
  
  
  
    if (!newArray.length) {
      return tagNoFind();
    } else if (valueInput.length < 3) {
     blockSubMenuTools.innerHTML = "";
      addToolsListOfRecipes(recipes)
      buildArticle(recipes);
    } else {
     blockSubMenuTools.innerHTML = "";
     addToolsListOfRecipes(newArray)
      buildArticle(newArray);
      
    }
  };
  