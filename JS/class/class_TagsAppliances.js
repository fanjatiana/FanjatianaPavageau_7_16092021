export class TagsAppliances {
    constructor(tag) {
      this.tag = tag;
      this.element = this.build(tag);
      Object.assign(this,tag)
    }

    // fonction pour afficher les tags
    build(tag) {
      this.tag = tag;
      const baliseUl = document.getElementById("appliances_tags");
      baliseUl.innerHTML += `<li>${tag}</li>`
    }
  }