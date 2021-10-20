import { searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { buildArticle } from "../function_buildArticles.js";
import { blockSubMenuAppliances } from "../const.js";
import { addAppliancesListOfRecipes } from "./function_add-recipes-appliances.js";
import { displayBlockSearchByAppliances } from "../function_displayBlockSearchBy.js";
export const searchRecipesWithThisIngredient = () => {
  blockSubMenuAppliances.addEventListener("click", displayBlockSearchByAppliances)

  const articleList = document.querySelectorAll(".info_recipe > h3");


  const arrayRecipesTitle = [];

  articleList.forEach((title) => {
    arrayRecipesTitle.push(title.innerHTML);
  });


let resultFilterByIngredientTag = [];
  arrayRecipesTitle.forEach((title) => {
    resultFilterByIngredientTag.push(recipes.filter((element) =>
      element.name.includes(title)
    ));
  } )



console.log(resultFilterByIngredientTag)



};
