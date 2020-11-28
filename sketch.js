
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(400,400,50);
	ground = new Ground(900,650,1800,20);
	dustbin=new Dustbin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}