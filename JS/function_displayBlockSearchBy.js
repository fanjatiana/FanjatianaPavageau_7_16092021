// fonction pour afficher le bloc contenant la liste des ingrédients
export const displayBlockSearchByIngredients = () => {
  document.querySelector(".sub_menu__ingredients").style.display = "block";
};

export const displayBlockSearchByAppliances = () => {
  document.querySelector(".sub_menu__appliances").style.display = "block";
};

export const displayBlockSearchByTools = () => {
  document.querySelector(".sub_menu__tools").style.display = "block";
};

export const displayNoneSearchByIngredients = () => {
  document.querySelector(".sub_menu__ingredients").style.display = "none";
};

export const displayNoneSearchByAppliances = () => {
  document.querySelector(".sub_menu__appliances").style.display = "none";
};

export const displayNoneSearchByTools = () => {
  document.querySelector(".sub_menu__tools").style.display = "none";
};
