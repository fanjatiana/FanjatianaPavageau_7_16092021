
// fonction pour récupérer la liste de tags affichés dans le dom
export const getAllTagsSelected = () => {
  const allDivTagDisplayed = document.querySelectorAll('.tag > p');
  // tableau de recupération de la liste des tags selectionnés
  const getTagsNameList = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;
    getTagsNameList.push(tagName);
  });

  return getTagsNameList;
};
