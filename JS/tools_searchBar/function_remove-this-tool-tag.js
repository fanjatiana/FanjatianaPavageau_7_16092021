

const removeThisToolsTag = () => {
  const tag = document.querySelectorAll(".tag");
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  const listRecipes = document.querySelectorAll(".info_recipe > h3");

  const articles = [];

  listRecipes.forEach((e) => {
    const recipeTitle = e.innerHTML;
    articles.push(recipeTitle);
  });

  const dataFiltered = [];

  articles.forEach((title) => {
    recipes.filter((a) => {
      if (a.name === title) {
        dataFiltered.push(a);
      }
    });
  });
console.log(dataFiltered)

  // tableau des tags ajoutés
  const arrayTagsSelected = [];
  allDivTagDisplayed.forEach((element) => {
    arrayTagsSelected.push(element.textContent);
  });

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop();

      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
        const resultFilterByTools = recipes.filter((recipe) =>
          recipe.ustensils.includes(tag)
        );

        arrayFilteredTag = Array.from(new Set(resultFilterByTools));
      });

      buildArticle(arrayFilteredTag);
      addToolsListOfRecipes(arrayFilteredTag);
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(dataFiltered);
        blockSubMenuTools.innerHTML = "";
        addToolsListOfRecipes(dataFiltered);
      }
    });
  });
};
