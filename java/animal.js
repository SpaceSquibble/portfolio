new p5();

var bodyX = 200;
var bodyY = 200;
var bodyW = 177;
var bodyH = bodyW/2;
var eyeW = 25;
var eyeH = 25;

function setup(){
  createCanvas(400,400);
}

function draw(){
  noStroke();
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 167); // body
    triangle(228,189,147,83,126,156);
    triangle(276,163,253,83,196,156);
    
    //mouth
    noFill();
    stroke(31, 3, 10);
    strokeWeight(3);
    line(200,214,200,238);
    arc(200,225,90,30,0,180);
    
    //nose
    fill(240, 156, 204);
    ellipse(200,206,33,17);
    
    eyeW++;
    eyeH++;
    fill(31, 3, 10);
    ellipse(164, 177, eyeW, eyeH);
    ellipse(239, 177, eyeW, eyeH);
}
