//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

var ball;
//////////////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
  ball = new Ball();
}
//////////////////////////////////////////////////////
function draw() {
  background(0);
  ball.run();
}
//////////////////////////////////////////////////////
class Ball {

  constructor(){
    this.velocity = new createVector(random(-2,2), random(-2,2));
    this.location = new createVector(random(width), random(height));
  }

  run(){
    this.draw();
    this.move();
    this.bounce();
  }

  draw(){
    fill(125);
    ellipse(this.location.x, this.location.y, 40, 40);
  }

  move(){
    this.location.add(this.velocity);
  }

  bounce(){
    if (this.location.x<0 || this.location.x>width) this.velocity.x*=-1;
    if (this.location.y<0 || this.location.y>height) this.velocity.y*=-1;
  }
}
