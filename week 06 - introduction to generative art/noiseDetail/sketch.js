////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
////////////////////////////////////
function setup() {
    createCanvas(900, 300);
    background(255);
    noiseSeed(0);
}
//////////////////////////////////////////
function draw() {
    background(220);

    noiseDetail(4);

    noFill();
    beginShape();
    for (var x=0; x<width; x++){
        var y = noise(x/100) * height;
        vertex(x,y);
    }
    endShape(OPEN);
    noLoop();
}
