import { recipes } from "./data_recipes.js";
import { ingredientsList } from "./let-and-const.js";

//construction des articles dans le dom
export const buildArticle = (array) => {
    document.getElementById(
        "recipes-list"
      ).innerHTML = "";
    array.forEach((element) =>{
        document.getElementById(
            "recipes-list"
          ).innerHTML += `<article id="${element.id}"">
            <a href="index.html">
                <div class="content_article">
                    <div id="img_recipe">
                        <img>
                    </div>
                    <div id="recipe">
                        <div class ="info_recipe">
                            <h3>${element.name}</h3>
                            <p><img src="/images/clock.svg" alt="icone horloge">${element.time} min</p>
                        </div>
                        <div class="instructions_recipe">
                            <ul id="list_ingredient">
                            </ul>
                            <p>${element.description}</p>
                        </div>
                    </div>
                </div>
            </a>
        </article>`;
    })
 
};
