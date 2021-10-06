export const removeThisTag = () => {
  const tag = document.querySelectorAll(".tag");

  tag.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element.style.display = "none";
    });
  });

};
