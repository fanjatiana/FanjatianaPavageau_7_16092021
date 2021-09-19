import { recipes } from "./recipes.js";


// tableau des titres
const arrayTitle = recipes.map((element) => element.name );
console.log(arrayTitle);

// tableau des ingrédients
const arrayIngredient = recipes.map((element) => element.ingredients);

let ingredientsList = []
arrayIngredient.forEach((product) => {
        ingredientsList.push(product[0].ingredient);
})
//console.log(ingredientsList)

// tableau des descriptions
const arrayDescription = recipes.map((element) => element.description);
//console.log(arrayDescription);

// tableau des appareils
const arrayAppliance = recipes.map((element) => element.appliance);
//console.log(arrayAppliance);

// tableau des ustensiles

let arrayUstensils= recipes.map((element) => element.ustensils);

let ustensilsList = [];
arrayUstensils.forEach(element => {
    ustensilsList.push(...element);
});

//console.log(ustensilsList)

const searchBar = document.getElementById("site-search");
console.log(searchBar);


            



// Fonction pour afficher la liste des menus



    searchBar.addEventListener("keyup", (event)=>{
        event.preventDefault();
        arrayTitle.filter((title) => {
            if (searchBar.value.length == 3 && title.toLowerCase().includes(searchBar.value.toLowerCase())){
           
                    return document.getElementById("recipes-list").innerHTML += `<article>
                    <div id="img_recipe">
                        <img>
                    </div>
                    <div id="recipe">
                        <div class ="info_recipe">
                            <h3>${title}</h3>
                            <p></p>
                        </div>
                        <div class="instructions_recipe">
                            <ul></ul>
                            <p></p>
                        </div>
                    </div>
                </article>`;;
                
            }
            return false;
            
        });
        })

