import {
  blockSubMenuIngredients,
  blockSubMenuAppliances,
  blockSubMenuTools,
  blockIngredient,
  chevronBlockAppliance,
  chevronBlockIngredient,
  chevronBlockTool,
} from './const.js';

/* fonctions pour afficher et cacher les blocs de recherche (display none <=> display block)
et gestion de style CSS */
const divMenuIngredient = document.querySelector('.ingredients');

// bloc de recherche par : ingredients
export const displayBlockSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = 'block';
  divMenuIngredient.style.width = '100%';
  chevronBlockIngredient.classList.add('rotate');
  blockIngredient.classList.add('max-height-ingredientsList');
};
export const displayNoneSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = 'none';
  divMenuIngredient.style.width = '100%';
  chevronBlockIngredient.classList.remove('rotate');
  blockIngredient.classList.remove('max-height-ingredientsList');
};

// bloc de recherche par : appareils
export const displayBlockSearchByAppliances = () => {
  blockSubMenuAppliances.style.display = 'block';
  chevronBlockAppliance.classList.add('rotate');
};
export const displayNoneSearchByAppliances = () => {
  blockSubMenuAppliances.style.display = 'none';
  chevronBlockAppliance.classList.remove('rotate');
};

// bloc de recherche par : ustensiles
export const displayBlockSearchByTools = () => {
  blockSubMenuTools.style.display = 'block';
  chevronBlockTool.classList.add('rotate');
  const toolsTagsList = document.querySelector(
    '.sub_menu__tools > .tags__list',
  );
  toolsTagsList.classList.add('max-width');
};
export const displayNoneSearchByTools = () => {
  blockSubMenuTools.style.display = 'none';
  chevronBlockTool.classList.remove('rotate');
};
