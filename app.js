let sliderVal = document.getElementById("grid-picker");
sliderVal.value = 100;
let labelVal = document.getElementsByClassName("label");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

class cell {

}
sliderVal.oninput = function (){
    let newDimensions = sliderVal.value;
    for(let i = 0; i < labelVal.length; i++){
        labelVal[i].innerHTML = newDimensions;
    }
    canvas.height = newDimensions;
    canvas.width =newDimensions;
    
    for(let i = 0; i < canvas.height; i++){
        for(let j = 0; j < canvas.height; j++){
            
        } 
    }

}
