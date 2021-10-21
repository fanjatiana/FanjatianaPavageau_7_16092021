import { blockSubMenuIngredients, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { buildArticle } from "../function_buildArticles.js";
import { blockSubMenuAppliances } from "../const.js";
import { addAppliancesListOfRecipes } from "./function_add-recipes-appliances.js";
import { displayBlockSearchByAppliances } from "../function_displayBlockSearchBy.js";
import { addTagsList } from "../function_addTagsList.js";
import { selectThisApplianceTag } from "./function_select-this-appliance-tag.js";
export const searchRecipesWithThisIngredient = () => {
  blockSubMenuAppliances.innerHTML =""
  // liste des tags appareil
  const articleList = document.querySelectorAll(".info_recipe > h3");
  let totalAppliances = [];
  recipes.filter((recipe) => totalAppliances.push(recipe.appliance));

  // recupération de la liste des recettes
  const arrayRecipesTitle = [];
  articleList.forEach((title) => {
    arrayRecipesTitle.push(title.innerHTML);
  });

  let resultFilterByIngredientTag = [];
  arrayRecipesTitle.forEach((title) => {
    recipes.filter((a) => {
      if (a.name === title) {
        resultFilterByIngredientTag.push(a);
      }
    });
  });

  // tableau de recupération de la liste des tags selectionnés
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent; // recupération du nom du tag
    retrieveTags.push(tagName);
  });

  console.log(retrieveTags);

  let totalTagOfRecipes = [];
  resultFilterByIngredientTag.filter((recipe) => totalTagOfRecipes.push(recipe.appliance));

totalTagOfRecipes = Array.from(new Set(totalTagOfRecipes));
const ulTagAppliances = document.querySelector(".sub_menu__appliances");

const addUlTagAppliances = `<ul id="tags__list"></ul>`;
console.log(totalTagOfRecipes)


  if (allDivTagDisplayed.length){
  
    displayBlockSearchByAppliances();
      blockSubMenuIngredients.innerHTML = ""
      buildArticle(resultFilterByIngredientTag)
   addTagsList(addUlTagAppliances, ulTagAppliances,totalTagOfRecipes);
   const allLiTags = document.querySelectorAll(
    "#tags__list > li"
  );
  selectThisApplianceTag(allLiTags)
 
  
   
  }


};
