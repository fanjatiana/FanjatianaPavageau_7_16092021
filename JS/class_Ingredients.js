export class Ingredients {
    constructor(ingredient){
        this.ingredient = ingredient;
        this.addInfosIngredients(ingredient)
    }

    addInfosIngredients(ingredient){
        this.ingredient = ingredient;
        const baliseUlIngredients = document.querySelectorAll(".list_ingredient");
        baliseUlIngredients.forEach((balise) => {
            const quantity = info.quantity || info.quantite;
      if (quantity) {
        infoIngredients.innerHTML += `<p>${info.ingredient} : ${quantity}  ${info.unit}</p>`;
      }
          balise.innerHTML += `<li>${ingredient.ingredient}: ${ingredient.quantity} ${ingredient.unit}</li>`
        });
    
}
}