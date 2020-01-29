new p5();

var n;

function setup() {
  createCanvas(400, 400);
  background(random(93,135), random(211,250), random(221,240)); 
  fill(34, 115, 67);
  textSize(33);
  text("Click to add a fish",60,64);
  n = 0;
}

function draw() {
   //creates a random blue
  var centerX;
  var centerY;
  var bodyLength;
  var bodyHeight;

  var drawFish = function(centerX, centerY, bodyLength, bodyHeight)
  {
          noStroke();
          var r = random(180, 255);
          var g = random(100, 120);
          var b = random(0, 5);
          fill(r, g, b);
          // body
          ellipse(centerX, centerY, bodyLength, bodyHeight);
          // tail
          var tailWidth = bodyLength/4;
          var tailHeight = bodyHeight/2;
          triangle(centerX-bodyLength/2, centerY,
                   centerX-bodyLength/2-tailWidth, centerY-tailHeight,
                   centerX-bodyLength/2-tailWidth, centerY+tailHeight);
          // eye
          fill(33, 33, 33);
          ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
  };

  mouseClicked = function() {
    n = n % 2;
    if(n === 0){
      drawFish(mouseX, mouseY, random(7,100), random(7,50));
    }
    n++;
  };

  //textSize(40);
  noStroke();
  fill(247, 207, 126);
  rect(0,401,402,-6);
  fill(34, 115, 67);
  rect(30,400,10,-110);
  rect(79,400,9,-47);
  rect(136,400,9,-157);
  rect(231,400,10,-58);
  rect(321,400,10,-110);
}
