import { Article } from "./class_Article.js";
import { TagsAppliances } from "./class_TagsAppliances.js";
import { TagsIngredients } from "./class_TagsIngredients.js";
import { TagsTools } from "./class_TagsTools.js";

export class RecipesFactory {
    static buildRecipes(id, name, time, ingredient, description) {
      let objectRecipes = null;
        objectRecipes = new Article(id, name, time, ingredient, description);
    }
  }


 export class TagsIngredientsFactory {
    static buildTags(tag){
      let objectTags = null;
      objectTags = new TagsIngredients (tag)
    }
  }

  export class TagsAppliancesFactory {
    static buildTags(tag){
      let objectTags = null;
      objectTags = new TagsAppliances(tag)
    }
  }

  export class TagsToolsFactory {
    static buildTags(tag){
      let objectTags = null;
      objectTags = new TagsTools(tag)
    }
  }

