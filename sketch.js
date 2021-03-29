
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(450,200,600,40);
	bob1=new Bob (200,550,100);
	bob2=new Bob (350,550,100);
    
	rope1=new Rope(bob1.body,roof.body,0,0);
	rope2=new Rope(bob2.body,roof.body,0,0);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob1.display();
  bob2.display();
  rope1.display();
  rope2.display();
  drawSprites();
 
}



