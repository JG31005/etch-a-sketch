
let divContainer =document.querySelector(".grid-container");

let num=16;

function createDivs(num){
    for(let i = 0; i <  num; i++){
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row");
        divContainer.appendChild(rowContainer);
        for(let j = 0; j < num; j++){
            const cell = document.createElement("div");
            rowContainer.appendChild(cell);
            cell.classList.add("cell");
        }
    }
    const cells = document.getElementsByClassName('cell');
    console.log(cells);
    for(const cell of cells){
        cell.addEventListener('mouseover', function onhover() {
            cell.classList.add("hovered");
        })
    }
}


createDivs(num);

