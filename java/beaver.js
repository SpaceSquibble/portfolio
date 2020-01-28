new p5();

function setup() {
  createCanvas(400, 400);
}

//Brown sticks: give you one point
//red dots: take away one point
//press space to Hop! Let go to Fall
//get 15 points to win!!

//added obstacles that take off a point every time you hit one
// added "you win" screen when the player get more than 15 points

var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = ![fall](https://user-images.githubusercontent.com/54996465/73232261-a9ca0680-4150-11ea-8460-2cf35c0edf0b.png)
                       ;
    this.sticks = 0;
    this.deaths = 0;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = ![jump](https://user-images.githubusercontent.com/54996465/73232263-a9ca0680-4150-11ea-91d6-2f85b65d8bff.png)
                       ;
    this.y -= 5;
    fill(255, 255, 255);
    text("Hop!!",22,386);
};

Beaver.prototype.fall = function() {
    this.img = ![fall](https://user-images.githubusercontent.com/54996465/73232261-a9ca0680-4150-11ea-8460-2cf35c0edf0b.png)
                       ;
    this.y += 5;
    fill(255, 255, 255);
    text("Fall!!!",22,386);
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }
};

Beaver.prototype.checkForDeathGrab = function(death) {
    if ((death.x >= this.x && death.x <= (this.x + 40)) &&
        (death.y >= this.y && death.y <= (this.y + 40))) {
        death.y = -400;
        this.deaths--;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    noStroke();
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

var Death = function(x, y) {
    this.x = x;
    this.y = y;
};

Death.prototype.draw = function() {
    fill(245, 8, 8);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 10);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var deaths = [];
for (var i = 0; i < 40; i++) {  
    deaths.push(new Death(i * 40 + 300, random(20, 260)));
}

var grassXs = [];
for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
}

function draw() {
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(![grass](https://user-images.githubusercontent.com/54996465/73232262-a9ca0680-4150-11ea-9b61-72881ab404a9.png)
                       , grassXs[i], height*0.85, 20, 20);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
    
    for (var i = 0; i < deaths.length; i++) {
        deaths[i].draw();
        beaver.checkForDeathGrab(deaths[i]);
        deaths[i].x -= 1;
    }
    
    fill(0, 0, 0);
    textSize(18);
    text("Score: " + (beaver.sticks+beaver.deaths), 20, 30);
    text("Get 15 points to win!", 230,30);
    
    if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }
    
    if (beaver.sticks+beaver.deaths >= 15 && this.sticks[39].x < 0) {
        background(228, 232, 216);
        textSize(36);
        fill(0, 35, 87);
        text("YOU WIN!!!!", 100, 200);
    }else if (beaver.sticks+beaver.deaths < 15 && this.sticks[39].x < 0) {
        background(228, 232, 216);
        textSize(36);
        fill(0, 35, 87);
        text("YOU LOSE!", 100, 200);
    }
    
    if (keyIsPressed && keyCode === 0) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    beaver.draw();
};

/*
//Brown sticks: give you one point
//red dots: take away one point
//press space to Hop! Let go to Fall
//get 15 points to win!!

//added obstacles that take off a point every time you hit one
// added "you win" screen when the player get more than 15 points

var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("creatures/Hopper-Happy");
    this.sticks = 0;
    this.deaths = 0;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("creatures/Hopper-Jumping");
    this.y -= 5;
    fill(255, 255, 255);
    text("Hop!!",22,386);
};

Beaver.prototype.fall = function() {
    this.img = getImage("creatures/Hopper-Happy");
    this.y += 5;
    fill(255, 255, 255);
    text("Fall!!!",22,386);
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }
};

Beaver.prototype.checkForDeathGrab = function(death) {
    if ((death.x >= this.x && death.x <= (this.x + 40)) &&
        (death.y >= this.y && death.y <= (this.y + 40))) {
        death.y = -400;
        this.deaths--;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    noStroke();
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

var Death = function(x, y) {
    this.x = x;
    this.y = y;
};

Death.prototype.draw = function() {
    fill(245, 8, 8);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 10);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var deaths = [];
for (var i = 0; i < 40; i++) {  
    deaths.push(new Death(i * 40 + 300, random(20, 260)));
}

var grassXs = [];
for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
}

draw = function() {
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
        grassXs[i] -= 1;
        if (grassXs[i] <= -20) {
            grassXs[i] = width;
        }
    }
    
    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        sticks[i].x -= 1;
    }
    
    for (var i = 0; i < deaths.length; i++) {
        deaths[i].draw();
        beaver.checkForDeathGrab(deaths[i]);
        deaths[i].x -= 1;
    }
    
    fill(0, 0, 0);
    textSize(18);
    text("Score: " + (beaver.sticks+beaver.deaths), 20, 30);
    text("Get 15 points to win!", 230,30);
    
    if (beaver.sticks/sticks.length >= 0.95) {
        textSize(36);
        text("YOU WIN!!!!", 100, 200);
    }
    
    if (beaver.sticks+beaver.deaths >= 15 && this.sticks[39].x < 0) {
        background(228, 232, 216);
        textSize(36);
        fill(0, 35, 87);
        text("YOU WIN!!!!", 100, 200);
    }else if (beaver.sticks+beaver.deaths < 15 && this.sticks[39].x < 0) {
        background(228, 232, 216);
        textSize(36);
        fill(0, 35, 87);
        text("YOU LOSE!", 100, 200);
    }
    
    if (keyIsPressed && keyCode === 0) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    beaver.draw();
};
*/
