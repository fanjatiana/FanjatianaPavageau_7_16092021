// fonction pour supprimer le tag en cours lors du clique de la croix de fermeture
export const removeThisTag = () => {
  const tag = document.querySelectorAll(".tag");
  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
    });
  });

};
