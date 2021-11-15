import { allIngredients } from '../array.js';
import { searchBarByIngredients, blockSubMenuIngredients } from '../const.js';
import { addTagsList } from '../function_addTagsList.js';
import { tagNoFind } from '../function_messageError.js';
import { wordNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { filterByIngredientsTags } from './function_filter.js';

// recherche d'ingrédients dans la liste de tags ingrédients

export const searchInIngredientsTags = () => {
  /* évènement clavier : déclanchement de la recherche
  lorsqu'on appuie sur n'importe quelle touche */
  searchBarByIngredients.addEventListener('input', () => {
    const blockIngredient = document.getElementById('by_ingredients');
    blockIngredient.style.height = 'auto';

    /* on récupère la valeur entrée dans l'input
    et on applique une fonction normalize pour supprimer les accents et majuscules */
    const valueInput = searchBarByIngredients.value;
    wordNormalize(valueInput);

    // on récupère la liste de recette affichée dans le dom
    const newArray = returnNewRecipesList();

    /* on récupère la liste de tags ingredient correspondant aux recettes
    présentent dans le dom */
    const allNewIngredients = allIngredients(newArray);

    /* on vient chercher dans allNewIngredients
     si un tag correspond à la valeur rentrée dans l input */
    const totalIngredients = allNewIngredients.filter((element) => wordNormalize(element).includes(valueInput));

    /* on vérifie :
    -si la valeur entrée est différente de la liste de tags => message d'erreur.
    -si la valeur entrée est inférieure à 2: on affiche la liste de tags correspondant aux recettes.
    -sinon: on affiche la liste de tags correspondant à la valeur rentrée dans l'input */
    if (!totalIngredients.length) {
      return tagNoFind();
    } if (valueInput.length < 2) {
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      filterByIngredientsTags();
    } else {
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, totalIngredients);
      filterByIngredientsTags();
    }
    return allNewIngredients;// on retourne un nouveau tableau d'ingredients
  });
};
