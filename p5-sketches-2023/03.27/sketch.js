let ourFont;

function preload(){
    ourFont = loadFont('Cinzel-VariableFont_wght.ttf')
}

function setup() {
    createCanvas(1000, 1000);
    background(100, 200, 200);
    textFont(ourFont);
    textSize(400);
}

function draw(){
    noStroke();
    fill(250, 100, 100);
    rect(200, 200, 600, 600);
    erase();
    text("! ! !",200,400,800,500);
    noErase();
}
