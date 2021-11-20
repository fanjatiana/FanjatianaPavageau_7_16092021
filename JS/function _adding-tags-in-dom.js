import { allAppliances, allIngredients } from './array.js';
import { recipes } from './data_recipes.js';

// fonction pour afficher les tags dans le DOM (dans la div YoursTag)
export const addingTagsInTheDom = (array) => {
  let color = '';

  const divYourTags = document.getElementById('yoursTags');
  divYourTags.innerHTML = '';
  // on vérifie le type de tag (si le tag est un ingrédient,appareil...)
  const typeOfTag = (tag) => {
    const ingredients = allIngredients(recipes);
    const isIngred = ingredients.includes(tag);

    const appliances = allAppliances(recipes);
    const isAppliance = appliances.includes(tag);

    // en fonction du type , on assigne une couleur à ce tag
    if (isIngred) {
      color = 'blue';
      return color;
    } if (isAppliance) {
      color = 'green';
      return color;
    }
    color = 'red';
    return color;
  };
  array.forEach((element) => {
    const colorTag = typeOfTag(element);

    // on ajoute le tag dans le dom avec sa classe couleur
    divYourTags.innerHTML += `<div class="tag ${colorTag}">
              <p>${element}</p>
              <img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg">
          </div>`;
  });
};
