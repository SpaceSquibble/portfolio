new p5();

function setup(){
  createCanvas(400,400);
  
  var answer = floor(random(1, 5));
}

function draw(){
  fill(0, 0, 0);
  ellipse(200, 200, 375, 375);

  fill(60, 0, 255);
  triangle(200, 104, 280, 280, 120, 280);

  fill(255, 255, 255);

  if (answer === 1) 
  {
      fill(60, 0, 255);
      triangle(200, 104, 280, 280, 120, 280);
      fill(255, 255, 255);
      text("YOU'RE", 183, 200);
      text("A CAT", 188, 229); 
  }
  else if (answer === 2) 
  {
      fill(222, 44, 53);
      triangle(200, 104, 280, 280, 120, 280);
      fill(255, 255, 255);
      text("YUP", 193, 213);
  }
  else if (answer === 3) 
  {
      fill(237, 95, 33);
      triangle(200, 104, 280, 280, 120, 280);
      fill(31, 13, 2);
      text("YEAH", 186, 200);
      text("OKAY", 188, 229); 
  }
  else if (answer === 4) 
  {
      fill(46, 230, 83);
      triangle(200, 104, 280, 280, 120, 280);
      fill(7, 26, 3);
      text("NEVER", 186, 216);
  }
  else
  {
      fill(255, 242, 0);
      triangle(200, 104, 280, 280, 120, 280);
      fill(20, 12, 2);
      text("TRY", 176, 200);
      text("AGAIN", 159, 229); 
  }
}
