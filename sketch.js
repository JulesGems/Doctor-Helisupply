//Right and Left arrow keys to move helicopter
//Shift key to boost in speed
//1 key to transition into super fast mode
//2 key to transition into ultra fast mode
//Good luck!
// _________            ____      _____
//     |        /\     |    \    /     \    |\   |
//     |       /__\    |     \  /       \   | \  |
//     |      /    \   |     /  \       /   |  \ |
// ____|     /      \  |____/    \_____/    |   \|
//
// And thanks for teaching me so far
//The code is below
//      |
//      |
//   \  |  /
//    \ | /
//     \|/

















speed=7;
boostSpeed=12;
superBoostSpeed=20;
ultraBoostSpeed=35;
bounce=0.4;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:bounce, isStatic:true});
	World.add(world, packageBody);


	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  camera.x=helicopterSprite.x
  background(0);
  if(packageSprite.isTouching(helicopterSprite)){
	packageBody.position.x=helicopterSprite.x;
  }
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	if(keyWentUp("DOWN")){
		Matter.Body.setStatic(packageBody, false);
	}
	if(keyDown("RIGHT")||keyDown("d")){
		helicopterSprite.x=helicopterSprite.x+speed;
	}
	if(keyDown("LEFT")||keyDown("a")){
		helicopterSprite.x=helicopterSprite.x-speed;
	}
	if(keyDown("RIGHT")&&keyDown("Shift")||keyDown("d")&&keyDown("Shift")){
		helicopterSprite.x=helicopterSprite.x+boostSpeed;
	}
	if(keyDown("LEFT")&&keyDown("Shift")||keyDown("a")&&keyDown("Shift")){
		helicopterSprite.x=helicopterSprite.x-boostSpeed;
	}
	if(keyDown("RIGHT")&&keyDown("1")||keyDown("d")&&keyDown("1")){
		helicopterSprite.x=helicopterSprite.x+superBoostSpeed;
	}
	if(keyDown("LEFT")&&keyDown("1")||keyDown("a")&&keyDown("1")){
		helicopterSprite.x=helicopterSprite.x-superBoostSpeed;
	}
	if(keyDown("RIGHT")&&keyDown("2")||keyDown("d")&&keyDown("2")){
		helicopterSprite.x=helicopterSprite.x+ultraBoostSpeed;
	}
	if(keyDown("LEFT")&&keyDown("2")||keyDown("a")&&keyDown("2")){
		helicopterSprite.x=helicopterSprite.x-ultraBoostSpeed;
	}
	
  drawSprites();
  
  
 
}
