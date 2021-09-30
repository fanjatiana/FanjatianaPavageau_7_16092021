import { blockSubMenuIngredients, searchBarByIngredients } from "./let-and-const.js";
import { recipes } from "./data_recipes.js";
import { addIngredientsList } from "./function_addIngredientsList.js";
import { displayBlockSearchBy } from "./function_displayBlockSearchBy.js";
import { AddIngredientsTags } from "./class_addIngredientsTags.js";
import { buildArticle } from "./function_buildArticles.js";

export const searchInIngredients = () => {
  searchBarByIngredients.addEventListener("keydown", displayBlockSearchBy);

  // valeur de l'input
  let valueInput = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  console.log(valueInput);

  // filtre sur les ingrédients
  const resultFilterByIngredients = recipes.filter((recipe) =>
    recipe.ingredients
      .map((list) =>
        list.ingredient
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
      .includes(valueInput)
  );
  // filtre sur les descritptions
  const resultFilterByDescription = recipes.filter((recipe) =>
    recipe.description
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );

  const array = resultFilterByIngredients.concat(resultFilterByDescription);
  console.log(array)
  
  const newArrayIngredients = Array.from(new Set(array));

  /*if (valueInput === 3) {
    const baliseUl = document.getElementById("ingredients_tags");
    baliseUl.innerHTML = "";
    return addIngredientsList(resultFilterByIngredients);
  } */
 // fonction d'affichage du message d'erreur
 const messageError = () => {
    document.getElementById("ingredients_tags").innerHTML = "";
    document.getElementById("ingredients_tags").innerHTML += `<p> aucune recette ne correspond à votre critère... vous pouvezchercher tarte aux pommes,poisson, etc</p>`;
  };

  if (!newArrayIngredients.length) {
    return messageError();
  }   
  else if (valueInput.length < 3) {
    blockSubMenuIngredients.innerHTML = "";
    addIngredientsList(recipes);
    buildArticle(recipes);
  } else {
    blockSubMenuIngredients.innerHTML = "";
     addIngredientsList(newArrayIngredients);
    buildArticle(newArrayIngredients);
  }
};
