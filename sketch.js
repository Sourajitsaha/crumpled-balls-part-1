
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledpaper1,ground,box,box1,box2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

crumpledpaper1=new Paper(75,667,20,20);
ground=new Ground(400,670,800,20);

box=new Box(600,650,200,20);
box2=new Box(690,620,20,100);
box3=new Box(490,620,20,100);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display();
  box2.display();
  box3.display();
  ground.display();
  crumpledpaper1.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce (crumpledpaper1.body,crumpledpaper1.body.position,{x:55,y:-55});
  }
}

