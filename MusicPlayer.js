let width = 800;
let height = 600;

const overlayX = width / 2;
const overlayY = height * 2 / 5;
const overlayWidth = width * 3 / 4 - width / 20;
const overlayHeight = height * 1 / 2;
const overlayRadius = 30;

let play, pause, mute, exit;
let audioElement;

function preload() {
  play = loadImage('./Images/play.jpg');
  pause = loadImage('./Images/pause.jpg');
  mute = loadImage('./Images/mute.jpg');
  exit = loadImage('./Images/exit.png');
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.id('musicPlayerCanvas');
  audioElement = document.getElementById('audioPlayer');
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
  drawButton(play, 1 / 5);
  drawButton(pause, 2 / 5);
  drawButton(mute, 3 / 5);
  drawButton(exit, 4 / 5);
  //
  //third layer (overlay)
  rectMode(CENTER);
  rect(overlayX, overlayY, overlayWidth, overlayHeight, overlayRadius);
  drawOverlayButton('Best of 3', overlayX - overlayWidth / 4, overlayY, overlayWidth / 4, overlayHeight / 10);
  drawOverlayButton('Best of 5', overlayX + overlayWidth / 4, overlayY, overlayWidth / 4, overlayHeight / 10);

  function drawOverlayButton(label, x, y, w, h) {
    fill(200);
    rect(x, y, w, h);
    fill(0);
    textAlign(CENTER, CENTER);
    text(label, x + w / 2, y + h / 2);
  }

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
      }
    }
  });

  positions.forEach((position, index) => {
    const { x, y } = calculatePosition(position);
    if (mouseX > x && mouseX < x + width / 10 && mouseY > y && mouseY < y + height / 10) {
      if (index === 2) {
        // Mute button logic
        audioElement.muted = !audioElement.muted;
        console.log('audio muted');
      }
    }
  });
  document.addEventListener('click', function (event) {
    const popupMenu = document.getElementById('popupMenu');
    if (!popupMenu.contains(event.target)) {
      popupMenu.style.display = 'none';
    }
  });

  if (mouseX > overlayX - overlayWidth / 4 && mouseX < overlayX - overlayWidth / 4 + overlayWidth / 4 &&
    mouseY > overlayY && mouseY < overlayY + overlayHeight / 10) {
    startGame(3); // Start best of 3 game
  } else if (mouseX > overlayX + overlayWidth / 4 && mouseX < overlayX + overlayWidth / 4 + overlayWidth / 4 &&
    mouseY > overlayY && mouseY < overlayY + overlayHeight / 10) {
    startGame(5); // Start best of 5 game
  }
}

function startGame(rounds) {
  console.log(`Starting a game of best of ${rounds}`);
  drawGameGeometry();

  let countdown = 3;
  const countdownInterval = setInterval(() => {
    console.log(countdown);
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownInterval);
      initializeGame(rounds);
    }
  }, 1000);
}

function drawGameGeometry() {
      clear();
      rectMode(CENTER);
      fill(255);
      rect(overlayX, overlayY, overlayWidth, overlayHeight, overlayRadius);
    }

function initializeGame(rounds) {
      console.log(`Game started with best of ${rounds} rounds`);
      // Game logic goes here
    }