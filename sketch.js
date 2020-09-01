const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;

function preload()
{
 	
}

function setup() {
	createCanvas(1600, 700);
 
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	paper = new Paper(100,600,130);
	dustbin = new Dustbin(1105,500,230);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ground.display();
  paper.display();
  dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paper.body,paper.position,{x:5,y:-5});
	}
}