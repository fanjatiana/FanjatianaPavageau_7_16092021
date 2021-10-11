import { TagsAppliances } from "./class_TagsAppliances.js";
import { TagsTools } from "./class_TagsTools.js";
import { TagsIngredients } from "./class_TagsIngredients.js";

export class TagsFactory {
    static buildTags(tag) {
      let objectTags = null;
      if (tag.ingredients) {
        objectTags = new TagsIngredients(tag);
      }
      if (tag.appliances) {
        objectTags = new TagsAppliances(tag);
      }
      if (tag.tools){
          objectTags = new TagsTools(tag);
      }
      return objectTags;
    }
  }