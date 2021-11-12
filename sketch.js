
var fairyImg,starImg,bgImage;

var fada,estrela;


function preload()
{
  bgImage= loadImage("images/starNight.png");
  fairyImg=loadImage("images/fairy.png");
  starImg=loadImage("images/star.png");

}



function setup() {
  createCanvas(800, 750);
  
  fada =  createSprite(200,700,20,60);
  fada.addImage(fairyImg);
  fada.scale=0.1;


  estrela= createSprite(700,100,20,20);
  estrela.addImage(starImg);
  estrela.scale=0.1;
}


function draw() {
  background(bgImage);

  if(keyDown("left"))
  {
    fada.x=fada.x-5;
  }
  if(keyDown("right"))
  {
    fada.x=fada.x+5;
  }

  if(keyDown("space"))
  {
    estrela.y=estrela.y+5;
  }

  drawSprites();

}
