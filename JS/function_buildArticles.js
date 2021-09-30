import { recipes } from "./data_recipes.js";
import { ingredientsList } from "./let-and-const.js";
import { Article } from "./class_article.js";

//construction des articles dans le dom
export const buildArticle = (array) => {
  console.log(array);
  document.getElementById("recipes-list").innerHTML = "";
  array.forEach((element) => {
    let a = element.ingredients.map((list) => list.ingredient);
    console.log(a);

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
