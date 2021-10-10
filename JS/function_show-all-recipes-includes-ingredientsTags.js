import { buildArticle } from "./function_buildArticles.js";
import { removeThisTag } from "./function_removeThisTag.js";



export const showAllRecipesFiltered = () => {
    const allDivTagDisplayed = document.querySelectorAll(".tag > p");
    console.log(allDivTagDisplayed);

    // tableau de recupération de la liste des tags selectionnés
    const retrieveTags = [];
    allDivTagDisplayed.forEach((element) => {
      const tagName = element.textContent;

      retrieveTags.push(tagName);
    });

    // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné
    let arrayFilteredTag = [];
    retrieveTags.forEach((tag) => {
      const resultFilterByDescription = recipes.filter((recipe) =>
        recipe.description.includes(tag)
      );

      const resultFilterByName = recipes.filter((recipe) =>
        recipe.name.includes(tag)
      );
      const resultFilterByIngredients = recipes.filter((recipe) =>
        recipe.ingredients.map((list) => list.ingredient).includes(tag)
      );

      arrayFilteredTag = resultFilterByDescription.concat(
        resultFilterByName,
        resultFilterByIngredients
      );
    });
    console.log(arrayFilteredTag);
    buildArticle(arrayFilteredTag);
    
    // fonction pour supprimer le tag selectionné
    removeThisTag();
}
    
  
    