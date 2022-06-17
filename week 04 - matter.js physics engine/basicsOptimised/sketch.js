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

var engine;

var box1;
var ground;
/////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  box1 = Bodies.rectangle(200, 200, 80, 80, {restitution:.8, friction: .5});

  var options = {isStatic: true, angle: Math.PI * 0.06};
  ground = Bodies.rectangle(400, 500, width, 20, options);

  // add all of the bodies to the world
  World.add(engine.world, [box1, ground]);
}
//////////////////////////////////////////////////////////////
// WITH HELPER FUNCTIONS
function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  drawVertices(box1.vertices);

  fill(128);
  drawVertices(ground.vertices);
}
////////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
