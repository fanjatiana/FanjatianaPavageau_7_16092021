ingredientsTagsListDisplayed.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      e.preventDefault()
      let arrayTags = []
      selectThisTag(e);
      let allDivTagDisplayed = document.querySelectorAll(".tag > p");
      allDivTagDisplayed.forEach((p)=>{
        arrayTags.push(p.innerHTML)
      })
     
      const dataFiltered = getRecipesList();
      showRecipesFiltered(arrayTags, dataFiltered)
      
      const newArray = returnNewRecipesList()
      
      const allNewIngredients = addIngredientsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewAppliances = addAppliancesList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      const allNewTools = addToolsList(newArray); // tableau de la liste des ingrédients en fonction de la liste des recettes affichées
      blockSubMenuIngredients.innerHTML = "";
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = "";
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = "";
        addTagsList(blockSubMenuTools, allNewTools);
      

        filterByIngredientsTags(newArray)
      filterByAppliancesTags();
      filterByToolsTags();
    })
  }) 