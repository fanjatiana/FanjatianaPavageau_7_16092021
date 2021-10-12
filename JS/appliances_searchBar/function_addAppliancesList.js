import { searchBarByAppliances } from "../const.js";
import { TagsFactory } from "../class/factory_Tags.js";


export const addAppliancesList = (array) =>{
document.querySelector(
        ".sub_menu__appliances"
      ).innerHTML += `<ul id="appliances_tags"></ul>`;
     
    
      array.forEach((element) => {
        const list = TagsFactory.buildTags(element);
       
      });
    
}