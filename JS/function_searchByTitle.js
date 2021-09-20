import { arrayTitle, searchBar } from "./let-and-const.js";

console.log(searchBar);

// Fonction pour afficher la liste des menus

export const searchByTitle = (event) => {
  event.preventDefault();
  document.getElementById("recipes-list").innerHTML = null; // initialisation des articles
  arrayTitle.filter((title) => {
    
    //suppression des caractères spéciaux
    const titlesWithDeletionOfCharacters = title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (
      searchBar.value.length >= 3 &&
      titlesWithDeletionOfCharacters
        .toLowerCase()
        .includes(searchBar.value.toLowerCase())
    ) {
      return (document.getElementById("recipes-list").innerHTML += `<article>
                    <div id="img_recipe">
                        <img>
                    </div>
                    <div id="recipe">
                        <div class ="info_recipe">
                            <h3>${title}</h3>
                            <p></p>
                        </div>
                        <div class="instructions_recipe">
                            <ul></ul>
                            <p></p>
                        </div>
                    </div>
                </article>`);
    }
  });
};
