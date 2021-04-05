
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingShot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	mango1 = loadImage("images/mango.png");
	mango2 = loadImage("images/mango.png");
	mango3 = loadImage("images/mango.png");
	mango4= loadImage("images/mango.png");
	mango5 = loadImage("images/mango.png");
	mango6 = loadImage("images/mango.png");
	mango7 = loadImage("images/mango.png");
	mango8 = loadImage("images/mango.png");


	stone = loadImage("images/stone.png");
	treeImage = loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,40,30);
	mango3=new mango(1100,200,30);
	mango4=new mango(1000,100,30);
	mango5=new mango(900,200,30);
	mango6=new mango(975,200,30);
	mango7=new mango(1050,150,30);
	mango8=new mango(1000,40,30);


	slingshot = new SlingShot(stone.body,{x:200, y:380});
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}



function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(stone,200,380,50,50);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  slingshot.display();  
  

  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

