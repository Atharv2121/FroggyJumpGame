var gameState=0;
var frog, frogImg,foot;
var slab1, slab1Img, slab2, slab2Img, slab3, slab3Img;
var bg, bgImg;
var ground;
var jump=0;
var bottomSp,bottomGp;
var topSp,topGp;
var canvas;
var slab1grp,slab2grp,slab3grp;
var coin,coinGp,coinImg;
var score=0;
var count=0;
var coinSound;

function preload(){
    bgImg=loadImage("images/bg.jpg");
    frogImg=loadImage("images/frog1.png");
    slab1Img=loadImage("images/slab1.png");
    slab2Img=loadImage("images/slab2.png");
    slab3Img=loadImage("images/slab3.png");
    coinImg=loadImage("images/coin.png");
    coinSound=loadSound("Coin.mp3");
}

function setup(){
    canvas=createCanvas(550,640);
    slab1grp= new Group();
    slab2grp= new Group();
    slab3grp= new Group();
    topGp= new Group();
    coinGp= new Group();

     //ground=createSprite(width/2,height,width,20);

}

function draw(){
 background(bgImg);
 if(gameState===0){
     if(count===0){
         callSetup();
         count=1;
     }

if(frog.isTouching(coinGp)){
    coinGp.destroyEach();
    score=score+10;
    coinSound.play();
}
 //console.log(canvas.position.y);

 foot.x=frog.x;
 foot.y=frog.y+35;

 
 if(keyDown("LEFT_ARROW")){
     frog.x-=6
 }
 if(keyDown("RIGHT_ARROW")){
    frog.x+=6
}
    

   slabs1();
   coinss();
// if(frog.isTouching(ground) ){
//     frog.velocityY=-25;

// }
if(foot.isTouching(topGp)&& frog.velocityY>0){
    frog.velocityY=-20;
}

frog.velocityY+=0.8;                                       

    drawSprites();


    if(frog.y>600){
        gameState=1;
    }


    if((foot.isTouching(slab2grp)||foot.isTouching(slab3grp)) && frog.velocityY>0){
        gameState=1
        console.log("touchedd");
    }
    textAlign(CENTER);
    textSize(20);
    stroke("black");
    strokeWeight(2);
    fill("lightGreen");
    text("Score:"+score,275,50);
 }

 if(gameState===1){
    textAlign(CENTER);
    textSize(50);
    stroke("black");
    strokeWeight(4);
    fill("red");
     text("GAME OVER \n YOU LOSE", width/2,height/2)
 if(keyDown("SPACE")){
     gameState=0;
     count=0;
     score=0;
     slab1grp.destroyEach();
     topGp.destroyEach();
 }
 }




// if(keyDown("SPACE")){
//     frog.velocityY=-19;
// }    

    // imageMode(CENTER);
    // image(slab1Img,ground.x-25,ground.y-10,width+100,25);
}

function slabs1(){
if(frameCount%93===0){
    slab1=createSprite(600,random(400,600),75,20);
    slab1.addImage(slab1Img);
    slab1.velocityX=-3;
    topSp=createSprite(slab1.x,slab1.y-20,slab1.width-10,2);
    // topSp.debug=true
    topSp.velocityX= -3;
    topSp.lifetime=220
    slab1.lifetime=220
    topGp.add(topSp);
    slab1grp.add(slab1);
}
}

// function slabs2(){
//     if(frameCount%200===0){
//         slab2=createSprite(600,random(100,500),75,20);
//         slab2.addImage(slab2Img);
//         slab2.velocityX=-3;
//         slab2.lifetime=220
//         slab2grp.add(slab2);
//           }
// }

// function slabs3(){
//     if(frameCount%315===0){
//         slab3=createSprite(600,random(100,500),75,20);
//         slab3.addImage(slab3Img);
//         slab3.velocityX=-3;
//         slab2.lifetime=220
//         slab3grp.add(slab3);
//         }
// }

function coinss(){
    if(frameCount%100===0){
        coin=createSprite(600,random(200,400),5,5);
        coin.addImage(coinImg);
        coin.scale=0.1
        coin.velocityX=-6;
        coin.lifetime=120
        coinGp.add(coin);
        }
}
function callSetup(){
    frog=createSprite(280,0,10,10);
    foot= createSprite(frog.x,frog.y+30,30,30);
    // foot.debug=true;
    foot.visible=false

    slab1=createSprite(280,random(400,600),75,20);
    slab1.addImage(slab1Img);
    slab1.velocityX=-3;
    topSp=createSprite(slab1.x,slab1.y-20,slab1.width-10,2);
    // topSp.debug=true
    topSp.velocityX= -3;
    topGp.add(topSp);
    slab1grp.add(slab1);

    slab1=createSprite(500,random(400,600),75,20);
    slab1.addImage(slab1Img);
    slab1.velocityX=-3;
    topSp=createSprite(slab1.x,slab1.y-20,slab1.width-10,2);
    // topSp.debug=true
    topSp.velocityX= -3;
    topGp.add(topSp);
    slab1grp.add(slab1);
    
    frog.addImage(frogImg);
    // frog.debug=true;
    frog.setCollider("rectangle",0,0,30,60);
    frog.scale=1.2;
}