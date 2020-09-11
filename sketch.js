var monkey,monkeyimg;
var BananaGroup,bananaImage;
var obstacleGroup,obstacleImg;
var Background,backgroundimg;
var score=0;
var ground;

function preload(){
  
  
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backgroundimg=loadImage("jungle.png");
  obstacleImg=loadImage("stone.png");
  bananaImage=loadImage("banana.png");
}

function setup() {
  createCanvas(400, 400); 
  
  backgr=createSprite(0,200 ,800,800);
  backgr.addImage("jungle",backgroundimg);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  monkey=createSprite(200,280)
  monkey.addAnimation("monkey",monkeyimg);
  monkey.scale=0.1;
  
  
  
  
  BananaGroup=new Group();
 
  
  obstacleGroup=new Group();
   
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
 
  
  
}

function draw() {
  background(220);
  
  
  
  
  food();
  obstacles();
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  if(keyDown("space") ) {
     monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(BananaGroup.isTouching(monkey)){
    score=score+2;
    BananaGroup.destroyEach();
  }
    switch(score){
  case 10:
         monkey.scale=0.12;
        
    break;
  case 20:
         monkey.scale=0.14
        
         break;
  case 30:
         monkey.scale=0.16
        
         break;
  case 40:
          monkey.scale=0.18
        
          break;
  default:
          break;
 
}

  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.08;
  }
  
  
    
    
  
  drawSprites();
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+ score, 500,50);
}

function food(){
  if(frameCount % 80 === 0){
    
    var rand = random(160,200);
    var banana = createSprite(400,200);
    banana.y =rand;
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-4;
    BananaGroup.add(banana);
    
  }
  
}

function obstacles(){
  if(frameCount % 300 === 0){
    
    
    var obstacle = createSprite(400,280);
    obstacle.velocityX=-6;
    obstacle.addImage( obstacleImg);
    obstacle.scale=0.1;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
}


