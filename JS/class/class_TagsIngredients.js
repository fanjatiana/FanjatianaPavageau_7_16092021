import { baliseUl } from "../const.js";


export class TagsIngredients {
    constructor(tag) {
      this.tag = tag;
      this.element = this.build(tag);
      Object.assign(this,tag)
    }

    // fonction pour afficher les tags
    build(tag) {
      this.tag = tag;
      const baliseUl = document.getElementById("ingredients_tags");
      baliseUl.innerHTML += `<li>${tag}</li>`
    }
  }