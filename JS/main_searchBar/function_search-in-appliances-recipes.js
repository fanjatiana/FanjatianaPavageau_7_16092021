import { addAppliancesListOfRecipes } from "../appliances_searchBar/function_addAppliancesListOfRecipes.js";
import { blockSubMenuAppliances, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { buildArticle } from "../function_buildArticles.js";
import { tagNoFind } from "../function_messageError.js";

/* afficher la liste des recettes qui ont l'ingrédient 
et ajout de la liste des ingrédients associés dans le bloc ingredients */

export const searchInAppliancesRecipes = () => {

  // valeur de l'input
  let valueInput = searchBar.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  console.log(valueInput);

  // filtre sur les ingrédients
  const resultFilterByAppliances = recipes.filter((recipe) =>
    recipe.appliance
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  const resultFilterByDescription = recipes.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(resultFilterByAppliances)
  );

  const array = resultFilterByAppliances.concat(resultFilterByDescription);
  const newArrayAppliances = Array.from(new Set(array));

  if (!newArrayAppliances.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuAppliances.innerHTML = "";
    addAppliancesListOfRecipes(array);
    buildArticle(recipes);
  } else {
    blockSubMenuAppliances.innerHTML = "";
    addAppliancesListOfRecipes(newArrayAppliances);
    buildArticle(newArrayAppliances);
  }
};
