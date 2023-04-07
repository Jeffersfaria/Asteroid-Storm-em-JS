//Var asteroids x angle
let xAsteroid = [600, 600, 600, 600, 600, 600];
//Y angle
let yAsteroids = [40, 100, 150, 210, 260, 310];
//Width and height of the asteroids
let asteroidsWidth = 50;
let asteroidsHeight = 40;

//Speed
let asteroidsSpeed = [9, 3.3, 8, 4.5, 6, 5];

function showAsteroids(){
  for (let i = 0; i < asteroids.length /*5*/; i = i + 1){
    image(asteroids[i], xAsteroid[i], yAsteroids[i], asteroidsWidth, asteroidsHeight);

}

function asteroidsMove(){
  
  for (let i = 0; i < asteroids.length; i = i + 1){
    xAsteroid[i] -= asteroidsSpeed[i];
  } 
  

}
function positionAsteroids(){
  
  for (let i = 0; i < asteroids.length; i = i + 1){
    
    if (passouDaTela(xAsteroid[i])){
      xAsteroid[i] = 600;
  }
    
  }

}

function passouDaTela(xAsteroid){
  
  return xAsteroid < - 50;
  
}


