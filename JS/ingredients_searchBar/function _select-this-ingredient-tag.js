
//fonction pour ajouter et afficher les tags au clic dans la div YoursTag
export const selectThisTag = (element) => {
  const thisTag = element.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

  const divYourTags = document.getElementById("yoursTags");

  const addTagsToDom = (divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`);

  return addTagsToDom;
};
