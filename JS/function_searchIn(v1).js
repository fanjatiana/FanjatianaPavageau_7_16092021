import { recipes } from "./data_recipes.js";
import {
  arrayTitle,
  searchBar,
  arrayDescription,
  ingredientsList,
} from "./let-and-const.js";
import { buildArticle } from "./function_buildArticles.js";

// Fonction pour afficher la liste des menus

const searchIn = (event) => {
  event.preventDefault();
  document.getElementById("recipes-list").innerHTML = ""; // initialisation des articles
  recipes.forEach((element) => {
    
    // concaténation des tableaux + suppresssion des doublons
    const arrayStrings = arrayTitle.concat(arrayDescription, ingredientsList);
    const uniqueSet = new Set(arrayStrings);
    const arrayWords = [...uniqueSet];

    // fonction de recherche

   arrayWords.filter((words) => {
      //recherche avec les caractères spéciaux
      const withCharacters = words;
      //recherche sans les caractères spéciaux
      const wordsWithDeletionOfCharacters = words
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

        (words === element.name || words === element.description)
      ) {
        buildArticle(element);
      }
    });
  });
};
