
let divContainer =document.querySelector(".grid-container");

let num=4;

function createDivs(num){
    for(let i = 0; i <  num * num; i++){
        const newdiv = document.createElement("div");
        newdiv.classList.add("pixel");
        newdiv.innerHTML= i;
        newdiv.style.flexBasis = (100 / num) + '%';
        divContainer.appendChild(newdiv);
    }
}

createDivs(num);

