//////////////////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////////////////////
// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;

var engine;
var ground;
var boxes = [];
var propeller;
var angle=0;
var angleSpeed=0.1;
/////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  ground = Bodies.rectangle(500, 500, 500, 10, {isStatic: true, angle: Math.PI * -0.06});
  propeller = Bodies.rectangle(width/2, height/2, 300, 15, {isStatic: true, angle: angle});

  // add all of the bodies to the world
  World.add(engine.world, [ground, propeller]);
}
/////////////////////////////////////////////////////////////
function draw() {
  background(0);

  Engine.update(engine);

  fill(255);
  drawVertices(propeller.vertices);
  Body.setAngle(propeller, angle);
  Body.setAngularVelocity(propeller, angleSpeed);
  angle += angleSpeed;

  if (random(1)<0.2) generateObject(width/2, 0);

  for (var i = 0; i < boxes.length; i++) {
    drawVertices(boxes[i].vertices);
  }

  textSize(20);

  fill(128);
  drawVertices(ground.vertices);
}
////////////////////////////////////////////////////////////
function generateObject(x, y){
  var b = Bodies.rectangle(x, y, random(10,30), random(10,30), {restitution:.8, friction: .5});
  boxes.push(b);
  World.add(engine.world, [b]);
}
////////////////////////////////////////////////////////////
function keyPressed(){
  generateObject();
}
///////////////////////////////////////////////////////////
// HELPER FUNCTIONS
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
