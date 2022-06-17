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
var ground1, ground2;
var boxes = [];
////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  box1 = Bodies.rectangle(50, 0, 50, 50, {restitution:.8, friction: .5});
  ground1 = Bodies.rectangle(200, 200, 500, 10, {isStatic: true, angle: Math.PI * 0.06});
  ground2 = Bodies.rectangle(500, 500, 500, 10, {isStatic: true, angle: Math.PI * -0.06});

  // add all of the bodies to the world
  World.add(engine.world, [box1, ground1, ground2]);
}
///////////////////////////////////////////////////////////////
// WITH HELPER FUNCTIONS
function draw() {
  background(0);

  Engine.update(engine);

  fill(255);
  drawVertices(box1.vertices);

  generateObject(width/2, 0);

  for (var i = 0; i < boxes.length; i++) {
    drawVertices(boxes[i].vertices);

    if (isOffScreen(boxes[i])) {    //remove objects that are off-screen
      World.remove(engine.world, boxes[i]);
      boxes.splice(i, 1);
      i--;
    }
  }

  textSize(20);
  text("objects: " + boxes.length, 20, 30)

  fill(128);
  drawVertices(ground1.vertices);
  drawVertices(ground2.vertices);

}
//////////////////////////////////////////////////////////
function generateObject(x, y){
  var b = Bodies.rectangle(x, y, random(10,30), random(10,30), {restitution:.8, friction: .5});
  boxes.push(b);
  World.add(engine.world, [b]);
}
/////////////////////////////////////////////////////////
function keyPressed(){
  generateObject();
}
/////////////////////////////////////////////////////////
function isOffScreen(body){
  var pos = body.position;
  return (pos.y > height || pos.x<0 || pos.x>width);
}
/////////////////////////////////////////////////////////
// HELPER FUNCTION
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
