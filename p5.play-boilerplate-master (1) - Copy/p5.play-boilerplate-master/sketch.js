const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,obj,ground;
function setup() {
  createCanvas(800,800);
  var static = {
    isStatic: true 
  }
  var bounce = {
    restitution : 1
  }
  engine = Engine.create();
  world = engine.world;
  obj = Bodies.circle(400,150,50,bounce);
  ground = Bodies.rectangle(400,750,800,100,static);
  World.add(world,obj);
  World.add(world,ground);
}

function draw() {
  background(0,0,0);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  Engine.update(engine);
  circle(obj.position.x,obj.position.y,50);
  rect(ground.position.x,ground.position.y,800,100);
}