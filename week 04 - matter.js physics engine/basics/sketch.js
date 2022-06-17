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
////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 600);

  // create an engine
  engine = Engine.create();

  // create a box and a ground
  box1 = Bodies.rectangle(200, 200, 80, 80, {restitution:.8, friction: .5});

  var options = {isStatic: true, angle: Math.PI * 0.06};
  ground = Bodies.rectangle(400, 500, 810, 10, options);

  // add all of the bodies to the world
  World.add(engine.world, [box1, ground]);
}
////////////////////////////////////////////////////////////////
function draw(){
    background(0);

    Engine.update(engine);

    rectMode(CENTER);
    push();
    fill(255);
    var pos = box1.position;
    translate(pos.x, pos.y);
    rotate(box1.angle);
    rect(0, 0, 80, 80);
    pop();

    push();
    fill(125);
    translate(ground.position.x, ground.position.y);
    rotate(ground.angle);
    rect(0, 0, 810, 10);
    pop();
}
