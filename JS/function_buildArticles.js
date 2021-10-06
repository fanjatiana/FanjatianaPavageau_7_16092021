import { Article } from "./class_Article.js";

//construction des articles dans le dom
export const buildArticle = (array) => {
  document.getElementById("recipes-list").innerHTML = "";
  array.forEach((element) => {
    let a = element.ingredients.map((list) => list);
    console.log(element)
    const articles = new Article(
      element.id,
      element.name,
      element.time,
      element.ingredients,
      element.description
    );
  });
};

