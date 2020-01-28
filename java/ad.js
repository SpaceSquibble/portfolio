new p5();

var x = 0;
var speed = 3;

function draw(){
  background(255, 255, 255);
    fill(12, 31, 87);

    textSize(30);
    text("Leaf Buddy!", 110, 52);
    
    textSize(15);
    text("Leaf can give you infinite life!!",25,83);
    textSize(19);
    text("Makes you younger!!",25,114);

    x= x+speed;
    
    if (x>260)
    {
        speed= -4; 
    }
    if (x<-70)
    {
        speed= +4; 
    }

    image(getImage("avatars/duskpin-seedling"),x,135,250,250);
    rect(0,381,400,72);
    rect(0,0,400,16);
}
