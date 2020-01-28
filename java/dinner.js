new p5();

function setup(){
  createCanvas(400,400);
}

function draw(){
// wooden table
background(250, 232, 220); 
// plate
//ellipse(200, 200, 350, 350); //big circle
//ellipse(200, 200, 300, 300); //smol circle

//food
///bone
stroke(230, 219, 207);
fill(230, 219, 207);
ellipse(85,190,50,50);
ellipse(90,200,50,50);
rect(100,177,200,35);
//bone shading
stroke(219, 203, 192);
fill(219, 203, 192);
rect(109,196,61,15);
noFill();
strokeWeight(10);
arc(90,-17,136,471,71,107);
strokeWeight(8);
arc(89,240,61,139,284,324);
//bone highlight
stroke(245, 233, 215);
ellipse(77,182,4,4);
///meat
strokeWeight(1);
stroke(179, 102, 66);
fill(179, 102, 66);
ellipse(245,195,196,127);
//meat shading
strokeWeight(9);
stroke(173, 94, 60);
fill(173, 94, 60);
triangle(328,168,273,231,171,205);
stroke(168, 82, 59);
fill(168, 82, 59);
triangle(325,201,233,244,170,213);
stroke(168, 76, 45);
noFill();
arc(245,22,316,471,60,122);
strokeWeight(8);
stroke(156, 81, 53);
fill(156, 81, 53);
triangle(294,245,331,208,240,220);
triangle(196,244,166,213,215,232);
triangle(339,194,328,220,253,232);
stroke(166, 75, 64);
fill(166, 75, 64);
triangle(251,233,229,255,193,237);
triangle(336,200,327,171,277,213);
stroke(153, 73, 49);
fill(153, 73, 49);
triangle(257,233,277,245,236,253);
triangle(337,200,333,183,312,226);
triangle(151,201,159,217,171,213);
//meat highlights
stroke(189, 123, 79);
fill(189, 123, 79);
triangle(265,147,197,146,187,181);
triangle(238,147,179,162,182,181);
stroke(199, 152, 101);
ellipse(207,155,8,6);
ellipse(232,150,14,1);
}
