// input : barre de recherche princopale
export const searchBar = document.getElementById('site-search');

// bloc intégral de recherche (div) : ingrédients
export const blockIngredient = document.getElementById('by_ingredients');
// input : barre de recherche par ingrédients
export const searchBarByIngredients = document.getElementById('ingredients-search');
// bloc sous menu contenant la liste des ingrédients
export const blockSubMenuIngredients = document.querySelector(
  '#by_ingredients > .sub_menu__ingredients',
);
// chevron du bloc : ingrédients
export const chevronBlockIngredient = document.querySelector(
  '.chevron__block-ingredient',
);

// input : barre de recherche par appareils
export const searchBarByAppliances = document.getElementById('appliance-search');
// bloc sous menu contenant la liste des appareils
export const blockSubMenuAppliances = document.querySelector(
  '.sub_menu__appliances',
);
// bloc de recherche (div) : appareils
export const blockAppliance = document.getElementById('kitchen-appliance');
// chevron du bloc : appareil
export const chevronBlockAppliance = document.querySelector(
  '.chevron__block-appliance',
);

// input : barre de recherche par ustensiles
export const searchBarByTools = document.getElementById('tools-search');
// bloc sous menu contenant la liste des ustensiles
export const blockSubMenuTools = document.querySelector('.sub_menu__tools');
// bloc de recherche (div) : ustensiles
export const blockTool = document.getElementById('kitchen-tool');
// chevron du bloc : ustensiles
export const chevronBlockTool = document.querySelector('.chevron__block-tool');

// div : YoursTags (là où sont affichés les tags dans le dom après selection)
export const blockYoursTags = document.getElementById('yoursTags');
// main
export const blockRecipesList = document.getElementById('recipes-list');
// liste de boutons de fermeture
export const allBtnCross = document.querySelectorAll('.btn_cross');
