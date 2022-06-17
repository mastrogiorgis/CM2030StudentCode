//////////////////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////////////////////
var state = false;
var locX = 200;
var locY = 200;
var w = 300;
var h = 200;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(125);

  if (state) fill(255);
  else fill(0);

  rect(locX, locY, w, h);
}

function mousePressed(){
  if (mouseX > locX && mouseX < locX + w &&
      mouseY > locY && mouseY < locY + h)
      {
          state = !state;
      }
}
