//Para mover a Millennium Falcon use "W, A, S e D", para usar o hyperspace skipping utilizar a tecla "Enter";
//Var ship
let yShip = 369;
let xShip = 100;
let colisao = false; 

//Var pontos
let pontos = 0;

function showShip(){
 image(ship, xShip, yShip, 30, 30);
  
  if (xShip < 1){
    xShip = 1;
  }
  
  if (xShip > 468){
    xShip = 468;
  }
  
}

function shipMove(){
  
  if (keyIsDown(87)){
  
    yShip -= 3;
  }
  
   if (keyIsDown(83)){
  if(podeSeMover()){
    yShip += 3;}
  }
  
   if (keyIsDown(65)){
        
    xShip -= 3;
  }
  
   if (keyIsDown(68)){
  
    xShip += 3;
  }
  //Hyperspace skipping(tecla enter);
  if (keyIsDown(13)){
    
    yShip -= 3;
    
}
}
function verificaColisao(){
  
   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < asteroids.length /*6*/; /*i = i + 1*/ i++){
   colisao = collideRectCircle(xAsteroid[i], yAsteroids[i], asteroidsWidth, asteroidsHeight, xShip, yShip, 20)
    
    if (colisao){
      colidiu();
      colisaoSom.play();
    }
    
  }
}


function colidiu(){
  
  yShip = 369;
  xShip = 100;
  pontos = 0;
  
  
}

function mostrarPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0))
  text(pontos, /*width / 5*/ 470, 27)
  text("Pontos =", 405, 27)
  
}

function marcaPontos(){
  
  if (yShip < 15){
    pontos += 1;
    yShip = 369;
    xShip = 100;
    pontoSom.play();
  }
  
  
}

function podeSeMover(){
  
  return yShip < 369;
  
}

