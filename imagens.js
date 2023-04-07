//Imagens e sons do jogo;
let space;
let ship;
let asteroid1;
let asteroid2;
let asteroid3; 

let trilhaSom;
let pontoSom;
let colisaoSom;

function preload(){
  
  space = loadImage("ibagens/cenario.jpg");
  ship = loadImage("ibagens/ship.png");
                   
  asteroid1 = loadImage("ibagens/asteroid4.png");
  asteroid2 = loadImage("ibagens/asteroid5.png");
  asteroid3 = loadImage("ibagens/asteroid6.png");
  asteroids = [asteroid1, asteroid2, asteroid3, asteroid1, asteroid2 /*asteroid3*/];
  
  trilhaSom = loadSound("Sons/trilha.m4a");
  pontoSom = loadSound("Sons/ponto.mp3");
  colisaoSom = loadSound("Sons/raquetada.mp3");
  
}
