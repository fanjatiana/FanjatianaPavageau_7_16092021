import { searchBarByIngredients, blockSubMenuIngredients } from "../const.js";
import { recipes } from "../data_recipes.js";
import { addTagsList } from "../function_addTagsList.js";
import { tagNoFind } from "../function_messageError.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
import { displayIngredientsList } from "./function_display-ingredients-list.js";
import { filterByIngredientsTags } from "./function_filter.js";


// recherche de tags ingrédients

export const searchInIngredientsTags = () =>{
    searchBarByIngredients.addEventListener("input", () => {
        let inputValue = searchBarByIngredients.value
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
        const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        const ingredients = displayIngredientsList(recipes);
      
        console.log(ingredients);
        if (!ingredients.length) {
          return tagNoFind();
        } else if (inputValue.length < 3) {
          blockSubMenuIngredients.innerHTML = "";
          addTagsList(blockSubMenuIngredients, allNewIngredients);
          filterByIngredientsTags();
        } else {
          blockSubMenuIngredients.innerHTML = "";
          addTagsList(blockSubMenuIngredients, ingredients);
          filterByIngredientsTags();
        }
      });
      
}
