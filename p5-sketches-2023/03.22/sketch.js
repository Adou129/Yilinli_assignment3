let c;

function setup(){
    c = createCanvas(1000,1000);
    background(300, 100, 100);
}
function draw() {
    noFill();
    strokeWeight(10)
    stroke('red')
        rect(200,100,50,200);
        // square(100,320,50);
        stroke(103, 169, 245)
        rect(200,200,50,200);
        stroke(252, 101, 242)
        rect(200,270,50,200);
        fill('red')
        square(200,540,50);
    }

// function draw() {
//     noFill();
//     strokeWeight(10)
//     // stroke(100,50,50)
//     stroke(mouseX,mouseY,50)
//         rect(30,20,mouseX,mouseY);
//     }

function mousePressed(){
    saveCanvas(c, "03.21","png")
}