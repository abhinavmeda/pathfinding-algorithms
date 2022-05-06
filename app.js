let sliderVal = document.getElementById("grid-picker");
sliderVal.value = 100;
let labelVal = document.getElementsByClassName("label");
let canvas = document.getElementById("canvas");
sliderVal.oninput = function (){
    let newDimensions = sliderVal.value;
    for(let i = 0; i < labelVal.length; i++){
        labelVal[i].innerHTML = newDimensions;
    }
    canvas.height = newDimensions;
    canvas.width =newDimensions;

}
