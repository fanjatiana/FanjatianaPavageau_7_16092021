import { Tags } from "../class/class_Tags.js";
export const addToolsList = (array) =>{
    document.querySelector(
        ".sub_menu"
      ).innerHTML += `<ul id="tools_tags"></ul>`;
    
      array.forEach((element) => {
        const list = new Tags(element);
      });
    
}