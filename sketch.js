let angle;
let rotSpeed;


function setup() {
  // Create a canvas that fills the entire browser window
  
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle = 0;
  rotSpeed = random(-1 , 3);
  

}

function draw() {
  // Set background to black
  background(0);

  push();
  translate(width/2, height/2);
  let circleSize = 150;
  stroke('purple');
  noFill();
  circle(0, 0, circleSize);
  rotate(angle);
  line(0, 0, circleSize/2, 0);
  pop();

  angle += rotSpeed;
}