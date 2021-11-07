import { addAppliancesList } from "../appliances_searchBar/function_add-appliances-list.js";
import { filterByAppliancesTags } from "../appliances_searchBar/function_filter-appliance.js";
//import { newFilterByAppliancesTags } from "../appliances_searchBar/function_filter-appliances2.js";
import { removeThisApplianceTag } from "../appliances_searchBar/function_remove-this-appliance-tag.js";
import { showRecipesFilteredByApplianceTag } from "../appliances_searchBar/function_show-recipes-filtered-by-appliances-tags.js";
import { blockSubMenuAppliances, blockSubMenuIngredients, blockSubMenuTools } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { getRecipesList } from "../function_display-recipes-filtered.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { addToolsList } from "../tools_searchBar/function_add-tools-list.js";
import { filterByToolsTags } from "../tools_searchBar/function_filter-tools.js";
//import { newFilterByToolsTags } from "../tools_searchBar/function_filter-tools2.js";
import { removeThisToolsTag } from "../tools_searchBar/function_remove-this-tool-tag.js";
import { showRecipesFilteredByTools } from "../tools_searchBar/function_show-recipes-filtered-by-tools.js";

import { selectThisTag } from "./function _select-this-ingredient-tag.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
//import { newFilterByIngredientsTags } from "./function_filter2.js";
import { removeThisTag } from "./function_remove-this-ingredient-Tag.js";
import { showRecipesFiltered } from "./function_show-recipes-filtered-by-ingredients-tags.js";


export const filterByIngredientsTags = () => {
  let ingredientsTagsListDisplayed = document.querySelectorAll(
    ".sub_menu__ingredients > .tags__list li"
  );


  ingredientsTagsListDisplayed.forEach((tags) => {
    tags.addEventListener("click", (e) => {
     
      // tableau des recettes (recipes ou mainsearch)
      const dataFiltered =getRecipesList();
      console.log(dataFiltered) //

      // ajout du tag sélectionné dans le dom
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant
      let tags = [];
      tags.push(thisTag)
      
      selectThisTag(tags);
    
      // tableau des tags selectionnés
      const allTags = getAllTagsSelected();
      console.log(allTags)


      // fonction d'affichage de la liste des recettes en liens avec le tag selectionné
      showRecipesFiltered(allTags, dataFiltered);
      
      
      
      // nouveau tableau de recettes
      const newArrayRecipes = returnNewRecipesList(); // = MainSearch
   

      // affichage des tags en liens avec les recettes
      const allNewIngredients = addIngredientsList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewAppliances = addAppliancesList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewTools = addToolsList(newArrayRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = "";
      addTagsList(blockSubMenuTools, allNewTools);
      
      filterByIngredientsTags();
     

      let arrayTagsSelected = getAllTagsSelected();
   
    
      removeThisTag(arrayTagsSelected,newArrayRecipes)
    
  })
  
      //filterByAppliancesTags();
      //filterByToolsTags();
     
  })
}
