import { Tags } from './class_Tags.js';

export class TagsFactory {
  static buildTags(tag, source) {
    let objectTags = null;
    objectTags = new Tags(tag, source);

    return objectTags;
  }
}
