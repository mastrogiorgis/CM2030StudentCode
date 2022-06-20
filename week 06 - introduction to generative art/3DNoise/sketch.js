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

    noisyGrid();
}
/////////////////////////////////////////////////
function noisyGrid(){
    for (var x=0; x<width; x+=1){
        for (var y=0; y<height; y+=1){
            var n = noise(x/100, y/100, frameCount/100);
            var c = map(n, 0, 1, 0, 255);
            stroke(c)
            point(x, y);
        }
    }
}
