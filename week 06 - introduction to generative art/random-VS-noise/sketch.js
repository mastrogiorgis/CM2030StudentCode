////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
////////////////////////////////////
function setup() {
    createCanvas(900, 600);
    background(255);
}
//////////////////////////////////////////////////////
function draw() {

    noFill();
    strokeWeight(2)
    stroke(0);
    beginShape();
    for (var x=0; x<width; x+=2){
        var y = random(0, height/2);
        vertex(x,y);
    }
    endShape();

    translate(0, height/2);
    beginShape();
    for (var x=0; x<width; x+=2){
        var y = noise(x/100) * height/2;
        vertex(x,y);
    }
    endShape(OPEN);
    noLoop();
}
