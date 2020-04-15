function setup() {
  createCanvas(800,400);
  createSprite(400, 250, 70, 350);
  createSprite(150, 250, 70, 350);
  createSprite(200, 250, 50, 250);
  createSprite(360, 250, 50, 250);
  createSprite(280, 260, 10, 250);
  createSprite(260, 260, 10, 250);
  createSprite(240, 260, 10, 250);
  createSprite(300, 260, 10, 250);
  createSprite(320, 260, 10, 250);
  createSprite(400, 50, 10, 50);
  createSprite(420, 40, 30, 30);
  }

function draw() {
  background(255,255,255);  
  drawSprites();
}