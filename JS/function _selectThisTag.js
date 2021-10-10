import { removeThisTag } from "./function_removeThisTag.js";


export const selectThisTag = () => {
  // ajout des tags selectionnés au clic
  const allTagsIngredients = document.querySelectorAll(
    "#ingredients_tags > li"
  );
  console.log(allTagsIngredients);
  allTagsIngredients.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

      console.log(thisTag);

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;
          removeThisTag();
    });
    
  });
};
