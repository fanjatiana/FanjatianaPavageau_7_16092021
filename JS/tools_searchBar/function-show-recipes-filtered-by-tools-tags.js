


 const  showRecipesFilteredByToolsAgain = () =>{

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

  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau de recupération de la liste des tags selectionnés
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });

  let arrayFilteredTag = [];
  retrieveTags.forEach((tag) => {
    const resultFilterByTools = dataFiltered.filter((recipe) =>
        recipe.ustensils.includes(tag)
      );

    arrayFilteredTag = resultFilterByTools;
    
    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
    buildArticle(newArrayIFilteredTag);
    addToolsListOfRecipes(newArrayIFilteredTag);

    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }
  });

}