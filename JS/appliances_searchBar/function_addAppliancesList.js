import { searchBarByAppliances } from "../const.js";
import { TagsAppliances } from "../class/class_TagsAppliances.js";
import { TagsFactory } from "../class/factory_tags.js";
import { TagsAppliancesFactory } from "../class/factory_recipes.js";
export const addAppliancesList = (array) =>{
document.querySelector(
        ".sub_menu__appliances"
      ).innerHTML += `<ul id="appliances_tags"></ul>`;
     
    
      array.forEach((element) => {
        const list = TagsAppliancesFactory.buildTags(element);
       
      });
    
}