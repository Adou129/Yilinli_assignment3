

function setup(){
    smooth();
    createCanvas(1000,1000,WEBGL);
    background(500, 200, 200);
    let p = createP('I am a dom element');
//   p.center();
  p.style('font-size', '50px');
  p.style('text-align', 'center');
  p.style('z-index', '-9999');
}

function draw() {
    background(500, 200, 200);
    fill(15, 195, 185);
    noStroke();
    circle(250, 5, 100);
    box(300,100,40);
    erase();
    rotateY(frameCount * 0.02);
    translate(0, 0, 300);
    torus(15, 5);
    noErase();
}