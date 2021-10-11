import { Article } from "./class/class_Article.js";
import { RecipesFactory } from "./class/factory_recipes.js";

//construction des articles dans le dom
export const buildArticle = (array) => {
  document.getElementById("recipes-list").innerHTML = "";
  array.forEach((element) => {

   RecipesFactory.buildRecipes(element.id,
      element.name,
      element.time,
      element.ingredients,
      element.description);

      
  });
 
};

