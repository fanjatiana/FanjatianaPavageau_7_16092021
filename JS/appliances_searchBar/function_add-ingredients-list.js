// AFFICHER LA LISTE DES INGREDIENTS [DES RECETTES] DANS LE BLOC INGREDIENT
export const addIngredientsList = (array) => {
  let arrayIngredients = [];
  array.filter((recipe) => {
    recipe.ingredients.map((list) => {
      arrayIngredients.push(list.ingredient);
    });
  });
  const newArrayIngredients = Array.from(new Set(arrayIngredients));

  return newArrayIngredients;
};
