

export const  newArrayAfterdeleteThisTag = (arrayTags, thisTag) => {
  const divYoursTags = document.getElementById("yoursTags");
  let tagList = [];

  arrayTags = arrayTags.filter((tag) => {
    if (tag !== thisTag) {
      tagList.push(tag);
    }
  });
 

  return tagList;
};
