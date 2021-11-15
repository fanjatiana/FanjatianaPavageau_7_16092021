import { allAppliances, allIngredients, allTools } from '../array.js';
import {
  blockSubMenuAppliances,
  blockSubMenuIngredients,
  blockSubMenuTools,
  searchBarByAppliances,

} from '../const.js';
import { selectThisTag } from '../function _select-this-tag.js';
import { getAllTagsSelected } from '../functions_get-all-tags-selected.js';
import { addTagsList } from '../function_addTagsList.js';
import {
  applianceNoFind, RecipesNoFind, tagNoFind, toolNoFind,
} from '../function_messageError.js';
import { removeThisTag } from '../function_remove-this--Tag.js';
import { returnNewRecipesList } from '../function_return-new-recipes-list.js';
import { showRecipesFiltered } from '../function_show-recipes-filtered-by-tags.js';
import { filterByIngredientsTags } from '../ingredients_searchBar/function_filter.js';
import { filterByToolsTags } from '../tools_searchBar/function_filter-tools.js';

export const filterByAppliancesTags = () => {
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
      alors on ajoute le tag dans l'array tagList */
      let tagList = [];
      if (!allTagsSelected.includes(thisTag)) {
        tagList.push(thisTag);
      }

      // on supprime les doublons de l'array TagList
      tagList = Array.from(new Set(tagList));

      /* on utilise la fonction selectThisTag pour afficher les tags de l'array tagList dans le dom
      (ici l'array ne contient que le tag sélectionné) */
      selectThisTag(tagList);

      /* suppression du champ de recherche du bloc par Appareil:
       lorsqu'un tag est selectionné */
      searchBarByAppliances.value = '';

      // on récupère de nouveau dans le dom la liste des tags selectionnés (ici 1 tag)
      const allTags = getAllTagsSelected();

      // on récupère la liste des recettes présente dans le dom
      const dataFiltered = returnNewRecipesList();

      // on affiche la liste des recettes en fonction de la liste de tag présente dans le dom
      showRecipesFiltered(allTags, dataFiltered);

      // on retourne donc un nouveau tableau de recettes filtré par tag
      const newArrayRecipes = returnNewRecipesList(); //

      /* on recherche la liste de tags qui correspond
      au nouveau tableau de recette (newArrayRecipes) */
      const allNewIngredients = allIngredients(newArrayRecipes);
      const allNewAppliances = allAppliances(newArrayRecipes);
      const allNewTools = allTools(newArrayRecipes);

      // on vide les blocs de recherche et on  affiche la nouvelle liste de tags
      blockSubMenuAppliances.innerHTML = '';
      addTagsList(blockSubMenuAppliances, allNewAppliances);
      blockSubMenuIngredients.innerHTML = '';
      addTagsList(blockSubMenuIngredients, allNewIngredients);
      blockSubMenuTools.innerHTML = '';
      addTagsList(blockSubMenuTools, allNewTools);

      // si aucune recette ne correspond : message d'erreur
      if (!newArrayRecipes.length) {
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

      const arrayTags = getAllTagsSelected();

      // fonction de suppression des tags
      removeThisTag(arrayTags, newArrayRecipes);
    });
  });
};
