
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

crumpledpaper1=new Paper(75,665,20,20);
ground=new Ground(400,670,800,20);

box=Bodies.rectangle(width/2,634,200,20,{isStatic:true});
	World.add(world,box);

	box2=Bodies.rectangle(290,595,20,100,{isStatic:true});
	World.add(world,box2);

	box3=Bodies.rectangle(490,595,20,100,{isStatic:true});
  World.add(world,box3);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  rect(box.position.x+250,box.position.y+5,200,20);
  rect(box2.position.x+250,box2.position.y+5,20,100);
  rect(box3.position.x+250,box3.position.y+5,20,100);
  ground.display();
  crumpledpaper1.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce (crumpledpaper1.body,crumpledpaper1.body.position,{x:55,y:-55});
  }
}

