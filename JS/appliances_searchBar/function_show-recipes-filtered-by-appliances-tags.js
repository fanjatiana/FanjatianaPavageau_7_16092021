

 const showRecipesFilteredByApplianceTag = () => {
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
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau de recupération de la liste des tags selectionnés
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });

  let arrayFilteredTag = [];
  retrieveTags.forEach((tag) => {
    /*const resultFilterByDescription = dataFiltered.filter((recipe) =>
      recipe.description.includes(tag)
    );

    const resultFilterByName = dataFiltered.filter((recipe) =>
      recipe.name.includes(tag)
    );*/
    const resultFilterByAppliances = dataFiltered.filter((recipe) =>
      recipe.appliance.includes(tag)
    );

    arrayFilteredTag =
      /*resultFilterByDescription.concat(
      resultFilterByName,*/
      resultFilterByAppliances;

    const newArrayIFilteredTag = Array.from(new Set(arrayFilteredTag));
    buildArticle(newArrayIFilteredTag);
    addAppliancesListOfRecipes(newArrayIFilteredTag);

    if (!newArrayIFilteredTag.length) {
      RecipesNoFind();
    }
  });
};
