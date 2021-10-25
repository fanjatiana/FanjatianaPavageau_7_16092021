

const searchToolsTags = (event) => {
  event.preventDefault();
  // valeur de l'input
  let valueInputTools = searchBarByTools.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  let arrayTools = [];
  recipes.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
  });

  let newArrayTools = Array.from(new Set(arrayTools));

  // filtre sur les appareils
  const resultFilterByTools = newArrayTools.filter((recipe) =>
    recipe
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(valueInputTools)
  );

  const source = document.querySelector(".sub_menu__tools");

  const addUlTagTools = `<ul id="tags__list"></ul>`;

  if (!resultFilterByTools.length) {
    return toolNoFind();
  } else if (valueInputTools.length < 3) {
    blockSubMenuTools.innerHTML = "";
    blockSubMenuIngredients.innerHTML = "";
    blockSubMenuAppliances.innerHTML = "";

    addTagsList(addUlTagTools, source, newArrayTools);
    const allLiTags = document.querySelectorAll("#tags__list > li");
    selectThisToolsTag(allLiTags);
    searchInToolsRecipes();
  } else {
    blockSubMenuTools.innerHTML = "";
    blockSubMenuIngredients.innerHTML = "";
    blockSubMenuAppliances.innerHTML = "";

    addTagsList(addUlTagTools, source, resultFilterByTools);
    const allLiTags = document.querySelectorAll("#tags__list > li");
    selectThisToolsTag(allLiTags);
  }
};
