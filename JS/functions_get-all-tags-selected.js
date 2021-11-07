export const getAllTagsSelected = () => {
  const allDivTagDisplayed = document.querySelectorAll(".tag > p");
  // tableau de recupération de la liste des tags selectionnés
 let getTagsNameList = [];
  allDivTagDisplayed.forEach((element) => {
    const tagName = element.textContent;
    getTagsNameList.push(tagName);
  });

  return getTagsNameList;
};
