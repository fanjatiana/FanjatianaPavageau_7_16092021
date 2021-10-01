import { Article } from "./class_Article.js";

//construction des articles dans le dom
export const buildArticle = (array) => {

  document.getElementById("recipes-list").innerHTML = "";
  array.forEach((element) => {
    let a = element.ingredients.map((list) => list.ingredient);


    const articles = new Article(
      element.id,
      element.name,
      element.time,
      a,
      element.description
    );
  });
};
/*let b = element.ingredients.map((list)=> list.quantity);
      let c = element.ingredients.map((list)=> list.unit);*/
