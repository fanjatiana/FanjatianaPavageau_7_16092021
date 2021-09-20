import { recipes } from "./data_recipes.js";
import {
  arrayTitle,
  searchBar,
  arrayDescription,
  ingredientsList,
} from "./let-and-const.js";
import { buildArticle } from "./function_buildArticles.js";

// Fonction pour afficher la liste des menus

export const searchByTitle = (event) => {
  event.preventDefault();
  document.getElementById("recipes-list").innerHTML = null; // initialisation des articles
  recipes.forEach((element) => {
    arrayTitle.filter((title) => {
      //recherche avec les caractères spéciaux
      const withCharacters = title;
      //recherche sans les caractères spéciaux
      const wordsWithDeletionOfCharacters = title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (
        searchBar.value.length >= 3 &&
        (wordsWithDeletionOfCharacters
          .toLowerCase()
          .includes(searchBar.value.toLowerCase()) ||
          withCharacters
            .toLowerCase()
            .includes(searchBar.value.toLowerCase())) &&
        title === element.name
      ) {
        return buildArticle(element);
      }
    });

    arrayDescription.filter((words) => {
      const withCharacters = words;
      const wordsWithDeletionOfAccents = words
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (
        searchBar.value.length >= 3 &&
        (wordsWithDeletionOfAccents
          .toLowerCase()
          .includes(searchBar.value.toLowerCase()) ||
          withCharacters
            .toLowerCase()
            .includes(searchBar.value.toLowerCase())) &&
        words === element.description
      ) {
        return buildArticle(element);
      }
    });

    /*ingredientsList.forEach((ingredients)=>{
 console.log(ingredients)
    })*/
  });
};
