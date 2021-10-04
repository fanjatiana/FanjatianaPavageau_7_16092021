/*import {searchBar} from "./let-and-const.js";
import { recipes } from "./data_recipes.js";

 
 
 
 // valeur de l'input
 export const valueInput = searchBar.value
 .normalize("NFD")
 .replace(/[\u0300-\u036f]/g, "")
 .toLowerCase();

// filtre sur les titres
export const resultFilterByName = recipes.filter((recipe) =>
 recipe.name
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .toLowerCase()
   .includes(valueInput)
);

// filtre sur les descritptions
export const resultFilterByDescription = recipes.filter((recipe) =>
 recipe.description
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .toLowerCase()
   .includes(valueInput)
);

// filtre sur les ingrédients
export const resultFilterByIngredients = recipes.filter((recipe) =>
 recipe.ingredients
   .map((list) =>
     list.ingredient
       .normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "")
       .toLowerCase()
   )
   .includes(valueInput)
);
*/
