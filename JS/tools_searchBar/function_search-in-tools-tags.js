import { searchBarByTools, blockSubMenuTools } from '../const.js';
import { recipes } from '../data_recipes.js';
import { addTagsList } from '../function_addTagsList.js';
import { toolNoFind } from '../function_messageError.js';
import { inputNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { addToolsList } from './function_add-tools-list.js';
import { displayToolsList } from './function_display-tools-list.js';
import { filterByToolsTags } from './function_filter-tools.js';

// recherche de tags ustensiles

export const searchInToolsTags = () => {
  searchBarByTools.addEventListener('input', () => {
    const valueInputTool = searchBarByTools.value.toLowerCase();
    inputNormalize(valueInputTool);
    const newArray = returnNewRecipesList();
    const allNewTools = addToolsList(newArray);
    const tools = displayToolsList(recipes);

    if (!tools.length) {
      return toolNoFind();
    } if (valueInputTool.length < 3) {
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);
      filterByToolsTags();
    } else {
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, tools);
      filterByToolsTags();
    }

    return allNewTools;
  });
};
