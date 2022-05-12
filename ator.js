let xAtor = 100;
let yAtor = 366;
let hit = false;
let pts = 0;

function mstrAtor(){
    image(imgAtor, xAtor, yAtor, 30, 30);
}
  
function movAtor (){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
  
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
}

function vrfColisao(){
    for (i = 0; i< imgCars.length; i++){
        hit = collideRectCircle(xCars[i], yCars[i], 
            cCars, aCars, xAtor, yAtor, 15);
        if(hit){
          colidiu();
          pts--  
        }

    }
}

function colidiu(){
    yAtor = 366;
}

function mstrPts(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(pts, width/5, 27);
}

function contaPts(){
    if (yAtor<15){
        pts++
        yAtor = 366;
    }
}