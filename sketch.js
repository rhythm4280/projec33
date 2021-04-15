const Engine=Matter.Engine;
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var backgroundImg,snowman,snowmanimg;

function preload(){
  backgroundImg=loadImage("snow1.jpg");
  snowmanimg=loadImage("snowman.JPEG");
}
function setup() {
  engine = Engine.create(); 
  world = engine.world;

  createCanvas(800,400);
 snowman=createSprite(400, 200, 50, 50);
  snowman.addImage(snowmanimg);
  snowman.scale=0.1;

  snow1=new Snow(200,100,10);
  snow2=new Snow(700,100,10);
  snow3=new Snow(100,100,10);
  snow4=new Snow(300,100,10);
  snow5=new Snow(400,100,10);
  snow6=new Snow(500,100,10);
  snow7=new Snow(600,100,10);
  snow8=new Snow(800,100,10);
  snow9=new Snow(750,100,10);
  snow10=new Snow(150,100,10);
  snow11=new Snow(250,100,10);
}

function draw() {
  background(backgroundImg);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();

  drawSprites();
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    snowman.velocityX=-2;
  }
  if(keyCode===RIGHT_ARROW){
    snowman.velocityX=2;
  }
}