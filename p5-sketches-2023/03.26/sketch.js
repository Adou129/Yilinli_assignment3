
let ourFont;

function preload(){
    ourFont = loadFont('Cinzel-VariableFont_wght.ttf')
}
function setup() {
  createCanvas(1000, 1000,WEBGL);
  textFont(ourFont);
  textSize(300);
}

function draw() {
  background(0);
  noStroke();
  fill(240, 150, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
//   box(45, 45, 45);
//   box(100,200,200);
text("! ",100,200,100,300);
  
}