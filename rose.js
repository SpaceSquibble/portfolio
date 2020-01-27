var d = 5;
var n = 10;
var j = 0;
var e = 1;

var sliderN;
var sliderD;
var sliderJ;
var sliderE;

function setup() 
{
  createCanvas(440, 440);
  sliderN = createSlider(1,20,10,1);
  sliderD = createSlider(1,20,10,1);
  sliderJ = createSlider(1,100,200,1);
  sliderE = createSlider(1,500,1,1);
  sliderN.input(draw);
  sliderD.input(draw);
  sliderJ.input(draw);
  sliderE.input(draw);
}

function draw() 
{
  n = sliderN.value();
  d = sliderD.value();
  j = sliderJ.value();
  e = sliderE.value();
  
  var k = n / d;
  
  background(0);
  translate(width  / 2, height / 2);
  stroke(mouseX,mouseY,255);
  strokeWeight(e);
  noFill();
  
  beginShape();
  
  for(var a=0; a < TWO_PI*d ; a+=0.02)
  {
    var r = 200* cos(k*a)+j;
    var x = r*cos(a);
    var y = r*sin(a);
  
    vertex(x,y);
  }
  
  endShape(CLOSE);
};
