import { allTools } from '../array.js';
import { searchBarByTools, blockSubMenuTools } from '../const.js';
import { recipes } from '../data_recipes.js';
import { addTagsList } from '../function_addTagsList.js';
import { toolNoFind } from '../function_messageError.js';
import { wordNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { filterByToolsTags } from './function_filter-tools.js';

// recherche de tags ustensiles

export const searchInToolsTags = () => {
  searchBarByTools.addEventListener('input', () => {
    const valueInputTool = searchBarByTools.value;
    wordNormalize(valueInputTool);
    const newArray = returnNewRecipesList();
    const allNewTools = allTools(newArray);
    const toolsListFromRecipes = allTools(recipes);

    const resultFilterByTools = toolsListFromRecipes.filter((recipe) => wordNormalize(recipe).includes(valueInputTool));
    if (!resultFilterByTools.length) {
      return toolNoFind();
    } if (valueInputTool.length < 3) {
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);
      filterByToolsTags();
    } else {
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, resultFilterByTools);
      filterByToolsTags();
    }

    return allNewTools;
  });
};
