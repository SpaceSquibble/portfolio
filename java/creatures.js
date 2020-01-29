new p5();
//squids move around randomly and appear on the other side when they go off the screen. They eat plankton when they hit them.
//leeches scream and turn more red when they hit your mouse. they only scream untill their mouth is 13 pixels wide they are attracted to your mouse
////////////////////////////////////////////////////////////////////////////////////////////

// Biggest possible PVector that fits in the canvas
var maxDir = p5.Vector.sub (new p5.Vector (0, 0), new PVector (width-1, height-1));
// Max Magnitude of the vector
var maxMag =  maxDir.mag();

//Squid Code
////////////////////////////////////////////////////////////////////////////////////////////
    var Squid = function() {
        this.position = new p5.Vector(random(0, 400), random(0, 400)); //x and y position of the creature
        this.velocity = new p5.Vector(0, 0); //speed and direction of the creature (-ive or +ive)
        this.acceleration = new p5.Vector(0, 0); //creature's acceleration
    };
    
    //constantly update the creatures' movement
    Squid.prototype.update = function() {
        var mouse = new p5.Vector(random(-50, 600), random(-50, 600));
        var dir = p5.Vector.sub(mouse, this.position);
        var closeness = (maxMag-dir.mag())/maxMag;
        
        dir.normalize();
        dir.mult(closeness);
        
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.position.add(this.velocity);
    };
    
    Squid.prototype.display = function() {
        //background(255, 255, 255);
        
        noStroke();
        fill(247, 165, 121);
        beginShape();
        vertex(this.position.x-4,this.position.y);
        vertex(this.position.x+33,this.position.y-16);//top point of top triangle
        vertex(this.position.x+16,this.position.y);
        vertex(this.position.x+33,this.position.y+16);//top point of top triangle
        endShape();
        ellipse(this.position.x+26, this.position.y, 27, 5); //tail middle
        fill(237, 130, 81);
        ellipse(this.position.x, this.position.y, 28, 13); //body
        fill(237, 245, 255);
        ellipse(this.position.x-5,this.position.y-3, 5, 5); //eyes
        ellipse(this.position.x-5,this.position.y+3, 5, 5);
        fill(168, 25, 0);
        ellipse(this.position.x-6,this.position.y-4, 3, 3); //pupils
        ellipse(this.position.x-6,this.position.y+4, 3, 3);
    };
    
    Squid.prototype.checkEdges = function() {
        
      //if  the creature hits a side, make it wrap around to the other side
      if (this.position.x > width) {
        this.position.x = 0;
      } 
      else if (this.position.x < 0) {
        this.position.x = width;
      }
    
      //if the creature hits the top or bottom, make it wrap around to the other side
      if (this.position.y > height) {
        this.position.y = 0;
      } 
      else if (this.position.y < 0) {
        this.position.y = height;
      }
    };
    
    Squid.prototype.checkForPlankGrab = function(plank) {
    if ((plank.position.x >= this.position.x && plank.position.x <= (this.position.x + 40)) &&
        (plank.position.y >= this.position.y && plank.position.y <= (this.position.y + 40))) {
        plank.position.y = -400;
        this.planks++;
    }
};
////////////////////////////////////////////////////////////////////////////////////////////
//end of Squid Code

//Plankton
////////////////////////////////////////////////////////////////////////////////////////////
var Plank = function() {
    this.position = new p5.Vector(random(0,400), random(0,400));
};

Plank.prototype.draw = function() {
    noStroke();
    fill(139, 171, 91);
    ellipse(this.position.x, this.position.y,  20, 9);
};
////////////////////////////////////////////////////////////////////////////////////////////
//end of plankton code

//Leech
////////////////////////////////////////////////////////////////////////////////////////////
    //defining our variable
    var mouthW = 5; //starting mouth width of the leech
    var mouthH = 9; // starting mouth height of the leech.
    var leechR = 171; // starting amount of red the leech is
    var leechG = 75; // starting amount of green the leech is
    var leechB = 58; // starting amount of blue the leech is
    
    // Magnitude of that vector
    var maxMag =  maxDir.mag();
    
    var Leech = function() {
        this.position = new p5.Vector(random(-70,600), random(-70,600));
        this.velocity = new p5.Vector(0, 0);
        this.acceleration = new p5.Vector(0, 0);
    };
    
    Leech.prototype.update = function() {
        var mouse = new p5.Vector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.position);
        var closeness = (maxMag-dir.mag())/maxMag;
        
        dir.normalize();
        dir.mult(closeness);
        
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.position.add(this.velocity);
    };
    
    Leech.prototype.display = function() {
        noStroke();
        fill(leechR, leechG, leechB);
        ellipse(this.position.x, this.position.y, 33, 35);//body
        fill(107, 21, 37);
        beginShape();
        vertex(this.position.x-5,this.position.y); //start
        vertex(this.position.x+3,this.position.y-3);//top
        vertex(this.position.x+15,this.position.y); //end
        vertex(this.position.x+3,this.position.y+3);//bottom
        endShape();
        fill(255, 243, 0);
        ellipse(this.position.x-4, this.position.y+12, 5, 5);//eyes
        ellipse(this.position.x-4, this.position.y-12, 5, 5);
        fill(53, 0, 9);
        ellipse(this.position.x-5, this.position.y+13, 4, 3);//pupils
        ellipse(this.position.x-5, this.position.y-13, 4, 3);
        fill(53, 0, 9);
        ellipse(this.position.x-13, this.position.y, mouthW, mouthH);//mouth
    };
    
    Leech.prototype.checkEdges = function() {
    
      if (this.position.x > width) {
        this.position.x = 0;
      } else if (this.position.x < 0) {
        this.position.x = width;
      }
    
      if (this.position.y > height) {
        this.position.y = 0;
      } else if (this.position.y < 0) {
        this.position.y = height;
      }
    };
    
    Leech.prototype.checkMouseNom = function() {
        if(this.position.x < mouseX+1 && this.position.x >mouseX-1 && this.position.y < mouseY+3 && this.position.y > mouseY-3){
            if(mouthW < 13){
                mouthW ++;
                mouthH ++;
            }
            leechR +=2;
            leechG -=2;
            leechB -=2;
        }
    };

////////////////////////////////////////////////////////////////////////////////////////////
//end of Leech code

//making creatures and outputting them
////////////////////////////////////////////////////////////////////////////////////////////
//making squids
var squids = [];
for(var i= 0; i < 8; i++){
    squids[i] = new Squid();
}

//making plankton
var planks = [];
for (var i = 0; i < 100; i++) {  
    planks[i] = new Plank();
} 

//making leeches
var leeches = [];
for(var i= 0; i < 3; i++){
    leeches[i] = new Leech();
}

function draw() {
    background(145, 184, 157); //swampy water colour
    
    //outputting squids
    for(var j=0; j < 8; j++){
        squids[j].update();
        squids[j].checkEdges();
        squids[j].display(); 
    }
    //outputting leeches
    for(var j=0; j < 3; j++){
        leeches[j].update();
        leeches[j].checkEdges();
        leeches[j].display(); 
        leeches[j].checkMouseNom();
    }
    
    
    //outputting plankton
    for (var i = 0; i < planks.length; i++) {
        planks[i].draw();
        for(var j =0; j < 8; j++){
            squids[j].checkForPlankGrab(planks[i]);
        }
    }
    
};
