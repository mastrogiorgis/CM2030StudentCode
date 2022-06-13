/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
// Sea nettles image is taken from Wikipedia
// released under a creative commons license:
// https://es.wikipedia.org/wiki/Chrysaora#/media/Archivo:Six-Sea-Nettles.jpg
var imgIn;

function preload() {
    imgIn = loadImage("assets/seaNettles.jpg");
}
////////////////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2) + 20, imgIn.height);
    pixelDensity(1);
}
////////////////////////////////////////////////////////////////////////
function draw() {
    background(255);

    image(imgIn, 0, 0);
    image(invertFilter(imgIn), imgIn.width + 20, 0);
}
////////////////////////////////////////////////////////////////////////
function invertFilter(img){
    imgOut = createImage(img.width, img.height);

    imgOut.loadPixels();
    img.loadPixels();

    for (var x = 0; x < imgOut.width; x++) {
        for (var y = 0; y < imgOut.height; y++) {

            var index = (x + y * imgOut.width) * 4;

            var r = 255 - img.pixels[index + 0];
            var g = 255 - img.pixels[index + 1];
            var b = 255 - img.pixels[index + 2];

            imgOut.pixels[index + 0] = r;
            imgOut.pixels[index + 1] = g;
            imgOut.pixels[index + 2] = b;
            imgOut.pixels[index + 3] = 255;
        }
    }
    imgOut.updatePixels();
    return imgOut;
}
