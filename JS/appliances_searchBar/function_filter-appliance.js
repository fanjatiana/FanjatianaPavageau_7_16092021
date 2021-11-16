import { allAppliances, allIngredients, allTools } from '../array.js';
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,
} from '../const.js';
import { recipes } from '../data_recipes.js';
import { addingTagsInTheDom } from '../function _adding-tags-in-dom.js';
import { getAllTagsSelected } from '../functions_get-all-tags-selected.js';
import { addTagsList } from '../function_addTagsList.js';
import {
  applianceNoFind, RecipesNoFind, tagNoFind, toolNoFind,
} from '../function_messageError.js';
import { removeThisTag } from '../function_remove-this--Tag.js';
import { showRecipesFiltered } from '../function_show-recipes-filtered-by-tags.js';
import { filterByIngredientsTags } from '../ingredients_searchBar/function_filter.js';
import { searchIn } from '../main_searchBar/function_search-in.js';
import { filterByToolsTags } from '../tools_searchBar/function_filter-tools.js';

export const filterByAppliancesTags = () => {
  // liste de recettes depuis la valeur entrée de l'input
  const arrayMainSearch = searchIn();
  // liste re recettes depuis recipes
  let arrayFilterByTag = recipes;

  /* on verifie :
  si la valeur de l'input n'est pas vide  si "true" la variable arrayFilterByTag
  contient la liste des recettes filtrées depuis la barre de recherche principale,
  sinon arrayFilterByTag contient recipes */
  if (arrayMainSearch.length) {
    arrayFilterByTag = arrayMainSearch;
  } else {
    arrayFilterByTag = recipes;
  }

  // on récupère la liste des tags appareil affichée dans le bloc appareil
  const appliancesTagsListDisplayed = document.querySelectorAll(
    '.sub_menu__appliances > .tags__list li',
  );
  // on applique un évènement au clic sur chaques tags
  appliancesTagsListDisplayed.forEach((tags) => {
    tags.addEventListener('click', (e) => {
      // on récupère la valeur du tag selectionné
      const thisTag = e.currentTarget.innerHTML;

      /* on récupère dans le dom la liste de tag affichée
     : pour le moment la liste est vide */
      let allTagsSelected = getAllTagsSelected();
      allTagsSelected = Array.from(new Set(allTagsSelected));

      /* et on vérifie : si la liste (allTagsSelected) ne contient pas le tag selectionné si "true"
      alors on ajoute le tag dans l'array allTagsSelected */
      if (!allTagsSelected.includes(thisTag)) {
        allTagsSelected.push(thisTag);
      }

      /* on utilise la fonction  addingTagsInTheDom
      pour afficher les tags de l'array allTagsSelected dans le dom */
      addingTagsInTheDom(allTagsSelected);

      /* suppression du champ de recherche du bloc par Appareil:
       lorsqu'un tag est selectionné */
      searchBarByAppliances.value = '';

      // on affiche la liste des recettes en fonction de la liste de tag présente dans le dom
      const recipesFiltered = showRecipesFiltered(allTagsSelected, arrayFilterByTag);

      /* on recherche la liste de tags qui correspond
      au  tableau de recettes filtrées (recipesFiltered) */
      const allNewIngredients = allIngredients(recipesFiltered);
      const allNewAppliances = allAppliances(recipesFiltered);
      const allNewTools = allTools(recipesFiltered);

      // on vide les blocs de recherche et on  affiche la nouvelle liste de tags
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);

      // si aucune recette ne correspond : message d'erreur
      if (!recipesFiltered.length) {
        tagNoFind();
        toolNoFind();
        applianceNoFind();
        RecipesNoFind();
      }

      // on applique un filtre sur les tags suivants
      filterByAppliancesTags();
      // on applique un filtre aussi sur les tags des autres blocs pour pouvoir affiner la recherche
      filterByToolsTags();
      filterByIngredientsTags();

      // fonction de suppression des tags
      removeThisTag(allTagsSelected);
    });
  });
};
