//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
function setup() {
  createCanvas(720, 400);
  rectMode(CENTER);
}
/////////////////////////////////////////////
function draw() {
  background(200);
  fill(0);

  push();
  translate(200, 200);
  rotate(radians(45));
  rect(0, 0, 200, 200);

      push();
      fill(255,0,0);
      translate(100,100);
      ellipse(0, 0, 30, 30);
      pop();

      push();
      fill(255,0,0);
      translate(-100,-100);
      ellipse(0, 0, 30, 30);
      pop();

  pop();
}
