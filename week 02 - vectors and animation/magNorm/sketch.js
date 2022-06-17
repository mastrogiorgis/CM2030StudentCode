//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
function setup() {
  createCanvas(900, 600);
}
//////////////////////////////////////////////////
function draw() {
  background(220);
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  mouse.sub(center);

  text("magnitude: " + int(mouse.mag()), 10, 10);
  rect(10,20,mouse.mag(),10);

  var normal = mouse.copy();
  text("normal: " + normal.normalize().toString(), 10, 50);
  normal = normal.normalize().mult(25); // multiply by scalar to make it visible
  line(10, 60, 10+normal.x, 60+normal.y);

  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
