var tower,towerImg;
var door,doorImg,doorsG;
var clmbrs,clmbrsImg,clmbrsG;
var ghost,ghostImg;
var gamestate = "play";
var inblk,inblkG;


function preload(){
  
doorsG = new Group();
clmbrsG = new Group();
inblkG = new Group();

  
towerImg = loadImage("tower.png");
doorImg = loadImage("door.png");
clmbrsImg = loadImage("climber.png");
ghostImg  = loadImage("ghost-standing.png","ghost-jumping.png");







}

function setup(){
  createCanvas(600,600);

tower = createSprite(300,100);
  tower.addImage("towerImg1",towerImg);
   tower.velocityY=1;
  
  
  ghost=createSprite(300,300)
  ghost.addImage("ghost1",ghostImg);
  ghost.scale = 0.5;
  









}

function draw(){
 background("white");
  
  if(gamestate==="play"){
    
 

    if(keyDown("Right_Arrow")){

      ghost.x = ghost.x +3;

     }
  
    if(keyDown("Left_Arrow")){

      ghost.x = ghost.x - 3;

     }

    if(keyDown("Down_Arrow")){

      ghost.velocityY = -5;

     }
  
    ghost.velocityY = ghost.velocityY+0.7;
       if (tower.y>300){

      tower.y = 200;


                    }
       Spawndoors();
  
 if(ghost.isTouching(clmbrsG)){
     
      ghost.velocityY = 0;     
   

             }  
  if(inblkG.isTouching(ghost)||ghost.y>600)  
  {
    ghost.destroy();
    gamestate="end"
  }
  
  

  
  drawSprites();
  
}

if (gamestate === "end"){
  
  stroke ("yellow");
  textSize(30);
  text("Gameover",250,250);
}

}
function Spawndoors(){
  
  
  
 if (frameCount%240===0){
   
 door = createSprite
 
  (Math.round(random(120,400)));
   door.addImage("door1",doorImg)
   door.velocityY=1;
  
   door.lifetime = 700;
   doorsG = new Group();
   
  clmbrs = createSprite(door.x,70) ;
  // clmbrs.x = door.x;
   clmbrs.addImage("clmbrs1",clmbrsImg);
   clmbrs.velocityY=1;
   
   clmbrs.lifetime = 700;
   clmbrsG = new Group ();
   clmbrsG.add(clmbrs);
   doorsG.add(door);
   
   ghost.depth = 4;
   door.depth = 4;
   clmbrs.depth = 6;
   
   inblk = createSprite(200,80);
   inblk.width = clmbrs.width
   inblk.height = clmbrs.height;
   inblk.velocityY = 1;
   inblk.x = door.x;
   inblk.visible=false
   


   inblkG.add(inblk);
   
   
   
   
   
   
   
   ghost.depth = door.depth+1;
 }
  
}


