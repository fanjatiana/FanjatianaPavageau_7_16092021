import { recipes } from "./data_recipes.js";

export const getRecipesList = () => {
  const listRecipes = document.querySelectorAll(".info_recipe > h3");

  let articles = [];

  listRecipes.forEach((e) => {
   let recipeTitle = e.innerHTML;
    articles.push(recipeTitle);
  });

 let arrayRecipes = [];

  articles.forEach((title) => {
    recipes.filter((a) => {
      if (a.name === title) {
        arrayRecipes.push(a);
      }
    });
  });

  return arrayRecipes;
};
