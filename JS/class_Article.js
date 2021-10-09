export class Article {
  constructor(id, name, time, ingredient, description) {
    this.element = this.build(id, name, time, description);
    this.id = id;
    this.name = name;
    this.time = time;
    this.ingredient = ingredient;
    this.description = description;
    this.addIngredients(ingredient);
  }
  
  // fonction de construction des articles dans le DOM
  build(id, name, time, description) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.description = description;
    const dom = document.createElement("article");
    dom.classList.add("recipe_card");
    const main = document.getElementById("recipes-list");
    main.appendChild(dom);

    dom.innerHTML += `
        <a href="index.html">
            <div class="content_article">
                <div id="img_recipe">
                    <img>
                </div>
                <div id="recipe">
                    <div class ="info_recipe">
                        <h3>${this.name}</h3>
                        <p><img src="/images/clock.svg" alt="icone horloge">${this.time} min</p>
                    </div>
                    <div class="instructions_recipe">
                        <ul class="list_ingredient">
                        </ul>
                        <p>${this.description}</p>
                    </div>
                </div>
            </div>
        </a>
    `;
    return dom;
  }
  
  // fonction pour ajouter les ingrédients dans les articles
  addIngredients(ingredientList) {
    this.ingredient = ingredientList;
    this.ingredient.forEach((ingredient) => {
      const tagUl = this.element.querySelector(".list_ingredient");
      const createTagLi = document.createElement("li");
      tagUl.appendChild(createTagLi);
      const spellingQuantity = ingredient.quantity || ingredient.quantite; // gestion des fautes de frappe du mot quantity
      if (spellingQuantity) {
        createTagLi.innerHTML = `${
          ingredient.ingredient
        } : ${spellingQuantity} ${ingredient.unit ? ingredient.unit : ""}`; // gestion des situations où les unités sont "undefined"
      }
    });
  }
}
