import { blockSubMenuIngredients,blockSubMenuAppliances,blockSubMenuTools } from "./const.js";

// fonction pour afficher le bloc contenant la liste des ingrédients


let chevronBlockIngredient = document.querySelector(".chevron__block-ingredient");
let chevronBlockAppliance = document.querySelector(".chevron__block-appliance");
console.log(chevronBlockAppliance)
let chevronBlockTool = document.querySelector(".chevron__block-tool");
console.log(chevronBlockTool)

export const displayBlockSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = "block";
  chevronBlockIngredient.classList.add("rotate");
};
export const displayNoneSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = "none";
  chevronBlockIngredient.classList.remove("rotate");
};


export const displayBlockSearchByAppliances = () => {

  blockSubMenuAppliances.style.display = "block";
  chevronBlockAppliance.classList.add("rotate");
};
export const displayNoneSearchByAppliances = () => {
  blockSubMenuAppliances.style.display = "none";
  chevronBlockAppliance.classList.remove("rotate");
};

export const displayBlockSearchByTools = () => {

  blockSubMenuTools.style.display = "block";
  chevronBlockTool.classList.add("rotate");
};
export const displayNoneSearchByTools = () => {
  blockSubMenuTools.style.display = "none";
  chevronBlockTool.classList.remove("rotate");
};





