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
