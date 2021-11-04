
//fonction pour ajouter et afficher les tags au clic dans la div YoursTag
export const selectThisTag = (element) => {
  const thisTag = element.currentTarget.innerHTML; // cibler le tag selectionné dit element courant
console.log(thisTag)
  const divYourTags = document.getElementById("yoursTags");


  const addTagsToDom = (divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}</p>
              <img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg">
          </div>`);

  return thisTag;
};
