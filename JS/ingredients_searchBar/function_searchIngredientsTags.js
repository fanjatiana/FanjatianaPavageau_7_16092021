


 const searchIngredientsTags = () => {
  // valeur de l'input
  let valueInput = searchBarByIngredients.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // filtre sur les ingrédients
  const array = [];
  recipes.filter((recipe) =>
    recipe.ingredients.map((list) => array.push(list.ingredient))
  );

  const newArray = Array.from(new Set(array));
  newArray.sort();

  const totalIngredients = newArray.filter((element) =>
    element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInput)
  );
  const source = document.querySelector(".sub_menu");

  const ulTag = `<ul id="tags__list"></ul>`;
  const allLiTags = document.querySelectorAll("#tags__list > li");

  if (!totalIngredients.length) {
    return tagNoFind();
  } else if (valueInput.length < 3) {
    blockSubMenuTools.innerHTML = "";
    blockSubMenuIngredients.innerHTML = "";
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(ulTag, source, newArray);
    const allLiTags = document.querySelectorAll("#tags__list > li");
    selectThisIngredientTag(allLiTags);
    searchInIngredientsRecipes();
    //showAllRecipesFiltered();
  } else {
    blockSubMenuTools.innerHTML = "";
    blockSubMenuIngredients.innerHTML = "";
    blockSubMenuAppliances.innerHTML = "";
    addTagsList(ulTag, source, totalIngredients);
    const allLiTags = document.querySelectorAll("#tags__list > li");
    selectThisIngredientTag(allLiTags);
  }
};
