

// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
 const removeThisApplianceTag = () => {
  const tag = document.querySelectorAll(".tag");
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");

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

      console.log(arrayTagsSelected);
      let arrayFilteredTag = [];
      arrayTagsSelected.forEach((tag) => {
       
        const resultFilterByAppliances= recipes.filter((recipe) =>
          recipe.appliance.includes(tag)
        );

        arrayFilteredTag = Array.from(new Set(resultFilterByAppliances));
      
      });
      buildArticle(arrayFilteredTag);
      addAppliancesListOfRecipes(arrayFilteredTag);
      if (arrayTagsSelected.length < 1) {
        document.getElementById("yoursTags").innerHTML = "";
        buildArticle(recipes);
        blockSubMenuAppliances.innerHTML = "";
        addAppliancesListOfRecipes(recipes);
      }
    });
  });
};
