import { Cell } from './cell.js';

let grid = document.createElement("table");
grid.id = 'grid';

let keypress = null;
document.body.addEventListener("keydown", (e) => {
    if(e.key === "s"){
        keypress = "s";
    }
    else if(e.key === "e"){
        keypress = "e";
    }
    else if(e.key === "w"){
        keypress = "w";
    }
})
let start = false;

let end = false;

let arrayGrid = new Array(20);


for(let i = 0; i < 20; i++){
    let rowGrid = [];
    let tr = grid.appendChild(document.createElement("tr"));
    for(let j = 0; j < 20; j++){
        let toAdd = new Cell(i, j);
        let cell = tr.appendChild(document.createElement("td"));
        cell.addEventListener('click', () => {
            if(keypress === "s" && start === false){
                cell.style.backgroundColor = "red";
                start = true;
                keypress = null;
                toAdd.isStart = true;
                console.log(arrayGrid);
            }
            else if(keypress === "e" && end === false){
                cell.style.backgroundColor = "blue";
                end = true;
                keypress = null;
                toAdd.isEnd = true;
                console.log(arrayGrid);

            }
        });
        cell.addEventListener('mouseover', () => {
            if(keypress === "w" && cell.style.backgroundColor === ""){
                cell.style.backgroundColor = "black";
                toAdd.isWall = true;
                console.log(arrayGrid);

            }
        });
        rowGrid.push(toAdd);
    }
    arrayGrid.push(rowGrid);
}
document.body.appendChild(grid);
// console.log(arrayGrid);
