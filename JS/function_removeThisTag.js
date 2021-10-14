import { recipes } from "./data_recipes.js";
import { buildArticle } from "./function_buildArticles.js";

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = () => {
  const tag = document.querySelectorAll(".tag");
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau des tags ajoutés
  const arrayTagsSelected = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    arrayTagsSelected.push(tagName);
  });
  console.log(arrayTagsSelected);

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();
      console.log(arrayTagsSelected);

      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
        const resultFilterByDescription = recipes.filter((recipe) =>
          recipe.description.includes(tag)
        );

        const resultFilterByName = recipes.filter((recipe) =>
          recipe.name.includes(tag)
        );
        const resultFilterByIngredients = recipes.filter((recipe) =>
          recipe.ingredients.map((list) => list.ingredient).includes(tag)
        );

        arrayFilteredTag = resultFilterByDescription.concat(
          resultFilterByName,
          resultFilterByIngredients
        );
        console.log(arrayFilteredTag);

        const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));

        buildArticle(newArrayIFilteredTag);
      
      });

      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
      }
    });
  
  });
};
