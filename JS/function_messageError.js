import { blockSubMenuIngredients } from './const.js';

// fonctions d'affichage des messages d'erreur

// recettes non trouvées
export const RecipesNoFind = () => {
  document.getElementById('recipes-list').innerHTML = '';
  document.getElementById(
    'recipes-list',
  ).innerHTML += '<p> aucune recette ne correspond à votre critère... vous pouvezchercher tarte aux pommes,poisson, etc</p>';
};

// tag ingrédient non trouvé
export const tagNoFind = () => {
  blockSubMenuIngredients.innerHTML = '';
  blockSubMenuIngredients.innerHTML += '<p> aucun ingrédient ne correspond à votre critère... vous pouvez chercher sucre,beurre, etc</p>';
};

// tag appareil non trouvé
export const applianceNoFind = () => {
  document.querySelector('.sub_menu__appliances').innerHTML = '';
  document.querySelector(
    '.sub_menu__appliances',
  ).innerHTML += '<p> aucun appareil ne correspond à votre critère... vous pouvez chercher blender , poêle, etc</p>';
};

// tag ustensile non trouvé
export const toolNoFind = () => {
  document.querySelector('.sub_menu__tools').innerHTML = '';
  document.querySelector(
    '.sub_menu__tools',
  ).innerHTML += '<p> aucun ustensile ne correspond à votre critère... vous pouvez chercher couteau, verres, etc</p>';
};
