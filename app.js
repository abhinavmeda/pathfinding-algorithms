let grid = document.createElement("table");
grid.id = 'grid';
let c = 0;
for(let i = 0; i < 20; i++){
    let tr = grid.appendChild(document.createElement("tr"));
    for(let j = 0; j < 20; j++){
        let cell = tr.appendChild(document.createElement("td"));
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = "black";
        })
    }
}
document.body.appendChild(grid);