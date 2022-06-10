/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
// code adapted from Coding Train (https://thecodingtrain.com/)
// released under MIT license by Daniel Shiffman

// Sea nettles image is taken from Wikipedia
// it is released under a creative commons license:
// https://es.wikipedia.org/wiki/Chrysaora#/media/Archivo:Six-Sea-Nettles.jpg
var imgIn;

function preload() {
    imgIn = loadImage("assets/seaNettles.jpg");
}
/////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2) + 20, imgIn.height);
    pixelDensity(1);
}
/////////////////////////////////////////////////////////////
function draw() {
    background(255);

    image(imgIn, 0, 0);
    image(blur(imgIn), imgIn.width + 20, 0);

    noLoop();
}
/////////////////////////////////////////////////////////////
function blur(img){
  var imgOut = createImage(img.width, img.height);

  imgOut.loadPixels();
  img.loadPixels();

  // read every pixel
  for (var x = 0; x < imgOut.width; x++) {
      for (var y = 0; y < imgOut.height; y++) {

          var index = (x + y * imgOut.width) * 4;

          imgOut.pixels[index + 0] = 255;
          imgOut.pixels[index + 1] = 0;
          imgOut.pixels[index + 2] = 255;
          imgOut.pixels[index + 3] = 255;
      }
  }
  imgOut.updatePixels();
  return imgOut;
}
