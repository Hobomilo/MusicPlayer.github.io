//.pde -> .js
//p5.js web editor with finished processing code
//download as zip
//extract zip
//replace this with the contents
//embed "<script src="MusicPlayer.js"></script>"" in html
//DO NOT USE MINIM USE p5.js SOUND LIBRARY

let play, pause, mute, exit;

play = new Image();
pause = new Image();
mute = new Image();
exit = new Image();

play.src = './Icons/play.jpg';
pause.src ='./Icons/pause.jpg';
mute.src = './Icons/mute.jpg';
exit.src = './Icons/exit.png';

function setup () {
  createCanvas(800, 600);
  //fullScreen();
}

function draw() {
  //base layer
  rectMode(CENTER);
  rect (width/2, height/2, width*3/4, height*3/4);
  //
  //second layer (buttons)
  rectMode(CORNER);
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
  //fourth layer (song name)
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
