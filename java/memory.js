// Scroll down to "About" for instructions on this project ↓
cursor("crosshair"); //makes the cursor look cool

var Tile = function(x, y, face) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.face = face;
    this.isFaceUp = false;
    this.isMatch = false;
};

Tile.prototype.draw = function() {
    fill(93, 88, 135);
    stroke(255, 255, 191);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.width, 10);
    if (this.isFaceUp) {
        image(this.face, this.x, this.y, this.width, this.width);
    } else {
        image(getImage("cute/Star"), this.x+10, this.y-5, this.width-20, this.width);
    }
};

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.width  &&
        y >= this.y && y <= this.y + this.width;
};

// Global config
var NUM_COLS = 5;
var NUM_ROWS = 4;

// Declare an array of all possible faces
var faces = [
    getImage("avatars/leafers-seed"),
    getImage("avatars/leafers-seedling"),
    getImage("avatars/leafers-sapling"),
    getImage("avatars/leafers-tree"),
    getImage("avatars/leafers-ultimate"),
    getImage("avatars/marcimus"),
    getImage("avatars/mr-pants"),
    getImage("avatars/mr-pink"),
    getImage("avatars/old-spice-man"),
    getImage("avatars/robot_female_1")
];

// Make an array which has 2 of each, then randomize it
var possibleFaces = faces.slice(0);
var selected = [];
for (var i = 0; i < (NUM_COLS * NUM_ROWS) / 2; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = floor(random(possibleFaces.length));
    var face = possibleFaces[randomInd];
    // Push twice onto array
    selected.push(face);
    selected.push(face);
    // Remove from array
    possibleFaces.splice(randomInd, 1);
}

// Now shuffle the elements of that array
var shuffleArray = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var ind = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
};
shuffleArray(selected);

// Create the tiles
var tiles = [];
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        var tileX = i * 78 + 10;
        var tileY = j * 78 + 80;
        var tileFace = selected.pop();
        tiles.push(new Tile(tileX, tileY, tileFace));
    }
}

var score = 20;
var numTries = 0;
var numMatches = 0;
var flippedTiles = [];
var delayStartFC = null;

mouseClicked = function() {
    for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        if (tile.isUnderMouse(mouseX, mouseY)) {
            if (flippedTiles.length < 2 && !tile.isFaceUp) {
                tile.isFaceUp = true;
                flippedTiles.push(tile);
                if (flippedTiles.length === 2) {
                    numTries++;
                    score = score - 1;
                    if (flippedTiles[0].face === flippedTiles[1].face) {
                        flippedTiles[0].isMatch = true;
                        flippedTiles[1].isMatch = true;
                        flippedTiles.length = 0;
                        numMatches++;
                    }
                    delayStartFC = frameCount;
                }
            } 
            loop();
        }
    }
};

draw = function() {
    background(245, 220, 95);
    if (delayStartFC && (frameCount - delayStartFC) > 30) {
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            if (!tile.isMatch) {
                tile.isFaceUp = false;
            }
        }
        flippedTiles = [];
        delayStartFC = null;
        noLoop();
    }
    
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].draw();
    }
    
    fill(23, 21, 66);
    textSize(25);
    textFont(createFont("impact"));
    text("Can you match all the creatures?", 32, 39);
    textSize(20);
    textFont(createFont("times"));
    text("Score: " + score, 12, 70);
        
    
    if (numMatches === tiles.length/2) {
        background(45, 40, 84);
        
        image(getImage("cute/Star"), 22, -42, 90, 144);
        image(getImage("cute/Star"), 127, -103, 90, 144);
        image(getImage("cute/Star"), 210, 3, 90, 144);
        image(getImage("cute/Star"), 309, -83, 90, 144);
        image(getImage("cute/Star"), -49, 78, 90, 144);
        image(getImage("cute/Star"), 367, 67, 90, 144);
        image(getImage("cute/Star"), 289, 194, 90, 144);
        image(getImage("cute/Star"), 29, 173, 90, 144);
        image(getImage("cute/Star"), -18, 281, 90, 144);
        image(getImage("cute/Star"), 165, 257, 90, 144);
        image(getImage("cute/Star"), 307, 318, 90, 144);
        
        for(var i = 0; i<30; i++){
            var r = random(15,55);
            image(getImage("space/star"), random(0,400), random(0,400), r, r);
        }
        
        fill(245, 220, 95);
        strokeWeight(5);
        rect(60,132,268,141);
        
        fill(23, 21, 66);
        textSize(20);
        textFont(createFont("times"));
        text("You found them all in " + numTries + " tries!", 75, 168);
        text("Your final score is", 121, 227);
        text(score + "!", 182, 253);
    }
};

noLoop();
