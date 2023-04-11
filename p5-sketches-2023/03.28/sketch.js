frame=0
let ourFont;


function preload(){
    ourFont = loadFont('Migra-Extrabold.ttf')
}
function setup(){
    c= createCanvas(1000,1000)

    // beginShape()
    // for(let i= 0; i<width;i++){
    //     let yposition = noise(i/10)*100

    //     vertex(i,yposition)
    // }
    // endShape()
    textSize(150);
    noFill();
    stroke(100);
    
    
}

function draw(){
    angleMode(DEGREES)

    ellipseSize = sin(frame/20)*200;
    rotate(sin(frame/20)*30)
    text("! ! !",600,200,300,300)
    // rect(500,500,200,300)

    console.log(sin(frame))
    
    frame++
}



