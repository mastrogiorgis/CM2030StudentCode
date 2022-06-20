////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
////////////////////////////////////
function setup() {
    createCanvas(900, 600);
    background(0);
    randomSeed(0);
}
//////////////////////////////////////////
function draw() {
    var randX = random(0, width);
    var randY = random(0, height);

    fill(random(255), 0, 0, random(255));
    noStroke();
    ellipse(randX, randY, 15, 15);
}
