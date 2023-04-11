let c;

function setup(){
    c = createCanvas(1000,1000);
    background(500, 200, 100);
}
function draw() {
    noFill();
    strokeWeight(10)
        rect(350,100,50,250);
        square(350,400,50);
        fill(124, 204, 140);
        noStroke();
        rect(250,200,250,50);
        square(550,200,50);
}
