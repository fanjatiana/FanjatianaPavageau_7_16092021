// fonction qui renvoie un nouveau tableau de tags restant , après suppression du tag choisi
export const newArrayAfterdeleteThisTag = (arrayTags, thisTag) => {
  const tagList = [];
  arrayTags = arrayTags.filter((tag) => {
    if (tag !== thisTag) {
      tagList.push(tag);
    }
    return tagList;
  });
  return tagList;
};
