new p5();

var generator;
var standardDeviation;
var mean;

function setup(){
  createCanvas(400,400);
  background(255, 255, 255);
  generator = new random(1);
  standardDeviation= 2;
  mean=0;
}


//paint blob
var blob = function() {
    this.x = 200;
    this.y = 200;
};

blob.prototype.display = function() 
{
    //changing the colour randomly
    var c2 = random(190,220);
    var c3 = random(0,200);
    noStroke();
    fill(250,c2, c3, 100);
    
    //paint splot
    ellipse(this.x, this.y,50,5);
    ellipse(this.x+7, this.y+17,71,62);
    ellipse(this.x+24, this.y+30,40,40);
};

// Randomly move right, left, down, or up
blob.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        //move right
        this.x+=8;
    } else if (choice === 1) {
        //move left
        this.x-=8;
    } else if (choice === 2) {
        //move down
        this.y+=8;
    } else {
        //move up
        this.y-=8;
    } 
};

// Randomly move up, down, left, right, or stay in one place
blob.prototype.walk2 = function() {
    var numX = generator;
    var numY = generator;
    var xStepSize = standardDeviation*numX+mean;
    var yStepSize = standardDeviation*numY+mean;
  
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new blob(); //normal
var m = new blob(); //gaussian

function draw() {  
    w.walk();
    w.display();
    m.walk2();
    m.display();
};
