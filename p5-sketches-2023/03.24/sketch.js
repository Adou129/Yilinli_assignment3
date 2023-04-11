let c;
let ourFont;

function preload(){
    ourFont = loadFont('DeliciousHandrawn-Regular.ttf')
}
function setup(){
    c = createCanvas(1000,1000);
    colorMode(HSB,255);

    textSize(100)
    textFont(ourFont);

    text("! ! !",300,300)
}

function draw(){
    // noStroke()
    noFill()

    let ferb =  map(mouseX, 0, 1000, 0, 255)
    strokeWeight(5)
    stroke(ferb,255,255)
    // fill(ferb,255,255)
    ellipse(mouseX,mouseY,50)
    console.log(ferb)
    textSize(mouseY/10)
}

function mousePressed(){
    saveCanvas(c, "03.24","png")
}