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

for(let i = 0; i < 20; i++){
    let tr = grid.appendChild(document.createElement("tr"));
    for(let j = 0; j < 20; j++){
        let cell = tr.appendChild(document.createElement("td"));
        cell.addEventListener('click', () => {
            if(keypress === "s" && start === false){
                cell.style.backgroundColor = "red";
                start = true;
                keypress = null;
            }
            else if(keypress === "e" && end === false){
                cell.style.backgroundColor = "blue";
                end = true;
                keypress = null;
            }
        });
        cell.addEventListener('mouseover', () => {
            if(keypress === "w" && cell.style.backgroundColor === ""){
                cell.style.backgroundColor = "black";
            }
        });
    }
}
document.body.appendChild(grid);
