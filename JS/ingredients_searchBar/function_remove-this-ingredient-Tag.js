import { blockSubMenuIngredients, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";

import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";

import { searchIn } from "../main_searchBar/function_search-in.js";
import { selectThisTag } from "./function _select-this-ingredient-tag.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
import { newArrayAfterdeleteThisTag } from "./function_delete-this-tag.js";
import { filterByIngredientsTags } from "./function_filter.js";
import { searchIngredientsTags } from "./function_searchIngredientsTags.js";
import { showRecipesFiltered } from "./function_show-recipes-filtered-by-ingredients-tags.js";
// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = (allTagsSelected,listRecipes) => {
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
      let tagList = newArrayAfterdeleteThisTag(allTagsSelected, thisTag, recipes);
      console.log(tagList);

      

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
          recipe.ingredients.map((list) => list.ingredient).includes(tag)
        );

        let arrayFilteredTag = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients
        );

        arrayFilteredTag = Array.from(new Set(arrayFilteredTag));
        arrayFilteredTag.sort();
        listRecipes = arrayFilteredTag;
      });

    

      // on affiche la liste des recettes liée aux tags
      showRecipesFiltered(tagList, listRecipes);

      // fonction de suppression sur la nouvelle liste de tags
      removeThisTag(tagList, listRecipes);
      const allNewIngredients = addIngredientsList(listRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      filterByIngredientsTags();

      // console.log(allTagsSelected.length)

      if (tagList.length === 0 && valueInput !== "") {
        let mainsearch = searchIn();
        const allIngredients = addIngredientsList(mainsearch);
        blockSubMenuIngredients.innerHTML = "";
        addTagsList(blockSubMenuIngredients, allIngredients);
        buildArticle(mainsearch);
        filterByIngredientsTags();
      } else if (tagList.length === 0 && valueInput == "") {
        const allIngredients = addIngredientsList(recipes);
        blockSubMenuIngredients.innerHTML = "";
        addTagsList(blockSubMenuIngredients, allIngredients);
        buildArticle(recipes);
        filterByIngredientsTags();
      }
    });
  });
};
