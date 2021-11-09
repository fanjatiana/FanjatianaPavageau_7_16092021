import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBar,
} from "./const.js";
import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";

import { addTagsList } from "./function_addTagsList.js";
import { searchIn } from "./main_searchBar/function_search-in.js";
import { addAppliancesList } from "./appliances_searchBar/function_add-appliances-list.js";
import { filterByAppliancesTags } from "./appliances_searchBar/function_filter-appliance.js";
import { addIngredientsList } from "./ingredients_searchBar/function_add-ingredients-list.js";
import { newArrayAfterdeleteThisTag } from "./function_delete-this-tag.js";
import { filterByIngredientsTags } from "./ingredients_searchBar/function_filter.js";
import { showRecipesFiltered } from "./function_show-recipes-filtered-by-tags.js";
import { selectThisTag } from "./function _select-this-tag.js";
import { filterByToolsTags } from "./tools_searchBar/function_filter-tools.js";
import { addToolsList } from "./tools_searchBar/function_add-tools-list.js";

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = (allTagsSelected, listRecipes) => {
  const buttonsTags = document.querySelectorAll(".tag > img");
  const divYoursTags = document.getElementById("yoursTags");

  let valueInput = searchBar.value;
  console.log(valueInput);

  // bouton close
  buttonsTags.forEach((button) => {
    button.addEventListener("click", () => {
      // on recupère la valeur de tag correspondant au bouton
      let thisTag = button.previousElementSibling.innerHTML;
      // on cré un nouvel array apres suppression du tag
      let tagList = newArrayAfterdeleteThisTag(
        allTagsSelected,
        thisTag,
        recipes
      );

      // on vide la liste de tag dans le dom
      divYoursTags.innerHTML = "";

      // on affiche la nouvelle liste de tag
      selectThisTag(tagList);

      // filtre les recettes qui correspondent au nouvel array de tags
      listRecipes = [];
      tagList.forEach((tag) => {
        const resultFilterByDescription = recipes.filter((recipe) =>
          recipe.description.includes(tag)
        );

        const resultFilterByName = recipes.filter((recipe) =>
          recipe.name.includes(tag)
        );
        const resultFilterByIngredients = recipes.filter((recipe) =>
        recipe.ingredients.map((list) =>
        list.ingredient
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""))
          .includes(
            tag
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
        );
        const resultFilterByAppliances = recipes.filter((recipe) =>
        recipe.appliance.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(tag.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")))
        ;
        const resultFilterByTools = recipes.filter((recipe) =>
        recipe.ustensils.map((list) =>
        list.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")).includes(tag.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""))
        );

        let arrayFilteredTag = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients,
          resultFilterByAppliances,
          resultFilterByTools
        );

        arrayFilteredTag = Array.from(new Set(arrayFilteredTag));
        arrayFilteredTag.sort();
        listRecipes=arrayFilteredTag;
        console.log(listRecipes)
      });

 

      // on affiche la liste des recettes liée aux tags
      showRecipesFiltered(tagList, listRecipes);

      // fonction de suppression sur la nouvelle liste de tags
      removeThisTag(tagList, listRecipes);

      const allNewIngredients = addIngredientsList(listRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);

      const allNewAppliances = addAppliancesList(listRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);

      const allNewTools = addToolsList(listRecipes);
      blockSubMenuTools.innerHTML = "";
      addTagsList(blockSubMenuTools, allNewTools);

   
      filterByIngredientsTags();
      filterByAppliancesTags();
      filterByToolsTags();

   

      if (tagList.length === 0 && valueInput !== "") {
        let mainsearch = searchIn();

        const allIngredients = addIngredientsList(mainsearch);
        blockSubMenuIngredients.innerHTML = "";
        addTagsList(blockSubMenuIngredients, allIngredients);

        const allNewAppliances = addAppliancesList(mainsearch); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        blockSubMenuAppliances.innerHTML = "";
        addTagsList(blockSubMenuAppliances, allNewAppliances);

        const allNewTools = addToolsList(mainsearch);
        blockSubMenuTools.innerHTML = "";
        addTagsList(blockSubMenuTools, allNewTools);

        buildArticle(mainsearch);
        filterByIngredientsTags();
        filterByAppliancesTags();
        filterByToolsTags();
      } else if (tagList.length === 0 && valueInput == "") {
        const allIngredients = addIngredientsList(recipes);
        blockSubMenuIngredients.innerHTML = "";
        addTagsList(blockSubMenuIngredients, allIngredients);

        const allNewAppliances = addAppliancesList(recipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
        blockSubMenuAppliances.innerHTML = "";
        addTagsList(blockSubMenuAppliances, allNewAppliances);

        const allNewTools = addToolsList(recipes);
        blockSubMenuTools.innerHTML = "";
        addTagsList(blockSubMenuTools, allNewTools);

        buildArticle(recipes);
        filterByIngredientsTags();
        filterByAppliancesTags();
        filterByToolsTags();
      }
    });
  });
};
