import { allAppliances, allIngredients, AllTools } from "./const.js";

//fonction pour ajouter et afficher les tags au clic dans la div YoursTag
export const selectThisTag = (array) => {
  const divYourTags = document.getElementById("yoursTags");

  const typeOfTag = (tag) => {
    const ingredients = allIngredients();
    const isIngred = ingredients.includes(tag);

    const appliances = allAppliances();
    const isAppliance = appliances.includes(tag);

    /*const tools = AllTools();
    console.log(tools)
    const isTool = tools.includes(tag)*/

    let color = "";

    if (isIngred) {
      return (color = "blue");
    } else if (isAppliance) {
      return (color = "green");
    } else {
      return (color = "red");
    }
  };

  array.forEach((element) => {
    const color = typeOfTag(element);

    divYourTags.innerHTML += `<div class="tag ${color}">
              <p>${element}</p>
              <img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg">
          </div>`;
  });
};
