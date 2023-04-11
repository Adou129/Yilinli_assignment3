let ourFont;

function preload(){
    ourFont = loadFont('Cinzel-VariableFont_wght.ttf')
}

function setup(){
    createCanvas(1000,1000,WEBGL)
    textFont(ourFont);
    textSize(500);
}


let xoff = 0.0;


function draw() {
    background(200);

    xoff = xoff + 0.01;
    let n = noise(xoff) * width/2;
    // rect(n, 0, n, height);
    text("!",0,n,300,500);
    text("!",-200,n,300,500);
    text("!",0,n,100,500);
    text("!",-100,n,500,500);
    text("!",n,200,300,500);
    text("!",n,-100,300,500);
    text("!",n,50,300,500);


    
  }