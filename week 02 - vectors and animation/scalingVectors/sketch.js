//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
function setup() {
  createCanvas(900, 600);
}
///////////////////////////////////////////////////////////
function draw() {
  background(125);
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  mouse.sub(center);

  mouse.mult(0.5);
  // mouse.div(2);

  translate(width / 2, height / 2);
  strokeWeight(3);
  line(0, 0, mouse.x, mouse.y);
}
