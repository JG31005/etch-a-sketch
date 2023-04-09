
let divContainer =document.querySelector(".grid-container");

let num=256;

function createDivs(num){
    for(let i = 0; i <  num; i++){
        const newdiv = document.createElement("div");
        newdiv.classList.add("pixel");
        newdiv.innerHTML= i;
        newdiv.style.flexBasis = 0;
        divContainer.appendChild(newdiv);
    }
}
createDivs(num);

