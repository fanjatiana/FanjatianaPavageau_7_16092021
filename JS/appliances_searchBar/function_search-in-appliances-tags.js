import { allAppliances } from '../array.js';
import { blockSubMenuAppliances, searchBarByAppliances } from '../const.js';
import { addTagsList } from '../function_addTagsList.js';
import { applianceNoFind } from '../function_messageError.js';
import { wordNormalize } from '../function_normalize.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { filterByAppliancesTags } from './function_filter-appliance.js';

// function de recherche d'appareil dans la liste de tags appareil
export const searchInAppliancesTags = () => {
  /* évènement clavier : déclanchement de la recherche
  lorsqu'on appuie sur n'importe quelle touche */
  searchBarByAppliances.addEventListener('keydown', () => {
    const blockAppliance = document.getElementById('kitchen-appliance');
    blockAppliance.style.height = 'auto';

    /* on récupère la valeur entrée dans l'input
    et on applique une fonction normalize pour supprimer les accents et majuscules */
    const inputValueAppliance = searchBarByAppliances.value;
    wordNormalize(inputValueAppliance);

    // on récupère la liste de recette affichée dans le dom
    const newArray = returnNewRecipesList();

    /* on récupère la liste de tags appareil correspondant aux recettes
    présentent dans le dom */
    const allNewAppliances = allAppliances(newArray);

    /* on vient chercher dans allNewAppliances
     si un tag correspond à la valeur rentrée dans l input */
    const totalAppliances = allNewAppliances.filter((element) => wordNormalize(element).includes(inputValueAppliance));

    /* on vérifie :
    -si la valeur entrée est différente de la liste de tags => message d'erreur.
    -si la valeur entrée est inférieure à 2: on affiche la liste de tags correspondant aux recettes.
    -sinon: on affiche la liste de tags correspondant à la valeur rentrée dans l'input */
    if (!totalAppliances.length) {
      applianceNoFind();
    }
    if (inputValueAppliance.length < 2) {
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      filterByAppliancesTags();
    } else {
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, totalAppliances);
      filterByAppliancesTags();
    }
    return totalAppliances; // on retourne un nouveau tableau d'appareils
  });
};
