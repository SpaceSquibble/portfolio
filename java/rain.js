new p5();

var xPositions = [5,100,150,200,250,300,350,5,100,150,200,250,300,350,5,100,150,200,250,300,350,5,100,150,200,250,300,350];
var yPositions = [40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270];
var yPositions2 = [40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270];
var yPositionsHolder = [40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270,40,60,0,300,8,179,270];

function setup(){
  createCanvas(400,400);
}

function draw(){
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, i*42, i+150);
        
        image(getImage("avatars/aqualine-seed"),xPositions[i]+10, yPositions2[i]-200, 30, 30);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        yPositions2[i] += 5;
        
        if (yPositions[i]>400)
        {
            yPositions[i] = yPositionsHolder[i];   
        }
        if (yPositions2[i]>600)
        {
            yPositions2[i] = yPositionsHolder[i]-200;   
        }
    }
}
