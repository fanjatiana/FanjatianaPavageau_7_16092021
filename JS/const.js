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

export const blockIngredient = document.getElementById('by_ingredients');
export const blockAppliance = document.getElementById('kitchen-appliance');
export const blockTool = document.getElementById('kitchen-tool');
export const chevronBlockIngredient = document.querySelector(
  '.chevron__block-ingredient',
);
export const chevronBlockAppliance = document.querySelector(
  '.chevron__block-appliance',
);

export const chevronBlockTool = document.querySelector('.chevron__block-tool');

// Const ARRAY
/* tableau des titres
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
*/
