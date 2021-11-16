import { filterByAppliancesTags } from '../appliances_searchBar/function_filter-appliance.js';
import { allAppliances, allIngredients, allTools } from '../array.js';
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByIngredients,
} from '../const.js';
import { recipes } from '../data_recipes.js';
import { addingTagsInTheDom } from '../function _adding-tags-in-dom.js';
import { getAllTagsSelected } from '../functions_get-all-tags-selected.js';
import { addTagsList } from '../function_addTagsList.js';
import {
  applianceNoFind,
  tagNoFind,
  toolNoFind,
} from '../function_messageError.js';
import { removeThisTag } from '../function_remove-this--Tag.js';
import { showRecipesFiltered } from '../function_show-recipes-filtered-by-tags.js';
import { searchIn } from '../main_searchBar/function_search-in.js';
import { filterByToolsTags } from '../tools_searchBar/function_filter-tools.js';

export const filterByIngredientsTags = () => {
  const arrayMainSearch = searchIn(); // liste de recettes depuis la valeur entrée de l'input
  let arrayFilterByTag = recipes; // liste re recettes depuis recipes

  /* on verifie :
  si la valeur de l'input n'est pas vide  si "true" la variable arrayFilterByTag
  contient la liste des recettes filtrées depuis la barre de recherche principale,
  sinon arrayFilterByTag contient recipes */
  if (arrayMainSearch.length) {
    arrayFilterByTag = arrayMainSearch;
  } else {
    arrayFilterByTag = recipes;
  }

  // on récupère la liste des tags appareil affichée dans le bloc ingrédients
  const ingredientsTagsListDisplayed = document.querySelectorAll(
    '.sub_menu__ingredients > .tags__list li',
  );

  // on applique un évènement au clic sur chaques tags
  ingredientsTagsListDisplayed.forEach((tags) => {
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

      /* on utilise la fonction selectThisTag pour afficher les tags de l'array tagList dans le dom
      (ici l'array ne contient que le tag sélectionné) */
      addingTagsInTheDom(allTagsSelected);

      /* suppression du champ de recherche du bloc par Appareil:
       lorsqu'un tag est selectionné */
      searchBarByIngredients.value = '';

      // on affiche la liste des recettes en fonction de la liste de tag présente dans le dom
      const recipesFiltered = showRecipesFiltered(allTagsSelected, arrayFilterByTag);

      /* on recherche la liste de tags qui correspond
      au nouveau tableau de recette (newArrayRecipes) */
      const allNewIngredients = allIngredients(recipesFiltered);
      const allNewAppliances = allAppliances(recipesFiltered);
      const allNewTools = allTools(recipesFiltered);

      // on vide les blocs de recherche et on  affiche la nouvelle liste de tags
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);

      // si aucune recette ne correspond : message d'erreur
      if (!recipesFiltered.length) {
        tagNoFind();
        toolNoFind();
        applianceNoFind();
      }

      // on applique un filtre sur les tags suivants
      filterByIngredientsTags();
      // on applique un filtre aussi sur les tags des autres blocs pour pouvoir affiner la recherche
      filterByToolsTags();
      filterByAppliancesTags();

      // fonction de suppression des tags
      removeThisTag(allTagsSelected);
    });
  });
};
