var monkey,bndarbhaga;
var bG,bGimg;
var ground;
var kela,chilka;
var stone,stoneimg;
var score = 0;

function preload() 
{
  bandarbhaga=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  chilka =loadImage("banana.png");
  stoneimg= loadImage("stone.png");
}

function setup() {
  createCanvas(600, 400);
  
  monkey= createSprite(50,350,20,50);
  monkey.addAnimation("running",bandarbhaga);
  monkey.scale=0.5;
  
  ground = createSprite(370,300,10,600);
  ground.x = ground.width/2;
  ground.velocityX = -2;
  ground.visible = false;
  
  banaG =new Group();
  
}

function draw() {
  background(220);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnbanana();
  spawnstone();
  drawSprites();
}

function spawnbanana() 
{  
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,200,40,10);
    banana.y =Math.round( random(50,120));
    banana.addImage(cloudimg);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
    banana.lifetime = 200;

    banana.depth = monkey.depth;
    monkey.depth = banana.depth + 1;
    banaG.add(banana);
  }
}   
   function spawnstone() 
{
  if(frameCount % 60 === 0)
  {
    var stone = createSprite(600,200,10,40);
    stone.velocityX = -6;
    
    stone.scale = 0.5;
    stone.lifetime = 130;
    stoneG.add(stone);
  }
}