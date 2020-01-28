new p5();
function setup() {
  createCanvas(400, 400);
}

function draw() {
    var drawShape = function(x, y, radius) {

      var newRadius = radius/2;
      fill(x-12, y/1.5-40, newRadius+90); //filling it with gradients :)
      //making a pretty shape
      stroke(148, 0, 96);
      beginShape();
      vertex(x - radius/2, y);
      vertex(x - radius/2, y - radius/3);
      vertex(x, y - radius/2);
      vertex(x + radius/2, y);
      vertex(x + radius/2, y + radius/3);
      vertex(x, y + radius/2);
      vertex(x - radius/2, y);
      endShape();

      //if the radius isn't super tiny, draw a new shape
      if (newRadius >= 2) {
          drawShape(x, y, newRadius);
      }

  };

  //make the background and shapes
  background(132, 47, 212);
  drawShape(2*width/3, height/4, 300);
  drawShape(width/3, 3*height/4, 300);
  drawShape(width/2, height/2, 350);
}
