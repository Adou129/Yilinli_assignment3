
function setup() {
  createCanvas(1000, 1000, WEBGL);
  
}
function draw() {
  background(146, 209, 196);
  rotateX(millis() / 1000);
  noStroke();
  rect(-25,50,50,200);
  box(50,50,50,1000);
  
}

// function draw() {
//     background(146, 209, 196);
//     rotateY(millis() / 1000);
//     cylinder(20, 75, detailX.value(), 1);
//   }