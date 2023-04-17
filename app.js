
let divContainer =document.querySelector(".grid-container");

let setcells = document.querySelector(".setbtn");



let rainbowStatus = 0;

function randomRGBA(){
    let rounding = Math.round, rndm = Math.random, max=255; 
    return 'rgba(' + rounding(rndm()*max) + ',' + rounding(rndm()*max) + ',' + rounding(rndm()*max) + ',' + rndm().toFixed(1) + ')';
}

function createDivs(num){
    let rainbow = document.getElementById('rainbowmode').checked;
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

    if(rainbow){
        console.log(rainbow);
        for(const cell of cells){
            let color = randomRGBA();
            cell.addEventListener('mouseover', function onhover(){
                cell.style.cssText = 'background: '+color +';';
            })
        }
    }else {
        for(const cell of cells){
           cell.addEventListener('mouseover', function onhover() {
                cell.style.cssText = 'background: black;';
        })
        }
    }
}

setcells.addEventListener('click' , () =>{
    let num = document.getElementById('cellsChoice').value;
    let allpixels = document.querySelectorAll('.cell');
    allpixels.forEach( (cell) =>{
        cell.remove();
    })
    let allrows = document.querySelectorAll('.row');
    allrows.forEach( (row) =>{
        row.remove();
    })
    createDivs(num);
})



