var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,goldImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup,goldG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  goldImg = loadImage("gold.PNG");
  
  
}

function setup(){
  
  //create the canvas and adjust the window sizes to suit the device 

  createCanvas(windowWidth, windowHeight);

  
  path=createSprite(width/2,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  
  
  //creating boy running
  boy = createSprite(width/2,height-20,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();
goldG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > width ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();
    createGold();

    if (goldG.isTouching(boy)) {
      goldG.destroyEach();
      treasureCollection=treasureCollection+75;
  }else if(cashG.isTouching(boy)) {
        cashG.destroyEach();
        treasureCollection=treasureCollection+50;

 }else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();

       treasureCollection= treasureCollection+150;

     
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
       
    
        
         cashG.destroyEach();
         diamondsG.destroyEach();
         jewelryG.destroyEach();
         swordGroup.destroyEach();
         goldG.destroyEach();
        
        cashG.setVelocityYEach(0);
        goldG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(width/2),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createGold() {
  if (World.frameCount % 250 == 0) {
  var gold = createSprite(Math.round(random(width/2),40, 10, 10));
  gold.addImage(goldImg);
  gold.scale=0.2;
  gold.velocityY = 3;
  gold.lifetime = 150;
  goldG.add(gold);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(width/2),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(width/2),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(width/2),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
