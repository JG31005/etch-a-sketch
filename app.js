
let divContainer =document.querySelector(".grid-container");

let num=16;
function createDivs(num){
    for(let i = 0; i <  num; i++){
        const newdiv = document.createElement("div");
        newdiv.classList.add("pixel");
        newdiv.innerHTML= i;
        newdiv.style.flexBasis = (100 / Math.sqrt(16)) + '%';
        divContainer.appendChild(newdiv);
    }
}

createDivs(num);

