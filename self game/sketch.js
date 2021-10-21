var space , spaceImg;

function preload(){
spaceImg = loadImage("space bg.jpg");

}


function setup(){
  space=createSprite(20,200,1000,1000);
  space.addImage("space bg.jpg",spaceImg);




}

function draw(){
  createCanvas(500,500)

  space.velocityX=-4;
  if(space.x<0){
    space.x=space.width/2
  }

  drawSprites();


}
