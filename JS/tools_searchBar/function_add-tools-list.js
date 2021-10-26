
// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addToolsList = (array) => {
  const arrayTools = [];
  array.filter((recipe) => {
    recipe.ustensils.map((e) => arrayTools.push(e));
  });
  const newArrayTools = Array.from(new Set(arrayTools));

  return newArrayTools;
};
