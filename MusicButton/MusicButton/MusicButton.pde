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
PImage play, pause, mute, exit;

Minim minim; //creates object
AudioPlayer player;

void setup () {
  minim = new Minim(this);
  player = minim.loadFile("//FS-052/studuser$/Gr12/a.reid21/My Documents/GitHub/MusicPlayer.github.io/Music/bibidiba.mp3");
  play = loadImage ("/Icons/play.jpg");
  pause = loadImage ("/Icons/pause.jpg");
  mute = loadImage ("/Icons/mute.jpg");
  exit = loadImage ("/Icons/exit.png");
  size(800, 600);
  //fullScreen();
}

void draw() {
  //base layer
  rectMode(CENTER);
  rect (width/2, height/2, width*3/4, height*3/4);
  //second layer (buttons)
  rectMode(CORNER);
  //play
  rect (width*1/5 - width/20, height*3/4 - height/20, width/10, height/10);
  image (play, width*1/5 - width/20, height*3/4 - height/20, width/10, height/10);
  rect (width*2/5 - width/20, height*3/4 - height/20, width/10, height/10);
  rect (width*3/5 - width/20, height*3/4 - height/20, width/10, height/10);
  rect (width*4/5 - width/20, height*3/4 - height/20, width/10, height/10);
  //third layer (overlay)
  rectMode(CENTER);
  rect(width/2, height*2/5, width*3/4 - width/20, height*1/2, 30);
  //
  if ( player.isPlaying() )
  {
    text("Press 'P' or click the pause button to pause playback.", 10, 20 );
  } else
  {
    text("Press 'P' or click the play button to start playback.", 10, 20 );
  }
}

void keyPressed() {
  if (key == 'p' || key == 'P') {
    if ( player.isPlaying() )
    {
      player.pause();
    }
    //rewind to replay
    else if ( player.position() == player.length() )
    {
      player.rewind();
      player.play();
    } else
    {
      player.play();
    }
  }
}
void mouseClicked() {
  if (mouseX > width*1/5 - width/20 && mouseX < width*1/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true");
  if (mouseX > width*2/5 - width/20 && mouseX < width*2/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true2");
  if (mouseX > width*3/5 - width/20 && mouseX < width*3/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true3");
  if (mouseX > width*4/5 - width/20 && mouseX < width*4/5 + width/20 && mouseY > height*3/4 - height/20 && mouseY < height*3/4 + height/20) print("true4");
  //print(mouseX, mouseY);
}
