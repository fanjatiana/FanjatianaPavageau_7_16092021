

 const showAllRecipesIncludesToolsTags = () => {
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau de recupération de la liste des tags selectionnés
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });

  // afficher la liste des articles qui ont dans le nom , la description, les ingredients,  le tag selectionné

  retrieveTags.forEach((tag) => {
    const resultFilterByTools = recipes.filter((recipe) =>
      recipe.ustensils.includes(tag)
    );
 

    const newArrayIFilteredTag = Array.from(new Set(resultFilterByTools));

    if (tag.length === 1) {
      blockSubMenuTools.innerHTML = "";
      addToolsListOfRecipes(newArrayIFilteredTag);
      buildArticle(newArrayIFilteredTag);
    } else if (tag.length > 1) {
      blockSubMenuTools.innerHTML = "";
      addToolsListOfRecipes(newArrayIFilteredTag);
      showRecipesFilteredByToolsAgain();
    } else {
      blockSubMenuTools.innerHTML = "";
      addToolsListOfRecipes(recipes);
      buildArticle(recipes);
    }
  });
};
