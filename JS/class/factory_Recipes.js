import { Article } from './class_Article.js';

export class RecipesFactory {
  static buildRecipes(id, name, time, ingredient, description) {
    let objectRecipes = null;
    objectRecipes = new Article(id, name, time, ingredient, description);
    return objectRecipes;
  }
}
