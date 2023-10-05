function setup() {
  createCanvas(480, 420);
  colorMode(HSB);
  background(220,100,100);  //blue
}

function draw() {
 
  if (mouseIsPressed) {
    stroke(100,100,0);  //black
      fill(315,100,100);    //hot pink
      ellipse(mouseX, mouseY, 80, 80);
  } else {
        noStroke();
        fill(120,100,100);  //green
  }
  
}
