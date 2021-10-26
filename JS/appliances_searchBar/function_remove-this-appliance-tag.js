import { blockSubMenuAppliances } from "../const.js";
import { recipes } from "../data_recipes.js";
import { getAllTagsSelected } from "../functions_get-all-tags-selected.js";
import { buildArticle } from "../function_buildArticles.js";
import { addAppliancesList } from "./function_add-appliances-list.js";
// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
 export const removeThisApplianceTag = () => {
  const tag = document.querySelectorAll(".tag");
  const arrayTagsSelected = getAllTagsSelected();

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();

     
      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
       
        const resultFilterByAppliances= recipes.filter((recipe) =>
          recipe.appliance.includes(tag)
        );

        arrayFilteredTag = Array.from(new Set(resultFilterByAppliances));
      
      });
      buildArticle(arrayFilteredTag);
      addAppliancesList(arrayFilteredTag);
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
      addAppliancesList(recipes);
      }
    });
  });
};
