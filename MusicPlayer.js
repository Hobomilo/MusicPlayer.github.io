//.pde -> .js
//p5.js web editor with finished processing code
//download as zip
//extract zip
//replace this with the contents
//embed "<script src="MusicPlayer.js"></script>"" in html
//DO NOT USE MINIM USE p5.js SOUND LIBRARY

let play, pause, mute, exit;

function preload() {
play = loadImage('./Images/play.jpg');
pause = loadImage('./Images/pause.jpg');
mute = loadImage('./Images/mute.jpg');
exit = loadImage('./Images/exit.png');
}

function setup () {
  let canvas = createCanvas(800, 600);
  canvas.id('musicPlayerCanvas');
  //fullScreen();
}

function draw() {
  background(255, 255, 255, 0.5);
  //base layer
  rectMode(CENTER);
  fill(255);
  rect (width/2, height/2, width*3/4, height*3/4);
  //
  //second layer (buttons)
  rectMode(CORNER);
  fill(255, 255, 255);
  //play
  rect (width*1/5 - width/20, height*3/4 - height/20, width/10, height/10);
  image (play, width*1/5 - width/20, height*3/4 - height/20, width/10, height/10);
  //pause
  rect (width*2/5 - width/20, height*3/4 - height/20, width/10, height/10);
  image (pause, width*2/5 - width/20, height*3/4 - height/20, width/10, height/10);
  //mute
  rect (width*3/5 - width/20, height*3/4 - height/20, width/10, height/10);
  image (mute, width*3/5 - width/20, height*3/4 - height/20, width/10, height/10);
  //exit
  rect (width*4/5 - width/20, height*3/4 - height/20, width/10, height/10);
  image (exit, width*4/5 - width/20, height*3/4 - height/20, width/10, height/10);
  //
  //third layer (overlay)
  rectMode(CENTER);
  rect(width/2, height*2/5, width*3/4 - width/20, height*1/2, 30);
  //
  //fourth layer (score cards)
  rect(width*1/5, height/2 - height*3/8, width*3/10, height*3/10);
}

function keyPressed() {
}
function mouseClicked() {
  if (mouseX > width*1/5 - width/20 && mouseX < width*1/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true");
  if (mouseX > width*2/5 - width/20 && mouseX < width*2/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true2");
  if (mouseX > width*3/5 - width/20 && mouseX < width*3/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true3");
  if (mouseX > width*4/5 - width/20 && mouseX < width*4/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true4");
  //print(mouseX, mouseY);
}
