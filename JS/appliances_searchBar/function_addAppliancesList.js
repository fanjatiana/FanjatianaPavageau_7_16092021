import { searchBarByAppliances } from "./const.js";
import { Tags } from "./class/class_Tags.js";
export const addAppliancesList = (array) =>{
    document.querySelector(
        ".sub_menu"
      ).innerHTML += `<ul id="appliances_tags"></ul>`;
    
      array.forEach((element) => {
        const list = new Tags(element);
      });
    
}