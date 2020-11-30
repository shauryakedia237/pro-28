
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constaint = Matter.Constraint;

function preload() {
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Stone1 = new Stone(100,100,50,50);

	groundObject=new ground(width/2,600,width,20);


	Mango1 = new Mango(960,308,50,50);
	Mango2 = new Mango(970,250,50,50);
	Mango3 = new Mango(1100,150,50,50);
	Mango4 = new Mango(1150,200,50,50);
	Mango5 = new Mango(1200,250,50,50);
	Mango6 = new Mango(1250,300,50,50);
	Mango7 = new Mango(1110,308,50,50);
	Mango8 = new Mango(1110,255,50,50);
	Mango9 = new Mango(1050,308,50,50);
	Mango10 = new Mango(1050,235,50,50);

	sling = new Sling(Stone1.body,{x:50, y:50});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boy,200,340,200,300);
  image(tree,900,100,400,500);

  drawSprites();

  Stone1.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  Mango9.display();
  Mango10.display();
  sling.display();
 

  groundObject.display();
}



