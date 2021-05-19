let numDrops = 100;
let drops = [];


function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < numDrops; i++){
   drops[i] = new rainDrop(1, 0);
  }
  
}
function draw() {
  background(0)
  
  for (let i = 0; i < numDrops; i++){
    drops[i].update();
    drops[i].show();
  }
  
  push(); //  this is the snow for the ground  
  noStroke();
  fill(224, 222, 222);
  rect(1, 310, 398, 55);
  pop(); 
  
  push(); //the line of the window 
  noStroke(0);
  fill(163, 148, 106);
  rect(180, -5, 15, 410);
  rect(1,-5,400,15)
  pop()
   
  
  push(); // this is for the middlw line for the window 
  noStroke();
  fill(163,148,108);
  rect(-5,180,410,20)
  pop();
  
  
  push(); // the end of the window 
  noStroke();
  fill(163,148,108);
  rect(1,350,400,100);
  pop();
  
  push();
  noStroke(); 
  fill(255);
  ellipse(100, 289, 57, 50); // bottom part of the snowman 
  ellipse(100,255,42,42); // second part at the top 
  ellipse(100,230,30,30); // the top part 
  
  push();
  fill(0);
  ellipse(95,223,5,5); // left eye 
  ellipse(105,223,5,5); // right eye 
  ellipse(95,235,2,2); // left side of mouth 
  ellipse(90,233,2,2);// top left 
  ellipse(100,236,2,2); 
  ellipse(106,236,2,2);
  ellipse(110,233,2,2);
  pop(); 
  
  
  push();
  fill(33, 28, 23);
  ellipse(101,270,7,7);
  ellipse(101,260,7,7);
  ellipse(101,250,7,7);
  pop();
  

    
  push(); // nose
  fill(252, 158, 43);
  ellipse(99,230,4,4);
  pop();
  
  
}
  


  class rainDrop{
  
  constructor(gravity, wind){
    
    this.xSpeed = wind;
    this.ySpeed = gravity + random(0,2);
    this.x = random(-2*this.xSpeed*(height/this.ySpeed),width-this.xSpeed*(height/this.ySpeed));
    this.y = random(0, -height);
    
  }
  update(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
   
    if (this.y > height){
      this.y = random(0, -height);
      this.x  = random(-2*this.xSpeed*(height/this.ySpeed),width-this.xSpeed*(height/this.ySpeed));
    }
  }
  show(){ 
    noStroke();
    ellipse(this.x, this.y, 4,4);
    
  }

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}