var path,jaxon, leftBoundary,rightBoundary;
var pathImg,jaxonImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  jaxonImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
jaxon = createSprite(180,340,30,30);
jaxon.scale=0.08;
jaxon.addAnimation("jaxonRunning",jaxonImg);
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  jaxon.x = World.mouseX;
  
  edges= createEdgeSprites();
  jaxon.collide(edges[3]);
  jaxon.collide(leftBoundary);
  jaxon.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

