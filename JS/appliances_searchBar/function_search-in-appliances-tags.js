import { allAppliances } from '../array.js';
import { blockSubMenuAppliances, searchBarByAppliances } from '../const.js';
import { recipes } from '../data_recipes.js';
import { addTagsList } from '../function_addTagsList.js';
import { applianceNoFind } from '../function_messageError.js';
import { wordNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { filterByAppliancesTags } from './function_filter-appliance.js';

export const searchInAppliancesTags = () => {
  // recherche de tags appareil
  searchBarByAppliances.addEventListener('input', () => {
    const blockAppliance = document.getElementById('kitchen-appliance');
    blockAppliance.style.height = 'auto';

    const inputValueAppliance = searchBarByAppliances.value;
    wordNormalize(inputValueAppliance);

    const newArray = returnNewRecipesList();
    const allNewAppliances = allAppliances(newArray);
    const appliancesListFromRecipes = allAppliances(recipes);

    const totalAppliances = appliancesListFromRecipes.filter((element) => wordNormalize(element).includes(inputValueAppliance));

    if (!totalAppliances.length) {
      return applianceNoFind();
    } if (inputValueAppliance.length < 3) {
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      filterByAppliancesTags();
    } else {
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, totalAppliances);
      filterByAppliancesTags();
      return false;
    }
    return totalAppliances;
  });
};
