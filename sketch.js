var caminoImg, camino;
var run, runImg;
var obsImg,obstacle;
var ground;
var gameState= "play";



function preload(){
caminoImg=loadImage("background.jpg");
runImg=loadAnimation("running1.png","running2.png");
obstacleImg= loadImage("obstacle.png");

}

function setup() {

    createCanvas(800,600);


    ground=createSprite(800,500,800,20);
        camino =createSprite(400,500);


    //llamar a las imagenes 
   camino.addImage("carrera",caminoImg);
    camino.velocityX=1;

    run=createSprite(800,200);
    run.scale=0.4;
    run.addAnimation("running",runImg);
    
}

function draw() {
 background(0);

run.velocityY=run.velocityY+0.8;
if(camino.x>600){
    camino.x=400
}
run.collide(ground);

 drawSprites();



}