var r= 101;
var b= 114;

function preload() {
  //soundFormats('mp3', 'ogg');
  
  mySound = loadSound('mySound.wav');
}

function mousePressed() {
  mySound.play();
  
}


function setup() {
  createCanvas(500, 500);
}



function draw() { 
  
  
  
  //background 
  r = map (mouseX,0,600,0,114);  
  background (r,101,b);
  //(44, 145, 52);
  
  
  //ear for the left 
  push();
  fill(231, 240, 58);
  triangle(345, 420, 388, 247,190, 150);
  pop();

  
  
  //right ear 
  push();
  fill(231, 240, 58);
  translate(width/2, height/11);
  // (225,155,115,141,145,189);
  triangle(255,133,225,241,145,189);
  //rotate(PI/8)
  //triangle(245, 275, 358,220, 186, 175);
  pop();
  

 //body
  push();
  fill(231, 240, 58);
  ellipse(366,490, 230); 
  pop();
  
  //face 
  push ()
  fill (231, 240, 58);
  ellipse(366,335, 240);
  pop();
  
  
  // below face
  push();
  noStroke(0);
  //fill(255)
  fill (231, 240, 58);
  ellipse(366,400, 180);
  pop();

  //left eye 
  push();
  fill (0);
  //(150, 99, 47);
  strokeWeight(2);
  stroke(158, 91, 40);
  ellipse(310, 313, 36, 36);
  pop();
  
  push()
  fill(255);
  noStroke(0);
  ellipse(304, 305, 15, 15);
  pop();

  //right eye
  push();
  fill(0)
  strokeWeight(2);
  stroke(158, 91, 40);
  ellipse(410, 313, 36, 36);
  pop();
  
  push();
  fill(255);
  noStroke(0);
  ellipse(404, 305, 15, 15);
  pop();

  //nose
  push();
  fill (143, 95, 46);
  strokeWeight(1);
  ellipse(360, 346, 15, 10);
  pop();

  //mouth
  push();
  fill(245, 125, 118);
  noStroke();
  stroke(237, 136, 130);
  strokeWeight(1);
  ellipse(372, 390, 40, 40);
  pop();
  
  //left cheek 
  push();
  fill(227, 79, 45);
  noStroke(0);
  ellipse(285, 364, 33, 33);
  pop();
  
  //right cheek
  push();
  fill(227, 79, 45);
  noStroke(0);
  ellipse(450, 364, 33, 33);
  pop();
  
  //left hand 
  push();
  fill (231, 240, 58);
  translate(width/-40, height/100);
  //rotate(PI/2);
  ellipse(270,469, 77,55);
  pop();

  
  
  if (mouseX>100) {  
    fill(255,0,0); //1
    ellipse(100, 246, 51,51); //1
      
            
  fill(0);//2
  ellipse(100, 246, 22, 22); //2
    
    //half white 
    push(0);
    noStroke(0);
    fill(255);
   arc(100, 246, 50,50, 0,PI+ QUARTER_PI, CHORD);
     pop();
    
    
    //ellipse inside 
    push();
    fill(255,0,0); //1
    noStroke(0);
    ellipse(100,246, 51,15);
    ellipse(99,240,46,15);
    ellipse(99,244,45,25);
    ellipse (85,244,20,20);
    ellipse(93,239,30,30);
    ellipse(99,242,45,15);
    ellipse(103,246, 42,12);
    
    ellipse(78, 250, 7, 7);
    ellipse(121,249, 7, 7);
    ellipse(83, 236, 12, 7);
    pop();
    
    
    fill(0);
    ellipse(100,255,13,13);//4
    
    push();
    fill(0);
    rect(90, 253, 33,3);//1
    rect(90, 251, 33,3);//2
    rect(75, 252, 39,4);//3
    pop();
    
    fill(255);
    ellipse(100,255,10,10);//5
    
    
    
    
    fill(255);
    ellipse (100,255,5,5); //6
    
    
    
    
  }
  else if (mouseX>100) {
    fill(0,0,0);
    ellipse (100,246,59,59);
  }
  
  
  //push();
    //fill(255);//3
    //noStroke(0);//3
    //ellipse(116,252,22,22);//3
    //fill(255);//3
    //noStroke(0);//3
    //ellipse(111,258,22,22);//3
    //fill(255);//3
    //noStroke(0);//3
    //ellipse(105,258,22,22);//3 
    //pop();
  
  
}



