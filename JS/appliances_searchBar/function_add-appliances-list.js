

// afficher les tags des ingredients dans le bloc de recherche par ingrédients:
export const addAppliancesList = (array) => {
  let arrayAppliances = [];
  array.filter((recipe) => {
    arrayAppliances.push(recipe.appliance);
  });
  const newArrayAppliances = Array.from(new Set(arrayAppliances));
  return newArrayAppliances;
};
