import { capitalizeFirstLetter } from './function_capitalizer-first-letter.js';
import { wordNormalize } from './function_normalize.js';

// liste des ingrédients
export const allIngredients = (array) => {
  let arrayIngred = [];
  array.map((recipe) => {
    recipe.ingredients.map((list) => {
      let newList = wordNormalize(list.ingredient);
      newList = capitalizeFirstLetter(newList);
      arrayIngred.push(newList);
      return newList;
    });
    return arrayIngred;
  });

  arrayIngred = Array.from(new Set(arrayIngred));
  arrayIngred.sort();

  return arrayIngred;
};

// liste des appareils
export const allAppliances = (array) => {
  let applianceList = [];
  array.map((recipe) => {
    let newList = wordNormalize(recipe.appliance);
    newList = capitalizeFirstLetter(newList);
    applianceList.push(newList);
    return applianceList;
  });

  applianceList = Array.from(new Set(applianceList));
  applianceList.sort();
  return applianceList;
};

// liste des ustensiles
export const allTools = (array) => {
  let toolsList = [];
  array.map((recipe) => {
    recipe.ustensils.map((tool) => {
      let newList = wordNormalize(tool);
      newList = capitalizeFirstLetter(newList);
      toolsList.push(newList);
      return newList;
    });
    return toolsList;
  });

  toolsList = Array.from(new Set(toolsList));
  toolsList.sort();

  return toolsList;
};
