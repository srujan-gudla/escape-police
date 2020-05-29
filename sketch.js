var boundaryright, boundaryLeft, boundaryTop, boundaryBottom;
var dW,dH;
var wallGroup,doorGroup,keyGroup;
var door1,door2,door3,door4,blackkey,greenkey,bluekey,redkey;
var redimage,blueimage,blackimage,greenimage;
function preload(){
  greenimage=loadImage("keys/greenkey.png");
  blueimage=loadImage("keys/bluekey.png");
  blackimage=loadImage("keys/blackkey.png")
  redimage=loadImage("keys/redkey.png");
}
function setup(){
  //displayHeight=864
  //displaywidth=1536
  wallGroup=new Group();
  keyGroup= new Group();
  dW=displayWidth-30;
  dH=displayHeight-145;
  createCanvas(dW,dH);
  boundaryLeft=createSprite(5,dH/2,10,dH);
  boundaryright=createSprite(dW,(dH)/2,20,dH);
  boundaryTop = createSprite(dW/2, 5, dW, 10);
  boundaryBottom = createSprite(dW/2,dH-5, dW, 10);
  crim=createSprite(1400,650,50,50);
  wall =createSprite(displayWidth-190,displayHeight-300,300,10);
  wall1=createSprite(displayWidth-80,displayHeight-600,100,10);
  wall2=createSprite(displayWidth-130,displayHeight-500,10,200);
  wall3=createSprite(displayWidth-300,displayHeight-750,300,10);
  wall4=createSprite(displayWidth-300,displayHeight-570,10,350);
  wall5=createSprite(displayWidth-450,displayHeight-630,10,250);
  wall6=createSprite(displayWidth-450,displayHeight-400,300,10);
  wall7=createSprite(displayWidth-600,displayHeight-500,10,200);
  wall8=createSprite(displayWidth-600,displayHeight-800,10,200);
  wall9=createSprite(displayWidth-450,displayHeight-275,10,100);
  wall10=createSprite(displayWidth-700,displayHeight-600,200,10);
  wall11=createSprite(displayWidth-800,displayHeight-685,10,175);
  wall12=createSprite(displayWidth-890,displayHeight-770,175,10);
  wall13=createSprite(displayWidth-800,displayHeight-275,10,250);
  wall14=createSprite(displayWidth-1000,displayHeight-500,10,200);
  wall15=createSprite(displayWidth-1100,displayHeight-600,200,10);
  wall16=createSprite(displayWidth-1190,displayHeight-730,10,250);
  wall17=createSprite(displayWidth-1200,displayHeight-400,400,10);
  wall18=createSprite(displayWidth-1400,displayHeight-570,10,400);
  wall19=createSprite(displayWidth-1125,displayHeight-275,650,10);
wallGroup.add(wall);
wallGroup.add(wall1);
wallGroup.add(wall2);
wallGroup.add(wall3);
wallGroup.add(wall4);
wallGroup.add(wall5);
wallGroup.add(wall6);
wallGroup.add(wall7);
wallGroup.add(wall8);
wallGroup.add(wall9);
wallGroup.add(wall10);
wallGroup.add(wall11);
wallGroup.add(wall12);
wallGroup.add(wall13);
wallGroup.add(wall14);
wallGroup.add(wall15);
wallGroup.add(wall16);
wallGroup.add(wall17);
wallGroup.add(wall18);
wallGroup.add(wall19);
wallGroup.add(boundaryBottom);
wallGroup.add(boundaryTop);
wallGroup.add(boundaryLeft);
wallGroup.add(boundaryright);
blackkey=createSprite(1455,290,10,10);
blackkey.addImage(blackimage);
blackkey.scale=0.05;
redkey=createSprite(1160,150,10,10);
redkey.addImage(redimage);
redkey.scale=0.05;
bluekey=createSprite(705,650,10,10);
bluekey.addImage(blueimage);
bluekey.scale=0.1;
greenkey=createSprite(510,360,10,10);
greenkey.addImage(greenimage);
greenkey.scale=0.05;
//keyGroup.add(blackkey);
//keyGroup.add(redkey);
//keyGroup.add(greenkey);
//keyGroup.add(bluekey);
}

function draw (){
  background("white");
  text(mouseX+","+mouseY,50,50);
  if(crim.isTouching(wallGroup)){
    crim.velocityX=0;
    crim.velocityY=0;
    crim.x=1400;
    crim.y=650;
  }
  drawSprites();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    crim.velocityX=0
    crim.velocityY=-2;
  }
  if(keyCode===DOWN_ARROW){
    crim.velocityX=0
    crim.velocityY=2;
  }
  if(keyCode===RIGHT_ARROW){
    crim.velocityX=2;
    crim.velocityY=0
  }
  if(keyCode===LEFT_ARROW){
    crim.velocityX=-2;
    crim.velocityY=0
  }
}
function getKey(){
  if(crim.isTouching(redkey)){
   
   text("you have red key",145,45);
  }
  if(crim.isTouching(blackkey)){
   
    text("you have black key",145,45);
   }
   if(crim.isTouching(greenkey)){
    
    text("you have green key",145,45);
   }
    if(crim.isTouching(bluekey)){
      
      text("you have blue key",145,45);
     }
   }
