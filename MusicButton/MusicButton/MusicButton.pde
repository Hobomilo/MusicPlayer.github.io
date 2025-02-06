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

Minim minim; //creates object
AudioPlayer song1;

void setup () {
  minim = new Minim(this);
  song1 = minim.loadFile("//FS-052/studuser$/Gr12/a.reid21/My Documents/GitHub/MusicPlayer.github.io/Music/bibidiba.mp3"); 
  size(800, 600);
}

void draw() {
}

void keyPressed() {
if (key == 'P' 
}
void mouseClicked() {
}
