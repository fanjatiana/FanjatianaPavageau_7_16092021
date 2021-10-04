import {removeThisTag} from "./function_removeThisTag.js"


export const selectTAgs = (event) => {
    event.preventDefault();
    const divYourTags = document.getElementById("yoursTags");

    divYourTags.innerHTML+= `<div class="tag">
        <p><img class="btn_cross" alt="croix pour supprimer le tag" src="./images/cross.svg"></p>
    </div>`

    const allTagsSelected = document.querySelectorAll(".btn_cross");
    console.log(allTagsSelected)
 
    allTagsSelected.forEach((cross) =>{
    cross.addEventListener("click", removeThisTag)
});
}

