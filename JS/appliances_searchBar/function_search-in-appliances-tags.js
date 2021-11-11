import { blockSubMenuAppliances, searchBarByAppliances } from '../const.js';
import { recipes } from '../data_recipes.js';
import { addTagsList } from '../function_addTagsList.js';
import { applianceNoFind } from '../function_messageError.js';
import { inputNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { addAppliancesList } from './function_add-appliances-list.js';
import { displayAppliancesList } from './function_display-appliances-list.js';
import { filterByAppliancesTags } from './function_filter-appliance.js';

export const searchInAppliancesTags = () => {
  // recherche de tags appareil
  searchBarByAppliances.addEventListener('input', () => {
    const blockAppliance = document.getElementById('kitchen-appliance');
    blockAppliance.style.height = 'auto';

    const inputValueAppliance = searchBarByAppliances.value.toLowerCase();
    inputNormalize(inputValueAppliance);

    const newArray = returnNewRecipesList();
    const allNewAppliances = addAppliancesList(newArray);
    const appliances = displayAppliancesList(recipes);

    if (!appliances.length) {
      return applianceNoFind();
    } if (inputValueAppliance.length < 3) {
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      filterByAppliancesTags();
    } else {
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, appliances);
      filterByAppliancesTags();
      return false;
    }
    return appliances;
  });
};
