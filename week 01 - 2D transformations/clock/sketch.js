//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
var secLength = 160;
var secWidth = 1;
var minLength = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;
///////////////////////////////////////////////////
function setup() {
  createCanvas(720, 400);
}
///////////////////////////////////////////////////
function draw() {
  background(255);
  translate(width/2, height/2);
  ellipse(0,0,350,350);

  push();
  strokeWeight(secWidth);
  stroke(200,0,0);
  var secAngle = map(second(), 0, 60, 0, 360);
  rotate(radians(secAngle));
  line(0,0,0,-secLength);
  pop();

  push();
  strokeWeight(minWidth);
  var minAngle = map(minute(), 0, 60, 0, 360);
  rotate(radians(minAngle));
  line(0,0,0,-minLength);
  pop();

  push();
  strokeWeight(hourWidth);
  var hourAngle = map(hour(), 0, 12, 0, 360);
  rotate(radians(hourAngle));
  line(0,0,0,-hourLength);

      push();
      translate(0, -hourLength);
      rotate(radians(-45));
      line(0, 0, 0, 10);
      pop();

      push();
      translate(0, -hourLength);
      rotate(radians(45));
      line(0, 0, 0, 10);
      pop();

  pop();

  var hours = 12;
  var hourStep = 360/12;
  for (var i=0; i<hours; i++){
     push();
     rotate(radians(hourStep * i));
     translate(0, -155);
     line(0, 0, 0, -20);
     pop();
  }
}
