let ourFont;


function setup() {
    createCanvas(1000, 1000, WEBGL);
    noFill();
    
  }

  function draw() {
    background(200);

    // rotateY(PI / 3);
    // rotateX(PI / 4.0);
    fill(120)
    noStroke();
    cylinder(30, 140);
    circle(0,110,40)
    noFill();
    stroke(170);
    let rad = millis() / 1000;

    let ct = cos(rad);
    let st = sin(rad);

    applyMatrix(
      ct, 0.0,  st,  0.0,
      0.0, 1.0, 0.0,  0.0,
      -st, 0.0,  ct,  0.0,
      0.0, 0.0, 0.0,  1.0
    );
    stroke(300);
    box(300);
  }