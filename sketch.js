var ship,shipImage,sea,seaImage;

function preload(){

  shipImage =loadAnimation("ship-1.png","ship-2.png")
  
  seaImage =loadImage("sea.png")
  redlight=loadAnimation("ship-3.png","ship-4.png")
} 

function setup(){
  createCanvas(400,400);
  
    sea = createSprite (200,200,400,400)
  sea.addImage("sea",seaImage)
  sea.scale=0.2
  
  ship=createSprite(100,200,400,20)
  ship.addAnimation("ship",shipImage)
  ship.addAnimation("light",redlight)
  ship.scale=0.2
  
 
  
}

function draw() {
  background("white");
 sea.velocityX=-5
  

    if (sea.x < 0){
    sea.x=200
    }
    
  if(keyWentDown("space")){
    ship.changeAnimation("light",redlight)
  }
  else if(keyWentUp("space")){
    ship.changeAnimation("ship",shipImage)
  }
  
                                
   drawSprites();

}