new p5();

var xPos = 224;
var yPos = 114;
var x = 185;
var y = 259;
var s = 10;
var n = 0;
var j = 0;
var h = 0;
var k = 0;
var p1=257;
var p2=30;

function setup(){
  createCanvas(400,400);
}

function draw() {
    noStroke();
    background(29, 40, 115);
    
    fill(255, 242, 0);

    ellipse(70, 90, 10, 10);
    ellipse(315, 141, 10, 10);
    ellipse(187, 260, 10, 10);
    ellipse(122, 156, 15, 15);
    ellipse(292, 309, 15, 15);
    ellipse(20, 287, 15, 15);
    ellipse(339, 25, 15, 15);
    
    xPos-=2;
    yPos++;
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos-79, yPos+112, 10, 10);

    x+=3;
    y+=1;
    ellipse(x, y, 10, 10);
    ellipse(x-20, y-124, 10, 10);
    
    //moon  aka pacman
    p1-=3;
    p2++;
    ellipse(p1, p2, 15, 15);
  
    arc(262,66,50,50,-146,147);
    ellipse(300, 50, 50, 50);
    
    background(29, 40, 115);
    ellipse(280, 50, 40, 40);
    
    fill(5, 14, 41);
    
    rect(0,375,400,35); //floor
    
    //sricks
    rect(50,375,4,-125);
    rect(150,375,4,-125);
    rect(250,375,4,-125);
    rect(350,375,4,-125);
    
    //side beams
    rect(330,263,40,4); //top
    rect(234,263,40,4);
    rect(132,263,40,4);
    rect(33,263,40,4);
    rect(335,275,30,4); //bottom
    rect(238,275,30,4);
    rect(138,275,30,4);
    rect(39,275,30,4);
    
    noFill();
    stroke(4, 9, 43);
    arc(1,278,100,30,0,180); //top
    arc(104,278,100,30,0,180);
    arc(203,278,100,30,0,180);
    arc(302,278,100,30,0,180);
    arc(400,278,100,30,0,180);
    arc(1,294,100,30,0,180); //bottom
    arc(104,294,100,30,0,180);
    arc(203,294,100,30,0,180);
    arc(302,294,100,30,0,180);
    arc(400,294,100,30,0,180);
    arc(203,285,100,30,0,180);//other
    arc(303,301,100,30,0,180);
    arc(1,285,100,30,0,180);
};
