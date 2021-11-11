import { allAppliances, allIngredients } from './const.js';

// fonction pour ajouter et afficher les tags au clic dans la div YoursTag
export const selectThisTag = (array) => {
  let color = '';
  const divYourTags = document.getElementById('yoursTags');
  const typeOfTag = (tag) => {
    const ingredients = allIngredients();
    const isIngred = ingredients.includes(tag);
    const appliances = allAppliances();
    const isAppliance = appliances.includes(tag);

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

    divYourTags.innerHTML += `<div class="tag ${colorTag}">
              <p>${element}</p>
              <img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg">
          </div>`;
  });
};
