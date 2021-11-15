import {
  blockRecipesList, blockSubMenuAppliances, blockSubMenuIngredients, blockSubMenuTools,
} from './const.js';

// fonctions d'affichage des messages d'erreur

// "recettes non trouvées"
export const RecipesNoFind = () => {
  blockRecipesList.innerHTML = '';
  blockRecipesList.innerHTML += '<p> Aucune recette ne correspond à votre critère... vous pouvez chercher tarte aux pommes, poisson, etc...</p>';
};

// "tag ingrédient non trouvé"
export const tagNoFind = () => {
  blockSubMenuIngredients.innerHTML = '';
  blockSubMenuIngredients.innerHTML += '<p> Aucun ingrédient ne correspond à votre critère... vous pouvez chercher sucre, beurre, etc...</p>';
};

// "tag appareil non trouvé"
export const applianceNoFind = () => {
  blockSubMenuAppliances.innerHTML = '';
  blockSubMenuAppliances.innerHTML += '<p> Aucun appareil ne correspond à votre critère... vous pouvez chercher blender , poêle, etc...</p>';
};

// "tag ustensile non trouvé"
export const toolNoFind = () => {
  blockSubMenuTools.innerHTML = '';
  blockSubMenuTools.innerHTML += '<p> Aucun ustensile ne correspond à votre critère... vous pouvez chercher couteau, verres, etc...</p>';
};
