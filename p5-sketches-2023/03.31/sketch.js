function setup(){
    createCanvas(1000,1000,WEBGL)
    background(235, 145, 15);
}




let value = 0;
function draw() {
    noStroke();
  fill(value);
  rect(20,50,50,200)
  rect(20, 270, 50, 50);
  rect(-80,50,50,200)
  rect(-80, 270, 50, 50);
 
}
function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}