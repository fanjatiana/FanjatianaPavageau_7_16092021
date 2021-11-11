import { recipes } from './data_recipes.js';
import { capitalizeFirstLetter } from './function_capitalizer-first-letter.js';
import { inputNormalize } from './function_normalize.js';

// Const DOM
export const baliseUl = document.getElementById('ingredients_tags');
export const searchBar = document.getElementById('site-search');
export const searchBarByTheme = document.querySelectorAll(
  '#filter-by > section',
);
export const searchBarByIngredients = document.getElementById('ingredients-search');
export const blockSubMenuIngredients = document.querySelector(
  '#by_ingredients > .sub_menu__ingredients',
);
export const blockRecipesList = document.getElementById('recipes-list');
export const allTagsIngredients = document.querySelectorAll(
  '#ingredients_tags > li',
);
export const blockSubMenuTools = document.querySelector('.sub_menu__tools');
export const allBtnCross = document.querySelectorAll('.btn_cross');
export const blockYoursTags = document.getElementById('yoursTags');
export const searchBarByAppliances = document.getElementById('appliance-search');
export const blockSubMenuAppliances = document.querySelector(
  '.sub_menu__appliances',
);
export const searchBarByTools = document.getElementById('tools-search');
export const ingredientsTagsListDisplayed = document.querySelectorAll(
  '.sub_menu__ingredients > .tags__list li',
);
export const appliancesTagsListDisplayed = document.querySelectorAll(
  '.sub_menu__appliances > .tags__list li',
);

// tags ingrédients
export const toolsTagsListDisplayed = document.querySelectorAll(
  '.sub_menu__tools > .tags__list li',
);

// Const ARRAY
// tableau des titres
export const arrayTitle = recipes.map((element) => element.name);

// tableau des descriptions
export const arrayDescription = recipes.map((element) => element.description);

// tableau des appareils
export const arrayAppliance = recipes.map((element) => element.appliance);

// tableau des ustensiles
const arrayUstensils = recipes.map((element) => element.ustensils);
export const ustensilsList = [];
arrayUstensils.forEach((element) => {
  ustensilsList.push(...element);
});

export const allIngredients = () => {
  let arrayIngred = [];
  recipes.map((recipe) => {
    recipe.ingredients.map((list) => {
      let newList = inputNormalize(list.ingredient).toLowerCase();
      newList = capitalizeFirstLetter(newList);
      arrayIngred.push(newList);
      return newList;
    });
    return arrayIngred;
  });

  arrayIngred = Array.from(new Set(arrayIngred));

  return arrayIngred;
};

export const allAppliances = () => {
  let applianceList = [];
  recipes.map((recipe) => {
    let newList = inputNormalize(recipe.appliance).toLowerCase();
    newList = capitalizeFirstLetter(newList);
    applianceList.push(newList);
    return applianceList;
  });

  applianceList = Array.from(new Set(applianceList));
  return applianceList;
};

// valeur de l'input barre principale
export const valueInput = searchBar.value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();
