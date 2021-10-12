import { baliseUl } from "../const.js";


export class Tags {
    constructor(tag) {
      this.tag = tag;
      this.element = this.build(tag);
      Object.assign(this,tag)
    }

    // fonction pour afficher les tags
    build(tag) {
      this.tag = tag;
      const baliseUl = document.getElementById("tags__list");
      baliseUl.innerHTML += `<li>${tag}</li>`
    }
  }