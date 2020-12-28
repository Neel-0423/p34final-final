
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

function preload()
{
	
}

function setup() {
	createCanvas(1/2*windowWidth,1/2*windowHeight);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	bob1 = new Bob(400,300,"orange");
	bob2 = new Bob(340,300,"red");
	bob3 = new Bob(280,300,"blue");
	bob4 = new Bob(460,300,"green");
	bob5 = new Bob(520,300,"yellow");
	roof = new Roof(400,50,width,10);
	chain1 = new Chain(bob1.body, {x:bob1.x, y:50});
	chain2 = new Chain(bob2.body,{x:bob2.x, y:50});
	chain3 = new Chain(bob3.body,{x:bob3.x, y:50});
	chain4 = new Chain(bob4.body,{x:bob4.x, y:50});
	chain5 = new Chain(bob5.body,{x:bob5.x, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
	

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(bob3.body, {x:mouseX, y:mouseY});
}