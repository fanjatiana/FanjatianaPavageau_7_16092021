import { recipes } from "./data_recipes.js";
import {
  searchBarByIngredients,
  blockSubMenuIngredients,
} from "./let-and-const.js";

export const addIngredientsList = () => {
  const arrayIngredients = [];
  recipes.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  const newArrayIngredients = Array.from(new Set(arrayIngredients));
  console.log(blockSubMenuIngredients);

  class AddIngredientsTags {
    constructor(tag) {
      this.tag = tag;
      this.element = this.buildTagsList(tag);
      //blockSubMenuIngredients.appendChild(this.element);
    }

    buildTagsList(tag) {
      this.tag = tag;
     
      baliseUl.innerHTML += `<li>${tag}</li>`
    }
  }

  blockSubMenuIngredients.innerHTML += `<ul id="ingredients_tags"></ul>`;
  const baliseUl = document.getElementById("ingredients_tags");

  newArrayIngredients.forEach((element) => {
    const initTagList = new AddIngredientsTags(element);
  });
};

addIngredientsList();
