import { recipes } from './data_recipes.js';

export const returnNewRecipesList = () => {
  const listTitleOfRecipes = document.querySelectorAll('.info_recipe > h3');

  const titleList = [];

  listTitleOfRecipes.forEach((title) => {
    const recipeTitle = title.innerHTML;
    titleList.push(recipeTitle);
  });

  const recipeFiltered = [];

  titleList.forEach((title) => {
    recipes.filter((recipe) => {
      if (recipe.name === title) {
        recipeFiltered.push(recipe);
      }
      return recipe;
    });
  });

  return recipeFiltered;
};
