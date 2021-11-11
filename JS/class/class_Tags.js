export class Tags {
  constructor(source, tag) {
    this.source = source;
    this.tag = tag;
    this.element = this.build(source, tag);
    Object.assign(this, source, tag);
  }

  // fonction pour afficher les tags
  build(source, tag) {
    const baliseUl = source.querySelector('.tags__list');
    this.tag = tag;
    baliseUl.innerHTML += `<li>${tag}</li>`;
  }
}
