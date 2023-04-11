let pg;




function setup() {

  createCanvas(1000,1000,WEBGL)
//   canvas.style.border= "5px dotted pink"
  pg = createGraphics(200, 200);
  pg.textSize(100);
}

function draw() {

    pg.background(89, 222, 194);
    pg.text('!', 70, 100);

    rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
    texture(pg);
    // rotateX(0.5);
    // noStroke();
    box(width / 2);
  }




