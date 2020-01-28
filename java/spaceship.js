new p5();

function setup(){
        createCanvas(400, 400);
}
/*
        Hello and welcome to my program! :)

        <<<<<<< Controls >>>>>>>>>>>>>>>>>>
         Left Arrow Key:    Rotate Left
         Right Arrow Key:   Rotate Right
         Z:                 Zoooooom
         Up Arrow Key:      ???
         Down Arrow Key:    ???
        <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>
        
        I hope you like it!! 
*/


// CODE STARTS //

angleMode = "radians";

//generating planets
    var Attractor = function() {
    this.position = new p5.Vector(width/2, height/2);
    this.mass = 20;
    this.G = 1;
    };
    
    Attractor.prototype.calculateAttraction = function(m) {
        var force = p5.Vector.sub(this.position, m.position);
        var distance = force.mag();
        distance = constrain(distance, 5, 25);  
        force.normalize();
        var strength = (this.G * this.mass * m.mass) / (distance * distance);
        force.mult(strength);
        return force;
    };
    
    Attractor.prototype.display = function() {
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(0);
        ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
    };
    
    
    var Mover = function(mass, x, y, color) 
    {
        this.position = new p5.Vector(x, y);
        this.velocity = new p5.Vector(1, 0);
        this.acceleration = new p5.Vector(0, 0);
        this.mass = mass;
        this.colour= color;
    };
      
    Mover.prototype.applyForce = function(force) 
    {
        var f = PVector.div(force,this.mass);
        this.acceleration.add(f);
    };
      
    Mover.prototype.update = function() 
    {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    };
    
    Mover.prototype.display = function() 
    {
        noStroke();
        fill(this.colour);
        ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
    };
    
    var movers = [];
    var attractor = new Attractor();
    
    for (var i = 0; i < 10; i++) 
    {
        var x = random(color);
        movers[i] = new Mover(random(0.1, 2), random(width), random(height), 
        color(0, random(0,85), random(100,255)));
    }


//generating spaceship
    var Ship = function() {
        this.position = new PVector(width/2, height/2);
        this.velocity = new PVector(3, 0);
        this.acceleration = new PVector(0, 0);
        this.topspeed = 3;
        this.xoff = 1000;
        this.yoff = 0;
        this.r = 5;
    };
    
    Ship.prototype.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    };
    
    Ship.prototype.applyForce = function(force) {
        this.acceleration.add(force);
    };
    
    Ship.prototype.turnLeft = function() 
    {
        var left = p5.Vector.get(this.velocity);
        left.rotate(-PI/4);
        this.applyForce(left);
    };
    
    Ship.prototype.turnRight = function() 
    {
        var right = p5.Vector.get(this.velocity);
        right.rotate(PI/4);
        this.applyForce(right);
    };
    
    Ship.prototype.Thrust = function() 
    {
        var thrust = p5.Vector.get(this.velocity);
        this.acceleration(thrust);
    };
    
    Ship.prototype.display = function () 
    {
        var angle = this.velocity.heading();
        
        stroke(0, 0, 0);
        strokeWeight(2);
        fill(127, 127, 127);
        pushMatrix();
            rectMode(CENTER);
            translate(this.position.x, this.position.y);
            // Step 3:
            rotate(angle);
            // draw the ship
            fill(212, 197, 197);
            ellipse(0, 109, 22, 95);
            //stripe
            fill(235, 240, 245);
            ellipse(0, 109, 22, 6);
            fill(27, 57, 209);
            ellipse(0, 113, 22,2);
            ellipse(0, 106, 22,1);
            //engine things
            fill(72, 72, 224);
            ellipse(0, 89, -10, 23);
            ellipse(-17, 149, 7, 37);
            ellipse(0, 156, 7, 37);
            ellipse(17, 149, 7, 37);
        popMatrix();
    };
    
    Ship.prototype.checkEdges = function () {
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



//background
    var Background = function()
    {
        
    };
    Background.prototype.display = function()
    {
        background(7, 3, 26);
        noStroke();
        fill(5, 3, 31);
        rect(200,75,400,50);
        fill(5, 3, 37);
        rect(200,125,400,50);
        fill(4, 3, 41);
        rect(200,175,400,50);
        fill(3, 3, 47);
        rect(200,225,400,50);
        fill(3, 3, 55);
        rect(200,275,400,50);
        fill(2, 3, 61);
        rect(200,325,400,50);
        fill(1, 3, 70);
        rect(200,375,400,50);
        
        strokeWeight(3);
        stroke(250, 245, 218);
        point(200,154);
        point(108,93);
        point(306,71);
        point(346,8);
        point(39,171);
        point(26,33);
        point(39,48);
        point(339,117);
        point(346,141);
        point(223,36);
        strokeWeight(2);
        stroke(158, 148, 106);
        point(255,210);
        point(108,221);
        point(150,247);
        point(79,258);
        stroke(87, 79, 49);
        point(349,279);
        point(140,349);
    };



//outputting everything
var ship = new Ship();
var back = new Background();

    //controls
    keyPressed = function()
    {
        if (keyCode === LEFT)
        {
            ship.turnLeft();
        }
        else if (keyCode === RIGHT)
        {
            ship.turnRight();
        }
        else if (keyCode === 90)
        {
            //ship.Thrust();
            fill(240, 250, 250);
            text("Zooooooooom",200,50,200,50);
        }
        else if (keyCode === UP)
        {
            fill(240, 250, 250);
            text("Nope not this button...",200,50,200,50);
            //setTimeout(3000);
        }
        else if (keyCode === DOWN)
        {
            fill(240, 250, 250);
            text("Nope not this button...",200,50,200,50);
            //setTimeout(3000);
        }
    };

function draw() {
    back.display();
    //attractor.display();
    for (var i = 0; i < movers.length; i++) {
        var force = attractor.calculateAttraction(movers[i]);
        movers[i].applyForce(force);
        movers[i].update();
        movers[i].display();
    }
    ship.update();
    ship.checkEdges();
    ship.display();
};
