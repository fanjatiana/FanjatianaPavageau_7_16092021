import { removeThisTag } from "./function_removeThisTag.js";

export const selectTAgs = () => {

  const divYourTags = document.getElementById("yoursTags");

  divYourTags.innerHTML += `<div class="tag">
        <p><img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
    </div>`;

 removeThisTag();
};
