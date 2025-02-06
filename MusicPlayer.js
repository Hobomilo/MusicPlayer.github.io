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
//
//Global Variables
Minim minim; //creates object
AudioPlayer song1;
//
void setup () {
  minim = new Minim(this);
  song1 = minim.loadFile("./MusicPlayer.github.io/Music/bibidiba.mp3"); //able to pass absolute path, file name & extension, and URL
}

void draw() {
}

void keyPressed() {
  if ( key=='P' || key=='p' ) song1.play();
  //PLAY PAUSE STOP Feature
  if ( key=='P' || key=='p' ) {
    if ( song1.isPlaying() ) {
      song1.pause();
    } else if ( song1.position() >= song1.length()-song1.length()*1/5 ) {
      song1.rewind();
      song1.play();
    } else {
      song1.play(); //Parameter is milli-seconds from start of audio file to start playing
    }
  }//End PLAY PAUSE Feature
  //
  //Second Play Button, Loop ONCE
  if ( key=='L' || key=='l'  ) song1.loop(1); //Parameter is Parameter is number of repeats
  //Infinite Loop
  if ( key=='I' || key=='i' ) song1.loop(); //Parameter is empty, means infinite looping (could be -1)
  //
  if ( key=='M' || key=='m' ) { //MUTE Button
    //Note: Mute has NO built-in pause button and NO built-in rewind if the song is near the end of the file
    //Note: this MUTE algorithm is not smart
    //Known ERROR: once song plays, MUTE acts like it doesn't work
    if ( song1.isMuted() ) { 
      song1.unmute();
    } else { 
      song1.mute();
    }
  } //End MUTE Button
  //
  //Fast Forward & Fast Reverse
  //Built in Question, .isPlaying(), not necessary
  if ( key == 'F' || key == 'f' ) song1.skip( 1000 ); // skip forward 1 second (1000 milliseconds)
  if ( key == 'R' || key == 'r' ) song1.skip( -1000 ); // skip backwards 1 second, notice negative, (1000 milliseconds)
  //
  //STOP Button
  if ( key == 'S' || key == 's' ) {
    if ( song1.isPlaying() ) {
      song1.pause();
      song1.rewind(); //Cue SONG to play from beginning
    } else {
      song1.rewind(); //Not playing means song is paused or song position is at the end of the file
    }
  }//End STOP Button
  //
}
void mouseClicked() {
}