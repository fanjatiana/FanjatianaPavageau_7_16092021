
export class Tags {
    constructor(tag) {
      this.tag = tag;
      this.element = this.buildTagsList(tag);
    }

    // fonction pour afficher les tags
    buildTagsList(tag) {
      this.tag = tag;
      const baliseUl = document.getElementById("ingredients_tags");
      baliseUl.innerHTML += `<li>${tag}</li>`
    }
  }