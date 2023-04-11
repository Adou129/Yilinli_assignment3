let ourFont;

function preload(){
    ourFont = loadFont('SecularOne-Regular.ttf')
}

function setup() {
    createCanvas(1000, 1000, WEBGL);
    background(150);
    textFont(ourFont);
    textSize(width / 2);
    textAlign(CENTER, CENTER);
  }

  function draw() {

    let time = millis();
    rotateX(time / 10);
    rotateZ(time / 1000);
    fill(0, 102, 153, 51)
    text('!', 0, 0);
  }