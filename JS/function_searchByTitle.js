import { recipes } from "./data_recipes.js";
import { arrayTitle, searchBar } from "./let-and-const.js";
import {buildArticle} from "./function_buildArticles.js"


// Fonction pour afficher la liste des menus

export const searchByTitle = (event) => {
  event.preventDefault();
  document.getElementById("recipes-list").innerHTML = null; // initialisation des articles
  recipes.forEach((element) => {
   
    arrayTitle.filter((title) => {
    
      //suppression des caractères spéciaux
      const titlesWithDeletionOfCharacters = title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
  
      if (
        (searchBar.value.length >= 3 &&
        titlesWithDeletionOfCharacters
          .toLowerCase()
          .includes(searchBar.value.toLowerCase()) &&
        title === element.name)  
      ) {
        return buildArticle(element);
      }
    });
 
  
  })

};
 