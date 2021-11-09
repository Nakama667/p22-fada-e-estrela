var canvas;
var bloco1,bloco2,bloco3,bloco4;
var bola, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = rgb(0,0,255);

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = rgb(255,128,0);

    bloco3 = createSprite(515,580,200,30);
    bloco3.shapeColor = rgb(153,0,76);

    bloco4 = createSprite(740,580,220,30);
    bloco4.shapeColor = rgb(0,100,0);

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 4;
    bola.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    bola.bounceOff(edges);

    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(bloco2.isTouching(bola)){
        bola.shapeColor = rgb(255,128,0);
        bola.velocityX = 0;
        bola.velocityY = 0;
        music.stop();
    }

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = rgb(153,0,76);
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
