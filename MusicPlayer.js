let width = 800;
let height = 600;

const overlayX = width / 2;
const overlayY = height * 2 / 5;
const overlayWidth = width * 3 / 4 - width / 20;
const overlayHeight = height * 1 / 2;
const overlayRadius = 30;

let play, pause, mute, exit;
let isMuted = false;

function preload() {
  play = loadImage('./Images/play.jpg');
  pause = loadImage('./Images/pause.jpg');
  mute = loadImage('./Images/mute.jpg');
  exit = loadImage('./Images/exit.png');
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.id('musicPlayerCanvas');
}

function calculatePosition(position) {
  const x = width * position - width / 20;
  const y = height * 3 / 4 - height / 20;
  return { x, y };
}

function drawButton(img, position) {
  const { x, y } = calculatePosition(position);
  const w = width / 10;
  const h = height / 10;
  rect(x, y, w, h);
  image(img, x, y, w, h);
}

function draw() {
  background(255, 255, 255, 0);
  //base layer
  rectMode(CENTER);
  fill(255);
  rect(width / 2, height / 2, width * 3 / 4, height * 3 / 4);
  //
  //second layer (buttons)
  rectMode(CORNER);
  fill(255, 255, 255);
  drawButton(play, 1 / 5);
  drawButton(pause, 2 / 5);
  drawButton(mute, 3 / 5);
  drawButton(exit, 4 / 5);
  //
  //third layer (overlay)
  rectMode(CENTER);
  rect(overlayX, overlayY, overlayWidth, overlayHeight, overlayRadius);
  //
  //fourth layer (score cards)
}

function mouseClicked() {
  const positions = [1 / 5, 2 / 5, 3 / 5, 4 / 5];
  positions.forEach((position, index) => {
    const { x, y } = calculatePosition(position);
    if (mouseX > x && mouseX < x + width / 10 && mouseY > y && mouseY < y + height / 10) {
      if (index === 0) {
        const popupMenu = document.getElementById('popupMenu');
        popupMenu.style.display = 'block';
        popupMenu.style.zIndex = '1000';
        popupMenu.style.position = 'absolute';
        popupMenu.style.width = `${overlayWidth}px`;
        popupMenu.style.height = `${overlayHeight}px`;
        popupMenu.style.borderRadius = `${overlayRadius}px`;
        // Change these if it looks weird
        popupMenu.style.left = `${overlayX - overlayWidth / 2}px`;
        popupMenu.style.top = `${overlayY - overlayHeight / 2}px`;
        popupMenu.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        //debug
        console.log('popup displayed');
      } else {
        console.log('nothing happened');
      }
    }
  });

  positions.forEach((position, index) => {
    const { x, y } = calculatePosition(position);
    console.log('mute button clicked');
    if (mouseX > x && mouseX < x + width / 10 && mouseY > y && mouseY < y + height / 10) {
      if (index === 2) {
        // Mute button logic
        if (isMuted) {
          unmuteMusic();
          console.log('unmuted');
          isMuted = false;
        } else {
          muteMusic();
          console.log('muted');
          isMuted = true;
        }
      }
    }
  });
}

function muteMusic() {
  isMuted = true;
  audioElement.muted = true;
};

function unmuteMusic() {
  isMuted = false;
  audioElement.muted = false;
}

document.addEventListener('click', function (event) {
  const popupMenu = document.getElementById('popupMenu');
  if (!popupMenu.contains(event.target)) {
    popupMenu.style.display = 'none';
  }
});