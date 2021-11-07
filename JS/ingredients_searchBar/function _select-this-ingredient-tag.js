
//fonction pour ajouter et afficher les tags au clic dans la div YoursTag
export const selectThisTag = (array) => {
console.log(array)
  const divYourTags = document.getElementById("yoursTags");
 

  array.forEach((element) => {
    divYourTags.innerHTML += `<div class="tag">
              <p>${element}</p>
              <img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg">
          </div>`;
  })

};
