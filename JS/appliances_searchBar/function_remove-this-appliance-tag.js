import { blockSubMenuAppliances } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { searchInAppliances } from "../main_searchBar/function_search-appliances-in-recipes.js";
import { searchIn } from "../main_searchBar/function_search-in.js";
import { addAppliancesList } from "./function_add-appliances-list.js";
import { filterByAppliancesTags } from "./function_filter-appliance.js";
import { searchAppliancesTags } from "./function_searchAppliancesTags.js";
// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisApplianceTag = (arrayTagsSelected, array) => {
  const tag = document.querySelectorAll(".tag");


  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();

      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
        const resultFilterByAppliances = array.filter((recipe) =>
          recipe.appliance.includes(tag)
        );

        arrayFilteredTag = Array.from(new Set(resultFilterByAppliances));
      });
      buildArticle(arrayFilteredTag);
      const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
      const allNewIngredients = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewIngredients);
      filterByAppliancesTags();
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        const array =searchIn();
        console.log(array)
        buildArticle(array);
        const newArray = returnNewRecipesList(); // retourne la liste des recettes filtrée depuis la barre de recherche principale
        const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        blockSubMenuAppliances.innerHTML = "";
        addTagsList(blockSubMenuAppliances, allNewAppliances);
        filterByAppliancesTags();
        
      }
    });
  });
};
