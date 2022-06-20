////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
////////////////////////////////////
var time = 0;
/////////////////////////////////////////////////
function setup() {
    createCanvas(900, 600);
    background(0);
    rectMode(CENTER);
}
/////////////////////////////////////////////////
function draw() {
    background(0);

    var nX = noise(time);
    var locX = map(nX, 0, 1, 0, width);
    var g = map(nX, 0, 1, 0, 255)

    var nY = noise(time + 5);
    var locY = map(nY, 0, 1, 0, height);

    var rotZ = map(nX, 0, 1, -25, 25);

    translate(locX, locY);
    rotate(rotZ);
    fill(0, g, 0);
    rect(0, 0, 100, 100);

    time+=0.004;
}
