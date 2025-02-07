import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

//sketch -> import -> manage -> minim
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

float leftPaddleY, rightPaddleY;

Minim minim; //creates object
AudioPlayer song1;

void setup () {
  minim = new Minim(this);
  song1 = minim.loadFile("//FS-052/studuser$/Gr12/a.reid21/My Documents/GitHub/MusicPlayer.github.io/Music/bibidiba.mp3"); 
  size(800, 600);
  //fullScreen();
}

void draw() {
  //base layer
  rectMode(CENTER);
  rect (width/2, height/2, width*3/4, height*3/4);
  //second layer (buttons)
  rectMode(CORNER);
  rect (width*1/5 - width/20, height*3/4 - height/20, width/10, height/10);
  rect (width*2/5 - width/20, height*3/4 - height/20, width/10, height/10);
  rect (width*3/5 - width/20, height*3/4 - height/20, width/10, height/10);
  rect (width*4/5 - width/20, height*3/4 - height/20, width/10, height/10);
  //third layer (overlay)
  rectMode(CENTER);
  rect(width/2, height*2/5, width*3/4 - width/20, height*1/2, 30);
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
