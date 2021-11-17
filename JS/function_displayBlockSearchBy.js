import {
  blockSubMenuIngredients,
  blockSubMenuAppliances,
  blockSubMenuTools,
  searchBarByIngredients,
  searchBarByAppliances,
  searchBarByTools,
  blockIngredient,
  blockAppliance,
  blockTool,
  chevronBlockAppliance,
  chevronBlockIngredient,
  chevronBlockTool,
} from './const.js';

/* fonctions pour afficher et cacher les blocs de recherche (display none <=> display block)
et gestion de style CSS */


// bloc de recherche par : ingredients
export const displayBlockSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = 'block';
 // blockIngredient.style.width = '50%';
  //searchBarByIngredients.style.height = '80px';
  chevronBlockIngredient.classList.add('rotate');
 /* const ingredientsTagsList = document.querySelector('.sub_menu__ingredients > .tags__list');
  if (searchBarByIngredients.value === '') {
    ingredientsTagsList.classList.add('max-height-ingredientsList');
  } else {
    ingredientsTagsList.classList.add('min-height');
  }*/
};
export const displayNoneSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = 'none';
  //blockIngredient.style.width = '20%';
  //blockIngredient.style.height = '100px';
  //searchBarByIngredients.style.height = '100px';
  chevronBlockIngredient.classList.remove('rotate');
};

// bloc de recherche par : appareils
export const displayBlockSearchByAppliances = () => {
  blockSubMenuAppliances.style.display = 'block';
  chevronBlockAppliance.classList.add('rotate');
  /*blockAppliance.style.width = '20%';
  searchBarByAppliances.style.height = '80px';
  const appliancesTagsList = document.querySelector('.sub_menu__appliances > .tags__list');
  if (searchBarByAppliances.value === '') {
    appliancesTagsList.classList.add('max-height-appliancesList');
  } else {
    appliancesTagsList.classList.add('min-height');
  }*/
};
export const displayNoneSearchByAppliances = () => {
  blockSubMenuAppliances.style.display = 'none';
  /*blockAppliance.style.width = '20%';
  searchBarByAppliances.style.height = '100px';*/
  chevronBlockAppliance.classList.remove('rotate');
};

// bloc de recherche par : ustensiles
export const displayBlockSearchByTools = () => {
  blockSubMenuTools.style.display = 'block';
  chevronBlockTool.classList.add('rotate');
 /* blockTool.style.width = '40%';
  searchBarByTools.style.height = '80px';
  const toolsTagsList = document.querySelector('.sub_menu__tools > .tags__list');
  if (searchBarByTools.value === '') {
    toolsTagsList.classList.add('max-height-toolsList');
  } else {
    toolsTagsList.classList.add('min-height');
  }*/
};
export const displayNoneSearchByTools = () => {
  blockSubMenuTools.style.display = 'none';
  chevronBlockTool.classList.remove('rotate');
 /* blockTool.style.width = '20%';
  searchBarByTools.style.height = '100px';*/
};
