//DO NOT USE MINIM USE p5.js SOUND LIBRARY
float leftPaddleY, rightPaddleY;
PImage play, pause, mute, exit;

void setup () {
  play = loadImage ("./Icons/play.jpg");
  pause = loadImage ("./Icons/pause.jpg");
  mute = loadImage ("./Icons/mute.jpg");
  exit = loadImage ("./Icons/exit.png");
  size(800, 600);
  //fullScreen();
}

void draw() {
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

void keyPressed() {
}
void mouseClicked() {
  if (mouseX > width*1/5 - width/20 && mouseX < width*1/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true");
  if (mouseX > width*2/5 - width/20 && mouseX < width*2/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true2");
  if (mouseX > width*3/5 - width/20 && mouseX < width*3/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true3");
  if (mouseX > width*4/5 - width/20 && mouseX < width*4/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true4");
  //print(mouseX, mouseY);
}
