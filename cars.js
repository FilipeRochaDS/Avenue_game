let xCars = [600,600,600,600,600,600];
let yCars = [40, 95, 150, 210, 270, 318]; // diferença entre faixas é de 55px.
let velCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let cCars = 50;
let aCars = 40;

function mstrCar(){
    for (let i = 0; i < imgCars.length; i++){
        image(imgCars[i], xCars[i], yCars[i], cCars, aCars);
    }
}
  
function movCar(){
    for (i = 0; i < imgCars.length; i++){
        xCars[i] -= velCars[i];
    }
}

function loopCar(){
    for (i = 0; i < imgCars.length; i++){
    if(saiuTela(xCars[i])){
        xCars[i] = 600;
    }
}

}

function saiuTela(xCar){
    return xCar < -50;
}