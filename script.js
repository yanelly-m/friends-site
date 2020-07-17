/*global createCanvas, background, noStroke, fill, rect, text, textSize, mouseY, mouseX, ellipse*/

function setup(){
  createCanvas(800,500);
  background(128,128,128);
  textSize(32)
  text("Click here for a fun trivia fact!", 190, 240);
  //rect(x top L, y top L, width, height)
}

function mouseClicked(){
  if(mouseX > 200 && mouseX < 600 && mouseY > 200 && mouseY < 300){
    background(255,183,0);
    fill(0);
    textSize(20);
    text("Click to Restart", 300, 150);
    textSize(32)
    text("Friends was originally called Insomnia Café", 90, 240)
  } else{
    background(128,128,128);
    noStroke();
    fill(0)
    textSize(32)
    text("Click here for a fun trivia fact!", 190, 240);
  } 
}
