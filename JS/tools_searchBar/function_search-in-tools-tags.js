import { allTools } from '../array.js';
import { searchBarByTools, blockSubMenuTools } from '../const.js';
import { addTagsList } from '../function_addTagsList.js';
import { toolNoFind } from '../function_messageError.js';
import { wordNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { filterByToolsTags } from './function_filter-tools.js';

// function de recherche d'ustensile dans la liste de tags ustensile

export const searchInToolsTags = () => {
  /* évènement clavier : déclanchement de la recherche
  lorsqu'on appuie sur n'importe quelle touche */
  searchBarByTools.addEventListener('input', () => {
    /* on récupère la valeur entrée dans l'input
    et on applique une fonction normalize pour supprimer les accents et majuscules */
    const valueInputTool = searchBarByTools.value;
    wordNormalize(valueInputTool);

    // on récupère la liste de recette affichée dans le dom
    const newArray = returnNewRecipesList();

    /* on récupère la liste de tags ustensile correspondant aux recettes
    présentent dans le dom */
    const allNewTools = allTools(newArray);

    /* on vient chercher dans allNewTools
     si un tag correspond à la valeur rentrée dans l input */
    const resultFilterByTools = allNewTools.filter((recipe) => wordNormalize(recipe).includes(valueInputTool));

    /* on vérifie :
    -si la valeur entrée est différente de la liste de tags => message d'erreur.
    -si la valeur entrée est inférieure à 2: on affiche la liste de tags correspondant aux recettes.
    -sinon: on affiche la liste de tags correspondant à la valeur rentrée dans l'input */
    if (!resultFilterByTools.length) {
      return toolNoFind();
    } if (valueInputTool.length < 2) {
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);
      filterByToolsTags();
    } else {
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, resultFilterByTools);
      filterByToolsTags();
    }

    return allNewTools;
  });
};
