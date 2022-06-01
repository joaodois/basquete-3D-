
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world, bg, ok, b1;
var score = 0;

function preload() {
	bg = loadImage("quadra1.jpg")

}

function setup() {
	createCanvas(1358, 646);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(width/2,670,width,60);
	paperObject = new paper(200,450,70);
	dustbinObj = new dustbin(1120,265);
	ok = Bodies.circle(1135,215,15,{isStatic:true});
	//Matter.Body.setVisiblity(ok.body,false);
	World.add(world,ok);

	b1 = createImg('k.png');
	b1.position(0,250);
	b1.size(175,175); 
	b1.mouseClicked(jose);

	

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
	ellipse(ok.position.x,ok.position.y,7,7);	
  textSize(40)
	fill("red") 
	text("score: "+score,650,100)
	var collision = Matter.SAT.collides(this.ok,paperObject.body);
	if(collision.collided) {
		score+=1;
		//paperObject.position.x = 200;
		//paperObject.position.y = 450;
	}
 if(keyIsDown(LEFT_ARROW) && paperObject.body.position.y > 550) {
	paperObject.body.position.x += -1;
}
if(keyIsDown(RIGHT_ARROW) && paperObject.body.position.y > 550) {
	paperObject.body.position.x += 1;
}
  
  	groundObject.display();
	dustbinObj.display();
	paperObject.display();
	
  

  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW && paperObject.body.position.y > 600) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-185});

    
  	}
	  
}
function jose() {
	if(paperObject.body.position.y > 500){
		Matter.Body.setPosition(paperObject.body,{x:200,y:550});
	}
}





