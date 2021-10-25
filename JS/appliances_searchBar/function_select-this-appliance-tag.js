
const selectThisApplianceTag = (allLiTags) => {
  // ajout des tags selectionnés au clic

  allLiTags.forEach((tags) => {
    tags.addEventListener("click", (e) => {
      const thisTag = e.currentTarget.innerHTML; // cibler le tag selectionné dit element courant

      const divYourTags = document.getElementById("yoursTags");

      divYourTags.innerHTML += `<div class="tag">
              <p>${thisTag}<img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
          </div>`;

     removeThisApplianceTag();
      showAllRecipesIncludesApplianceTag();
      showRecipesFilteredByApplianceTag();
    });
  });

};
