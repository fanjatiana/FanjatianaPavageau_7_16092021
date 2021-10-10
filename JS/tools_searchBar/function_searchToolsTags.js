import { displayBlockSearchByTools } from "../function_displayBlockSearchBy.js";

export const searchToolsTags = (event) =>{
    event.preventDefault();
   document.getElementById("tool-search").addEventListener("keyup", displayBlockSearchByTools());
}