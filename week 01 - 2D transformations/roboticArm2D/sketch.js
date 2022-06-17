//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// insired by ofx noise1D example

var rotSliderA, rotSliderB;

var w1 = 150;
var h1 = 20;
var w2 = 50;
var h2 = 15;
/////////////////////////////////////////////////
function setup() {
  createCanvas(720, 400);
  rotSliderA = createSlider(0, 180, 40);
  rotSliderA.position(20,20);
  rotSliderA.style('width', '200px');
  rotSliderB = createSlider(-90, 90, -30);
  rotSliderB.position(20,50);
  rotSliderB.style('width', '200px');
}
//////////////////////////////////////////////////
function draw() {
  strokeWeight(3);
  noFill();
  background(200);
  translate(width/2, height/2);
  ellipse(0,0,3,3);
  rotate(radians(rotSliderA.value()));
  rect(-10,-h1/2,w1,h1);
  translate(w1-20,0);
  ellipse(0,0,3,3);
  rotate(radians(rotSliderB.value()));
  rect(-10,-h2/2,w2,h2);
}
