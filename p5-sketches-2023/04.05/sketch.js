
function setup() {
  createCanvas(1000, 1000, WEBGL);
  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  let step = frameCount % 80;
  background(200,400,300);

  translate(50, 50);
  noStroke();
  fill(242, 225, 160)
  // Equivalent to scale(x, y);
  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  rect(0, 0, 1000, 4000);
  square(0,3050,1000,1000);
  rect(-3500,-2000,5000,1500);
  square(-7050,-2000,1500,1500);
}