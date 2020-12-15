
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, engine, world,dustbin,paper;
var dustbinImg;

function preload()
{
	//dustbinImg=loadImage("Sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bin1= new Bin(640, 480, 150, 10);
	bin2= new Bin(570, 430, 10, 100);
	bin3= new Bin(710, 430, 10, 100);
	paper = new Paper(100, 300, 50);
	ground=new Ground(400,500,800,20);


	Engine.run(engine);
  
}


function draw() {
	background(0);
  
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();


  drawSprites();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	}
}