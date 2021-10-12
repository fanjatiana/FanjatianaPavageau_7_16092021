import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";
import { RecipesNoFind } from "./function_messageError.js";
import { removeThisTag } from "./function_removeThisTag.js";

export const showRecipesFilteredAgain = () => {
 
  const listRecipes = document.querySelectorAll(".info_recipe > h3");

  const articles = [];

  listRecipes.forEach((e) => {
    const recipeTitle = e.innerHTML;
    articles.push(recipeTitle);
  });

  const dataFiltered = [];

  articles.forEach((title) => {
    recipes.filter((a) => {
      if (a.name === title) {
        dataFiltered.push(a);
      }
    });
  });

  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau de recupération de la liste des tags selectionnés
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });

  let arrayFilteredTag = [];
  retrieveTags.forEach((tag) => {
    const resultFilterByDescription = dataFiltered.filter((recipe) =>
      recipe.description.includes(tag)
    );

    const resultFilterByName = dataFiltered.filter((recipe) =>
      recipe.name.includes(tag)
    );
    const resultFilterByIngredients = dataFiltered.filter((recipe) =>
      recipe.ingredients.map((list) => list.ingredient).includes(tag)
    );

    arrayFilteredTag = resultFilterByDescription.concat(
      resultFilterByName,
      resultFilterByIngredients
    );


    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
    buildArticle(newArrayIFilteredTag);
    removeThisTag();
  
    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }
  });

 
};
