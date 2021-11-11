import { allAppliances, allIngredients } from "./const.js";

//fonction pour ajouter et afficher les tags au clic dans la div YoursTag
export const selectThisTag = (array) => {



  const divYourTags = document.getElementById("yoursTags");
  
  const typeOfTag = (tag) =>{
    const ingredients = allIngredients();
    const isIngred = ingredients.includes(tag);

    const appliances = allAppliances();
    const isAppliance = appliances.includes(tag);

    let color = "";

    return isIngred ? color = 'blue' : isAppliance? color = 'green' : color = 'red'
  }
  

 
  array.forEach((element) => {

   
   const color = typeOfTag(element)
    
   

    divYourTags.innerHTML += `<div class="tag ${color}">
              <p>${element}</p>
              <img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg">
          </div>`;
  })
};
