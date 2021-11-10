import { blockSubMenuIngredients,blockSubMenuAppliances,blockSubMenuTools, searchBarByIngredients, searchBarByAppliances, searchBarByTools } from "./const.js";

// fonction pour afficher le bloc contenant la liste des ingrédients

let blockIngredient = document.getElementById("by_ingredients");
let blockAppliance = document.getElementById("kitchen-appliance");
let blockTool = document.getElementById("kitchen-tool");
let chevronBlockIngredient = document.querySelector(".chevron__block-ingredient");
let chevronBlockAppliance = document.querySelector(".chevron__block-appliance");
console.log(chevronBlockAppliance)
let chevronBlockTool = document.querySelector(".chevron__block-tool");
console.log(chevronBlockTool)

export const displayBlockSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = "block";
  blockIngredient.style.width="50%";
  blockIngredient.style.height="900px";
  searchBarByIngredients.style.height = "100px"
  chevronBlockIngredient.classList.add("rotate");

};
export const displayNoneSearchByIngredients = () => {
  blockSubMenuIngredients.style.display = "none";
  blockIngredient.style.width="20%";
  blockIngredient.style.height="100px";
  chevronBlockIngredient.classList.remove("rotate");
};


export const displayBlockSearchByAppliances = () => {
  blockSubMenuAppliances.style.display = "block";
  chevronBlockAppliance.classList.add("rotate");
  blockAppliance.style.width="20%";
  blockAppliance.style.height="500px";
  searchBarByAppliances.style.height = "100px"
};
export const displayNoneSearchByAppliances = () => {
  blockSubMenuAppliances.style.display = "none";
  blockAppliance.style.width="20%";
  blockAppliance.style.height="100px";
  chevronBlockAppliance.classList.remove("rotate");
};

export const displayBlockSearchByTools = () => {

  blockSubMenuTools.style.display = "block";
  chevronBlockTool.classList.add("rotate");
  blockTool.style.width="30%";
  blockTool.style.height="600px";
  searchBarByTools.style.height = "100px"
};
export const displayNoneSearchByTools = () => {
  blockSubMenuTools.style.display = "none";
  chevronBlockTool.classList.remove("rotate");
  blockTool.style.width="20%";
  blockTool.style.height="100px";
};





