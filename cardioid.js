new p5();

let r;
let factor = 0;
//let total;

function Heart(m, x, y, total) {
  this.mass = m;
  this.total = total;
  this.position = new p5.Vector(x, y);
  this.velocity = new p5.Vector(0, 0);
  this.acceleration = new p5.Vector(0, 0);
}

Heart.prototype.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
};

Heart.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Heart.prototype.calculateWallForce = function() {
    var i=0;
    var j=0;
    
    if (this.position.x > width) 
    {
        i = -1;
    } 
    else if (this.position.x < 0) 
    {
        i = 1;
    }

    if (this.position.y > height) 
    {
        j = -1;
    } 
    else if (this.position.y < 0) 
    {
        j = 1;
    }
    return new p5.Vector(i,j);
};

Heart.prototype.output = function() {
  //translate(width / 2, height / 2);
  stroke(mouseX, mouseY, 30);
  strokeWeight(1);
  noFill();
  ellipse(this.position.x, this.position.y, r * 2);
}

Heart.prototype.lines = function() {
  const total = this.total; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.0015;

  strokeWeight(1);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x + this.position.x, a.y + this.position.y, b.x + this.position.x, b.y + this.position.y);
  }
}

function setup() {
  createCanvas(400, 400);
  r = height /8 - 16;
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

var hearts = [];

for (var i = 0; i < 20; i++) {
    hearts[i] = new Heart(random(3, 5), random(-100, 700), random(-100, 400), random(5, 50));
}

var xforce = new p5.Vector(0.01, 0);
var yforce = new p5.Vector(0, 0.1);

function draw() {
  background(0);
  
  for (var i = 0; i < hearts.length; i++) {
      hearts[i].applyForce(xforce);
      hearts[i].applyForce(yforce);
      hearts[i].applyForce(hearts[i].calculateWallForce());
      hearts[i].update();
      hearts[i].output();
      hearts[i].lines();
    }
}
