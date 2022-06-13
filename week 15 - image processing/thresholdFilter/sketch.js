/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
// Sea nettles image is taken from Wikipedia
// it is released under a creative commons license:
// https://es.wikipedia.org/wiki/Chrysaora#/media/Archivo:Six-Sea-Nettles.jpg
var imgIn;
var thresholdSlider;

function preload() {
    imgIn = loadImage("assets/seaNettles.jpg");
}
//////////////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2)+20, imgIn.height);
    pixelDensity(1);
    imgOut = createImage(imgIn.width, imgIn.height);
    thresholdSlider = createSlider(0, 255, 110);
    thresholdSlider.position(10, 10);
}
//////////////////////////////////////////////////////////////////////
function draw() {
    background(255);
    image(imgIn, 0, 0, imgIn.width, imgIn.height);
    image(thresholdFilter(imgIn), imgIn.width+20, 0, imgIn.width, imgIn.height);
    fill(255);
    text(thresholdSlider.value(), 150, 27);
}
//////////////////////////////////////////////////////////////////////
function thresholdFilter(img){
    var imgOut = createImage(img.width, img.height);
    imgOut.loadPixels();
    img.loadPixels();

    for (x = 0; x < imgOut.width; x++) {
        for (y = 0; y < imgOut.height; y++) {

            var index = (x + y * imgOut.width) * 4;

            var r = img.pixels[index + 0];
            var g = img.pixels[index + 1];
            var b = img.pixels[index + 2];

            var bright = (r + g + b) / 3; // simple
            // var bright = 0.3 * r + 0.59 * g + 0.11 * b; // LUMA ratios

            var threshold = thresholdSlider.value();
            if (bright > threshold) {
                imgOut.pixels[index + 0] = 255;
                imgOut.pixels[index + 1] = 255;
                imgOut.pixels[index + 2] = 255;
                imgOut.pixels[index + 3] = 255;
            } else {
                imgOut.pixels[index + 0] = 0;
                imgOut.pixels[index + 1] = 0;
                imgOut.pixels[index + 2] = 0;
                imgOut.pixels[index + 3] = 255;
            }
        }
    }
    imgOut.updatePixels();
    return imgOut;
}
