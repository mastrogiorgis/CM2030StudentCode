//////////////////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////////////////////
function setup() {
    createCanvas(200, 200);
    background(0);
    rectMode(CENTER);
}
//////////////////////////////////////////////////
function draw() {
    background(0);

    randomGrid();

//    noiseDetail(1);
//    noisyGrid();
}
///////////////////////////////////////////////////
function randomGrid(){
    for (var x=0; x<width; x+=1){
        for (var y=0; y<height; y+=1){
            var c = random(0, 255);
            stroke(c)
            point(x, y);
        }
    }
    noLoop();
}
///////////////////////////////////////////////////
function noisyGrid(){
    for (var x=0; x<width; x+=1){
        for (var y=0; y<height; y+=1){
            var n = noise(x/100, y/100);
            var c = map(n, 0, 1, 0, 255);
            stroke(c)
            point(x, y);
        }
    }
}
