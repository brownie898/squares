const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground;
var ball

function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var  options ={
    isStatic :true
  }
  var ello = {
    restitution :2
  }
  ground = Bodies.rectangle(200,380,100,50,options);
  World.add(world,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  ball = Bodies.circle(200,200,30,ello);
  World.add(world,ball);
}

function draw()
 {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,80);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30)
  drawSprites();
}