new p5();

function setup(){
  createCanvas(400,400);
}

function draw(){
    background(182, 250, 250);

    //roof
    fill(174, 180, 214);
    triangle(200, 28, 350, 150, 50, 150);

    //house
    fill(255, 255, 255);
    rect(60, 150, 280, 207);
    for (var q=60;q<327;q+=70)
    {
        for(var p=145;p<370;p+=44)
        {
            fill(139, 150, 153);
            rect(q,p,70,96);
        }
    }

    //windows
    for (var x=85;x<283;x+=90)
    {
        for(var y=172;y<307;y+=86)
        {
            fill(191, 238, 255);
            rect(x, y, 50, 50);
        }
    }
}
