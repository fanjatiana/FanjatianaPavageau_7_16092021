const tag = document.querySelectorAll(".tag");

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
      arrayTagsSelected.pop(); // suppression du tag du tableau
    

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

        arrayFilteredTag = Array.from(new Set(arrayFilteredTag));
        arrayFilteredTag.sort();
      });
   
    
      buildArticle(arrayFilteredTag)
      let newListOfTags = addIngredientsList(arrayFilteredTag);
      blockSubMenuIngredients.innerHTML ="";
      addTagsList(blockSubMenuIngredients, newListOfTags)
      filterByIngredientsTags(arrayFilteredTag)
      if (arrayTagsSelected.length < 1) {
        buildArticle(array)
        let newListOfTags = addIngredientsList(array);
        blockSubMenuIngredients.innerHTML ="";
        addTagsList(blockSubMenuIngredients, newListOfTags);
        filterByIngredientsTags(array)
      } 
    });
    
  });