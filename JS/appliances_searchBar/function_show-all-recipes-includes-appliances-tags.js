

const showAllRecipesIncludesApplianceTag = () => {
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

  // tableau de recupération de la liste des tags selectionnés
  const retrieveTags = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;

    retrieveTags.push(tagName);
  });

 
  retrieveTags.forEach((tag) => {
    let resultFilterByAppliances = recipes.filter((recipe) =>
      recipe.appliance.includes(tag)
    );

    const array = Array.from(new Set(resultFilterByAppliances));


    if (tag.length === 1) {
      buildArticle(array);
     blockSubMenuAppliances.innerHTML = "";
      addAppliancesListOfRecipes(array);
    } else if (tag.length > 1) {
      showRecipesFilteredByApplianceTag();
      addAppliancesListOfRecipes(array);
    } else {
      buildArticle(recipes);
      blockSubMenuAppliances.innerHTML = "";
      addAppliancesListOfRecipes(recipes);
    }
  });
};
