/*global createCanvas, background */
function setup(){
  createCanvas(900,250);
  background(112, 103, 106);
}

function mouseClicked(){
 if(mouseX > 200 && mouseX < 600 && mouseY > 200 && mouseY < 300){
    background(112, 103, 106);
    fill(0,255,0);
    textSize(32);
    text("Click for a fun fact", width/2-50, 100);
    fill(255,0,0);
  } else{
    background(112, 103, 106);
    noStroke();
    fill(188, 188, 188);
    rect(200,200,400,100);
  } 
}
