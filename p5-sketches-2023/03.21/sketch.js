let c;

function setup(){
    c = createCanvas(1000,1000);
    background(255, 204, 0);
}
function draw() {
    noStroke();
        rect(100,100,50,200);
        square(100,320,50);
        rect(200,200,50,200);
        square(200,420,50);
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
    