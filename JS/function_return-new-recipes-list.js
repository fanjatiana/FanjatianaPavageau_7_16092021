import { recipes } from "./data_recipes.js";




export const returnNewRecipesList = () =>{
    const listRecipes = document.querySelectorAll(".info_recipe > h3");
    const articles = [];
  
    listRecipes.forEach((e) => {
      const recipeTitle = e.innerHTML;
      articles.push(recipeTitle);
    });
    console.log(articles)
    const dataFiltered = [];
  
    articles.forEach((title) => {
      recipes.filter((a) => {
        if (a.name === title) {
          dataFiltered.push(a);
        }
      });
    });
  
    return dataFiltered;
}

