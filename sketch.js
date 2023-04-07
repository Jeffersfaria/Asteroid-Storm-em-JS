function setup() {
  createCanvas(500, 400);
  trilhaSom.loop();
}

function draw() {
  background(space);
  showShip();
  showAsteroids();
  asteroidsMove();
  shipMove();
  positionAsteroids();
  verificaColisao();
  mostrarPontos();
  marcaPontos();
}
