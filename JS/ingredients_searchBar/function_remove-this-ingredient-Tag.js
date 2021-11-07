import { blockSubMenuIngredients, searchBar } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { addTagsList } from "../function_addTagsList.js";
import { buildArticle } from "../function_buildArticles.js";
import { returnNewRecipesList } from "../function_return-new-recipes-list.js";
import { searchIn } from "../main_searchBar/function_search-in.js";
import { selectThisTag } from "./function _select-this-ingredient-tag.js";
import { addIngredientsList } from "./function_add-ingredients-list.js";
import { filterByIngredientsTags } from "./function_filter.js";
import { searchIngredientsTags } from "./function_searchIngredientsTags.js";
import { showRecipesFiltered } from "./function_show-recipes-filtered-by-ingredients-tags.js";
// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = (allTagsSelected,recipesList) => {
  const buttonsTags = document.querySelectorAll(".tag > img");
  let tagsListInDom = document.querySelectorAll(".tag");
  const divYoursTags = document.getElementById("yoursTags");

  console.log(allTagsSelected);
  console.log(recipesList)
  //console.log(tagsList)
  let valueInput = searchBar.value;
  console.log(valueInput)
 
// bouton close
  buttonsTags.forEach(button => {
  
    button.addEventListener("click", (b) => {
      console.log(b.currentTarget);

      //on vide la div yoursTags
      divYoursTags.innerHTML = ""
     allTagsSelected.pop();
     
     // on ajout la nouvelle liste de tag
     selectThisTag(allTagsSelected);

     // filtre sur la nouvelle liste de tags
     let listRecipes = []
     allTagsSelected.forEach((tag)=>{
      const resultFilterByDescription = recipes.filter((recipe) =>
      recipe.description.includes(tag)
    );

    const resultFilterByName = recipes.filter((recipe) =>
      recipe.name.includes(tag)
    );
    const resultFilterByIngredients = recipes.filter((recipe) =>
      recipe.ingredients.map((list) => list.ingredient).includes(tag)
    );

   let  arrayFilteredTag = resultFilterByDescription.concat(
      resultFilterByName,
      resultFilterByIngredients
    );

    arrayFilteredTag = Array.from(new Set(arrayFilteredTag));
    arrayFilteredTag.sort();
    listRecipes = arrayFilteredTag
    console.log(arrayFilteredTag)
     })

     // on affiche la liste des recettes liée aux tags
     showRecipesFiltered(allTagsSelected, listRecipes);

     // fonction de suppression sur les tags
     removeThisTag(allTagsSelected,listRecipes);
     const allNewIngredients = addIngredientsList(listRecipes); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
     blockSubMenuIngredients.innerHTML = "";
    addTagsList(blockSubMenuIngredients, allNewIngredients);
     filterByIngredientsTags()

    console.log(allTagsSelected.length)

     if(allTagsSelected.length ===0 && valueInput !== "") {
     let mainsearch = searchIn()
      const allIngredients = addIngredientsList(mainsearch);
      blockSubMenuIngredients.innerHTML = ""
      addTagsList(blockSubMenuIngredients, allIngredients);
      buildArticle(mainsearch);
      filterByIngredientsTags()
    }else if (allTagsSelected.length ===0 && valueInput == ""){
      const allIngredients = addIngredientsList(recipes);
      blockSubMenuIngredients.innerHTML = ""
      addTagsList(blockSubMenuIngredients, allIngredients);
      buildArticle(recipes);
      filterByIngredientsTags()
    }

    
     
   
    })

  });

 

  
};


