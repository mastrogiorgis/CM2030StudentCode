/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
// code adapted from Coding Train (https://thecodingtrain.com/)
// released under MIT license by Daniel Shiffman

var imgIn;

//horizontal edge detection / vertical lines
var matrixX = [    // in javascript format
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1]
];
//vertical edge detection / horizontal lines
var matrixY = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1]
];
/////////////////////////////////////////////////////////////////////
function preload() {
    imgIn = loadImage("assets/seaNettles.jpg");
}
/////////////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2) + 20, imgIn.height);
    pixelDensity(1);
}
/////////////////////////////////////////////////////////////////////
function draw() {
    background(255);

    imgIn.filter(GRAY);
    image(imgIn, 0, 0);
    image(edgeDetectionFilter(imgIn), imgIn.width + 20, 0);
    noLoop();
}
/////////////////////////////////////////////////////////////////////
function edgeDetectionFilter(img){
  var imgOut = createImage(img.width, img.height);
  var matrixSize = matrixX.length;

  imgOut.loadPixels();
  img.loadPixels();

  // read every pixel
  for (var x = 0; x < imgOut.width; x++) {
      for (var y = 0; y < imgOut.height; y++) {

          var index = (x + y * imgOut.width) * 4;
          var cX = convolution(x, y, matrixX, matrixSize, img);
          var cY = convolution(x, y, matrixY, matrixSize, img);

          cX = map(abs(cX[0]), 0, 1020, 0, 255);
          cY = map(abs(cY[0]), 0, 1020, 0, 255);
          var combo = cX + cY;

          imgOut.pixels[index + 0] = combo;
          imgOut.pixels[index + 1] = combo;
          imgOut.pixels[index + 2] = combo;
          imgOut.pixels[index + 3] = 255;
      }
  }
  imgOut.updatePixels();
  return imgOut;
}
/////////////////////////////////////////////////////////////////////
function convolution(x, y, matrix, matrixSize, img) {
    var totalRed = 0.0;
    var totalGreen = 0.0;
    var totalBlue = 0.0;
    var offset = floor(matrixSize / 2);

    // convolution matrix loop
    for (var i = 0; i < matrixSize; i++) {
        for (var j = 0; j < matrixSize; j++) {
            // Get pixel loc within convolution matrix
            var xloc = x + i - offset;
            var yloc = y + j - offset;
            var index = (xloc + img.width * yloc) * 4;
            // ensure we don't address a pixel that doesn't exist
            index = constrain(index, 0, img.pixels.length - 1);

            // multiply all values with the mask and sum up
            totalRed += img.pixels[index + 0] * matrix[i][j];
            totalGreen += img.pixels[index + 1] * matrix[i][j];
            totalBlue += img.pixels[index + 2] * matrix[i][j];
        }
    }
    // return the new color as an array
    return [totalRed, totalGreen, totalBlue];
}
