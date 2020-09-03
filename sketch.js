var movingRect;
var fixedRect;

 function setup() {
  createCanvas(400,400);
  
  
  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor = 'green'

  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = 'green'
}

function draw() {
  background(0);  
  drawSprites();
  if (movingRect.x-fixedRect.x<=movingRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<= fixedRect.width/2+movingRect.width/2&&
    movingRect.y - fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.width/2){
    
    movingRect.shapeColor = 'blue'
    fixedRect.shapeColor = 'orange'
  }else{
    movingRect.shapeColor = 'green'
    fixedRect.shapeColor = 'green'
  }
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
}
