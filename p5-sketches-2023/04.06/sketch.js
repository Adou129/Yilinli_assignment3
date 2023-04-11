
function setup() {
    createCanvas(1000, 1000, WEBGL);
    canvas.style.border= "5px dotted pink";
}


function draw(){
    strokeWeight(5);
    stroke(237, 34, 93);
    noFill();
    beginShape(LINES);
    vertex(-500, -200);
    vertex(500,-200);
    vertex(-500, 50);
    vertex(500, 50);
    vertex(-200, -1000);
    vertex(-200, 900);
    vertex(150, -1000);
    vertex(150, 900);
    endShape();

    stroke(235, 171, 164)
    rect(-380,-450,40,100)
    square(-378,-330,35)
    fill(199, 177, 240)
    noStroke();
    rect(300,180,40,130)
    square(303,320,35,35)
    // rectMode(CENTER);
    fill('beige')
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 10));
    rect(-540, -500, 7, 7);
    
    translate(width / 4, height );
    translate(p5.Vector.fromAngle(millis() / 1000, 4));
    rect(-789, -1600, 5, 60);
}
