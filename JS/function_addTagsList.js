import { TagsFactory } from './class/factory_Tags.js';

// fonction générique pour afficher les tags dans le bloc de recherche:
export const addTagsList = (source, array) => {
  const ulTag = '<ul class="tags__list"></ul>';
  source.innerHTML += `${ulTag}`;
  array.sort();
  array.forEach((element) => {
    TagsFactory.buildTags(source, element);
  });
};
