import { recipes } from "./data_recipes.js";

//construction des articles dans le dom
export const buildArticle = (element) => {

    document.getElementById(
      "recipes-list"
    ).innerHTML += `<article id="${element.id}"">
                        <div id="img_recipe">
                            <img>
                        </div>
                        <div id="recipe">
                            <div class ="info_recipe">
                                <h3>${element.name}</h3>
                                <p>${element.time}</p>
                            </div>
                            <div class="instructions_recipe">
                                <ul id="list_ingredient">
                                    
                                </ul>
                                <p>${element.description}</p>
                            </div>
                        </div>
                    </article>`;
  };
