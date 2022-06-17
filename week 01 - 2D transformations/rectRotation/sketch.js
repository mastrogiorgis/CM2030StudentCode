//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
function setup() {
  createCanvas(720, 400);
}
///////////////////////////////////////////////
function draw() {
  background(220);
  fill(0);

  // rotate(radians(45))
  rect(50, 50, 100, 100);
}
////////////////////////////////////////////////
// // CASE A
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   rotate(radians(45));
//   translate(200, 100);
//   rect (0, 0, 100, 100);
// }
/////////////////////////////////////////////////
// // CASE B
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   translate(200, 100);
//   rotate(radians(45));
//   rect (0, 0, 100, 100);
// }
////////////////////////////////////////////////
// CASE C
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   rectMode(CENTER); // better move to setup() when live coding
//   translate(200, 100);
//   rotate(radians(45));
//   rect (0, 0, 100, 100);
// }
///////////////////////////////////////////////
// // CASE D - scaling
// function draw() {
//   background(200);
//   fill(0);
//   rect(200, 100, 100, 100);
//
//   fill(125);
//   rectMode(CENTER); // better move to setup() when live coding
//   translate(200, 100);
//   scale(0.5, 0.5);
//   rect (0, 0, 100, 100);
// }
