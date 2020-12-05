
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,600);
  monkey= createSprite(100,300)
  monkey.scale=0.2;
  monkey.addAnimation("running",monkey_running);
  
  ground= createSprite(0,500,200,20);
  ground.velocityX= -4;
}


function draw() {
background("orange")
drawSprites();  
}






