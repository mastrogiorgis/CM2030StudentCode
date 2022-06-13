/////////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
/////////////////////////////////////
// code adapted from Coding Train (https://thecodingtrain.com/)
// released under MIT license by Daniel Shiffman
var imgIn;

//sharpen
var matrix = [
    [-1, -1, -1],
    [-1, 9, -1],
    [-1, -1, -1]
];
/////////////////////////////////////////////////////////////////////
function preload() {
    imgIn = loadImage("assets/seaNettles.jpg");
}
/////////////////////////////////////////////////////////////////////
function setup() {
    createCanvas((imgIn.width * 2) + 20, imgIn.height);
}
/////////////////////////////////////////////////////////////////////
function draw() {
    background(255);

    image(imgIn, 0, 0);
    image(sharpen(imgIn), imgIn.width + 20, 0);
    noLoop();
}
/////////////////////////////////////////////////////////////////////
function sharpen(img){
  var imgOut = createImage(img.width, img.height);
  var matrixSize = matrix.length;

  imgOut.loadPixels();
  img.loadPixels();

  // read every pixel
  for (var x = 0; x < imgOut.width; x++) {
      for (var y = 0; y < imgOut.height; y++) {

          var index = (x + y * imgOut.width) * 4;
          var c = convolution(x, y, matrix, matrixSize, img);

          imgOut.pixels[index + 0] = c[0];
          imgOut.pixels[index + 1] = c[1];
          imgOut.pixels[index + 2] = c[2];
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
    // return the new color
    return [totalRed, totalGreen, totalBlue];
}
