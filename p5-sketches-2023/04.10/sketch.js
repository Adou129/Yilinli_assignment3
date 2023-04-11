let camera;
let ourFont;

function preload(){
    ourFont = loadFont('SecularOne-Regular.ttf')
}
function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(100);
  camera = createCamera();
  pg = createGraphics(300, 100);
  pg.textSize(75);
  textFont(ourFont);
    textSize(100);
    // textAlign(CENTER, CENTER);
}

function draw() {
  background(118, 245, 234);

  camera.lookAt(0, 0, 0);

  camera.setPosition(sin(frameCount / 60) * 200, 0, 100);
  fill(118, 238, 245)
  circle(0, 45, 20);
  cone(5,60)
 

  translate(0, 50, 0);
  rotateX(HALF_PI);
  pg.background(255,100,200);
  noStroke();
  pg.text('iiiiiiiiiiiiiiiiiiii', 0, 100);
  texture(pg);
  translate(-10, 0, sin(frameCount / 60) * 90);
  box(250, 150, 200);
  
  let time = millis();
    rotateX(time / 1000);
    rotateZ(time / 1000);
    fill(118, 245, 234)
    text('!', 0, 0);
}