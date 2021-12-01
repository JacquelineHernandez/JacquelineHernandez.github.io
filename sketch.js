var angle=0
var spaceStar;

function preload(){
  spaceStar=loadImage("purple_stars.jpeg");
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  noStroke();
  
  
  //having trouble with the img being in the back
  push();
  translate(0,0,-700);
  texture(spaceStar);
  plane(1000);
  pop();  
  
  
  let adjustedMouseX = mouseX-width/2;
  let adjustedMouseY = mouseY-height/2;
  camera(adjustedMouseX, adjustedMouseY, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
  
  

  //lighting 
  ambientLight(130);
 directionalLight(255,255,255,0,0,10);
  
  //point light where the direction of light goes 
  pointLight(130,200,270,70,100,90);
  
  //moon shape
  push();
  //further away
  translate(0,0,-190);
  rotateY(angle);
  ambientMaterial(180, 181, 184);
  translate(90,0,0)
  sphere(90);
  fill(163, 175, 194);
  noStroke();
  angle-=0.004
  pop();
  
   // the shape that is going around the sphere. 
  push();
  rotateY(angle);
  normalMaterial();
  ambientMaterial(117, 120, 150);
  noStroke();
  torus(110,10);
  pop();
 
  
  
}