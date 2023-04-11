
function setup() {
  createCanvas(1000, 1000, WEBGL);
  pg = createGraphics(200, 200);
  pg.textSize(100);
}
function draw() {
  background(0);
//   pg.background(50);
  pg.text('!!!!!!!', 5, 200);
  lights();
  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  rotateZ(millis() / 1000);
  texture(pg);
  cylinder(200,500,25,1);

}


