var input;
let soundFile;
let hasPlayed = false;

let mysound;
let Played = false;

let pageNum = 1;
let numPages= 6;


// for the images to be added
let img;
let posters; 
let screen;
let photo;




let lightstick;

 
function preload() { 
 
  soundFormats('mp3');
  soundFile = loadSound('ATEEZ - WONDERLAND.mp3');

  
  img = loadImage ("ateez_room.jpg" ) // page 2
  posters= loadImage ("room_posters.jpg") // page3
  screen = loadImage("light_tiny.jpg") // page 4
  photo= loadImage("ateez_group.jpg ") //page 5 
  

  soundFormats('mp3'); 
  mySound= loadSound('ATEEZ - 친구 (THANK U).mp3'); //5 
    
  
  lightstick= loadImage("lightstick_ateez.png")// page 4 
  
}
  
  



function setup() {
  createCanvas(400, 400);
  
  input = createInput('type thoughts');
  
  
  
}

function draw() {
 
  if (pageNum == 1){
    
    
    push();
    background(94, 95, 110);
    fill(255);
    ellipse(350, 46, 66, 66); // moon
    pop();
        
    
    
    push();
    fill(6, 122, 68);
    rect(1, 360, 400, 400); // green grass    
    pop(); 
    
    
    push();
    fill(222, 154, 131);
    rect(1, 196, 90, 55);// forming the roof 1
    rect(1,165,90,55); // forming the roof 2
    rect(1,129,90,55); //forming the roof 3
    rect(1,103,78,55); //forming the roof 4
    pop();
    
    push();
    fill(222,154,131);
    noStroke();
    rect(1,165,90,55); //1
    rect(1,130,90,55); //2
    rect(1,196,90,55); //3
    pop();
    
    push();
    fill(222, 154, 131);
    triangle(20, 250, 150,250, 78, 100); //roof 
    pop();
    
    push();
    fill(221, 162, 242);
    square(21, 250, 126); // the house part 
    pop(); 
  
    push();
    fill(221,162,242);
    //noStroke();
    rect(-18, 280, 39, 55); //1
    rect(-18,249,39,55); //2
    rect(-18,321,39,55); //3
    pop();
    push();
    fill(221,162,242);
    noStroke();
    rect(-19,289,39,55); //blocks the lines
    pop();
    
    push();
    fill(255);
    square(34,290,31); // window 
    pop();
    
    push();
    fill(175, 148, 120 );
    rect(85, 295, 55, 80);   //door 
    pop();
 
   
    push();
    fill(214, 174, 100 );
    circle(89, 340, 10);
    pop();
    
    
  }
  
  
   
  else if (pageNum == 2) {
    
   
      
    if (!soundFile.isPlaying() && !hasPlayed) {
    soundFile.play();
    hasPlayed = true;
   
  }
        
  push();
  image(img,0,0,400,400); 
  noStroke(0);
  fill(252, 197, 194);
  ellipse(189, 230, 210, 110);
  pop();
    
  push();
  fill(0)
  textSize(18);
  textStyle(BOLDITALIC);
  text('Welcome To My Room!!',86,235);
  pop(); 
    
  
    
  }
  else if (pageNum == 3){
    
    
    push();
    image(posters,0,0,400,400);  //image bacground 
    pop();
    
    push();
    fill(0);
    square(110, 70, 120, 20);// back of the hair 
    pop();
    
    push();
    fill(0);
    square(110, 107, 120, 20);// added more back of the hair
    pop();
  
   
    push();
    fill(212, 193, 133);
    rect(147, 160, 45, 45); // neck 
    ellipse(170,120,110,145); //head 
    pop();  
    
    
    push();
    fill(0);
    ellipse(120, 130, 20, 98); // hair on the left side 
    pop();
    
    push();
    fill(0);
    ellipse(220, 130, 20, 98); // hair on the left side 
    pop();

    
    
    
    push();
    fill(0);
    translate(width / 2, height / 2);
    rotate(PI / 1.0);
    ellipse(53, 120, 60, 65); //1 bangs 
    ellipse(5,120,60,65); //2  bangs 
    ellipse(37, 128, 55, 55); //3   bangs 
    pop();
 
    
    push();
    fill(255);
    strokeWeight(1);
    stroke(6);
    rect(124, 120, 90, 58);  // rect 
    pop();
    
    push();
    fill(237, 235, 230);
    rect(164, 100, 12, 25); //tape 
    pop();
    
    push();
    fill(255);
    stroke(8);         
    ellipse(148, 145, 36, 22); //eyes
    ellipse(193,145,36,22); ///eyes 
    pop();
    
    push();
    fill(255);
    ellipse(207,160,10,18);  //happy tear for this concert
    pop();    
    
    push();
    fill(255);
    noStroke(0);
    circle(204, 150, 8);
    pop();
    
    
    push();
    fill(135, 84, 16);
    rect(1, 360, 400, 400); //table 
    pop();
  
    push();
    fill(175,181,245);
    rect(105, 201, 55, 85, 50); //left arm 
    pop();
    
    push();
    fill(175,181,245);
    rect(185,201,55,85,50);   //right arm
    pop();
    
    
    push();
    fill(176, 181, 245);
    square(134, 201, 75); //shirt 
    pop();
  
    
    push();
    fill(212, 193, 133);
    ellipse(170, 203, 50,13); // skin 
    pop();
    
    push();
    fill(212,193,133);
    noStroke(0);
    ellipse(170,199,44,8); //skin 
    pop();
    
    
    
    push();
    fill(181, 173, 172);
    rect(95, 227, 170, 120); // computer screen 
    rect(95, 350, 170, 20); //bottom screen 
    pop();
    
    push();
    fill(156, 144, 143);
    rect(99,360,22,4); // plug in 
    pop();
    
    
    push();
    fill(0);
    rect(105, 360, 10, 55); // cable 
    pop();
    
    
    
  }
  else if (pageNum == 4){

    push();
    image(screen,0,0,400,400);
    pop();

    
   push();
   fill(0);
   textSize(18);
   textStyle(BOLDITALIC);
   text('Online Concert!',190,90);
   pop();  
    
    push();
    image(lightstick,mouseX,mouseY,70,150); // user to use to cheer also as if they     were watching the concert. 
    pop();
    
  
   push();
   text(input.value(), 50,60);  // this is for user to pretend they are watching the online concert and saying things like it's cool. 
   pop();
     
    
  }
    
    else if (pageNum == 5){
    
    push();
    background(91, 131, 168);
    fill(227, 177, 77);
    ellipse(350, 355, 66, 66); // sun
    pop();
        
    
    
    push();
    fill(6, 122, 68);
    rect(1, 360, 400, 400); // green grass    
    pop(); 
    
    
    push();
    fill(222, 154, 131);
    rect(1, 196, 90, 55);// forming the roof 1
    rect(1,165,90,55); // forming the roof 2
    rect(1,129,90,55); //forming the roof 3
    rect(1,103,78,55); //forming the roof 4
    pop();
    
    push();
    fill(222,154,131);
    noStroke();
    rect(1,165,90,55); //1
    rect(1,130,90,55); //2
    rect(1,196,90,55); //3
    pop();
    
    push();
    fill(222, 154, 131);
    triangle(20, 250, 150,250, 78, 100); //roof 
    pop();
    
    push();
    fill(221, 162, 242);
    square(21, 250, 126); // the house part 
    pop(); 
  
    push();
    fill(221,162,242);
    //noStroke();
    rect(-18, 280, 39, 55); //1
    rect(-18,249,39,55); //2
    rect(-18,321,39,55); //3
    pop();
    push();
    fill(221,162,242);
    noStroke();
    rect(-19,289,39,55); //blocks the lines
    pop();
    
    push();
    fill(255);
    square(34,290,31); // window 
    pop();
    
    push();
    fill(175, 148, 120 );
    rect(85, 295, 55, 80);   //door 
    pop();
 
   
    push();
    fill(214, 174, 100 );
    circle(89, 340, 10);
    pop();
    
    
  }

  else if (pageNum == 6){
    
    push();
    image(photo,0,0,400,400);
    pop();
    
    
    push();
    fill(27, 76, 181);
    textSize(35);
    textStyle(BOLDITALIC);
    text("Go listen to Ateez!", 60, 197);
    pop();
 
    push();
    fill(72, 176, 155)
    textSize(25);
    textStyle(BOLDITALIC);
    text("BE AN ATINY TOO!!!!", 130,230);
    
    if (!mySound.isPlaying()&& !Played)  {
      mySound.play();
      Played = true; 
    }
    
    
    }
  
  
  
  
  
  
  
  
}
  
  function mousePressed(){
  //if the numerical value of the current page is less than the total number of pages, we can increment the pageNum variable's value and move to the next page
  if (pageNum < numPages){
    pageNum++;
  }
  
  //otherwise, reset to first page
  else{
    pageNum = 1;
  }
  

  
  }