var rec1;
var rec2;

function setup() {
  createCanvas(800,400);
  rec1 = createSprite(400, 200, 50, 50);
  rec2 = createSprite(200,100,50,50);

  rec1.shapeColor = "red";
  rec2.shapeColor = "green";
}

function draw() {

  background(255,255,255);  
rec2.x = mouseX;
rec2.y = mouseY;

colorChange(rec1,rec2);
  drawSprites();
}
function colorChange(r1,r2) {
if(r1.x-r2.x < r1.width/2 + r2.width/2 &&
   r2.x-r1.x < r1.width/2 + r2.width/2 &&
   r1.y-r2.y < r1.height/2 + r2.height/2 &&
   r2.y-r1.y < r1.height/2 + r2.height/2){

   r1.shapeColor = "yellow";
   r2.shapeColor = "blue";
   
   }
   else{ 
    r1.shapeColor = "red";
    r2.shapeColor = "green";
   }
}