//drag the mouse to look around!
function setup() {
    createCanvas(1000, 1000, WEBGL);
    perspective(PI / 4.0, width / height, 0.1, 1000);
    
  }
  function draw() {
    background(200);
    orbitControl();
    normalMaterial();
  
    rotateX(-0.3);
    rotateY(-0.2);
    translate(0, 0, 50);
  
    push();
    translate(-15, 0, sin(frameCount / 30) * 95);
    cone(40, 300);
    pop();
    push();
    translate(-15, 160, sin(frameCount / 30 + PI) * -95);
    // box(100);
    sphere(30);
    pop();
  }