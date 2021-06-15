//to create the sprite objects
var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var player, form, game;
var player1, player2;
var players;
var virus, vaccine;
var virusGroup, vaccineGroup;
var virus1_img, virus2_img, virus3_img, virus4_img, virus5_img;
var player1_img, player2_img;
var vaccine1_img, vaccine2_img;
var gameover_img;
var restart_img;
var mask_img;

//to preload the images and create a new group for virus
function preload(){

  back_img = loadImage("images/background.jpg");

  player1_img = loadImage("images/player1.png");
  player2_img = loadImage("images/player2.png");

  virus1_img = loadImage("images/virus1.png");
  virus2_img = loadImage("images/virus2.png");
  virus3_img = loadImage("images/virus3.png");
  virus4_img = loadImage("images/virus4.png");
  virus5_img = loadImage("images/virus5.png");

  vaccine1_img = loadImage("images/vaccine1.png");
  vaccine2_img = loadImage("images/vaccine2.png");

  gameover_img = loadImage("images/gameover.png");

  restart_img = loadImage("images/restart.png");

  mask_img = loadImage("images/mask.png");

  virusGroup = new Group();

}

function setup() {

  //to create the canvas
  createCanvas(1000, 600);

  //database
  database = firebase.database();

  //game
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {

  //to give the background
  background(back_img);
  
  //to update the game state
   if (playerCount === 2) {

     game.update(1);

   }

   //to start the game
   if (gameState === 1) {

     clear(); 
     game.play();

   }

   //to end the game
   if (gameState === 2) {
    
     game.end();

   }
   
}