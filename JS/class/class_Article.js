export class Article {
  constructor(id, name, time, ingredient, description) {
    this.element = this.build(id, name, time, description);
    this.id = id;
    this.name = name;
    this.time = time;
    this.ingredient = ingredient;
    this.description = description;
    this.addIngredients(ingredient);
    Object.assign(this, id, name, time, ingredient, description);
  }

  // fonction de construction des articles dans le DOM
  build(id, name, time, description) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.description = description;
    const dom = document.createElement('article');
    dom.classList.add('recipe_card');
    const main = document.getElementById('recipes-list');
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
                        <p><img src="./images/clock.svg" alt="icone horloge">${this.time} min</p>
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
      const tagUl = this.element.querySelector('.list_ingredient');
      const createTagLi = document.createElement('li');
      tagUl.appendChild(createTagLi);
      // gestion des fautes de frappe du mot quantity
      const spellingQuantity = ingredient.quantity || ingredient.quantite;
      if (spellingQuantity) {
        /* // gestion des situations où les unités sont "undefined":
         ajout de l'ingrédient dans le dom : et de la quantité
          si ingredient.unit a une valeur , ajout de l'unité
          sinon on ne met rien */
        createTagLi.innerHTML = `${ingredient.ingredient} : ${spellingQuantity} ${ingredient.unit ? ingredient.unit.replace('grammes', 'g').replace('cuillère à soupe', 'c. à s.').replace('cuillères à soupe', 'c. à s.').replace('cuillères à café', 'c. à c.') : ''}`;
      } else {
        createTagLi.innerHTML = `${ingredient.ingredient}`;
      }
    });
  }
}
