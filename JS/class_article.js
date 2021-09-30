export class Article {
    constructor(id, name, time,description){
        this.id= id;
        this.name = name;
        this.time = time;
        //this.ingredients = ingredients;
        this.description = description;
        this.element = this.build(id, name, time, description);
        //this.addIngredients(ingredients);
        


    }


    build(id, name, time, description){
        this.id= id;
        this.name = name;
        this.time = time;
        this.description = description;
        document.getElementById(
            "recipes-list"
          ).innerHTML += `<article id="${this.id}">
        <a href="index.html">
            <div class="content_article">
                <div id="img_recipe">
                    <img>
                </div>
                <div id="recipe">
                    <div class ="info_recipe">
                        <h3>${this.name}</h3>
                        <p><img src="/images/clock.svg" alt="icone horloge">${this.time} min</p>
                    </div>
                    <div class="instructions_recipe">
                        <ul class="list_ingredient">
                        </ul>
                        <p>${this.description}</p>
                    </div>
                </div>
            </div>
        </a>
    </article>`;
    }

   /* addIngredients(ingredients){
        this.ingredients = ingredients;
        const baliseUl = document.querySelectorAll(".list_ingredient");

        const createLi = baliseUl.forEach((balise)=>{balise.innerHTML+= `<li></li>`});
        const baliseLi = document.querySelectorAll('li');
        const addlist = baliseLi.forEach((li)=>{li.innerHTML+=`${ingredients}`});

   
    }*/
}