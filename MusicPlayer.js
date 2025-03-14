let width = 800;
let height = 600;

const overlayX = width / 2;
const overlayY = height * 2 / 5;
const overlayWidth = width * 3 / 4 - width / 20;
const overlayHeight = height * 1 / 2;
const overlayRadius = 30;

let play, pause, mute, exit;
let audioElement;
let paddleSpeed = 5;

let paddleWidth = 10;
let paddleHeight = 100;

let leftPaddle = {
  x: overlayX - overlayWidth / 2 + paddleWidth / 2,
  y: overlayY,
  speedY: 0
};
let rightPaddle = {
  x: overlayX + overlayWidth / 2 - paddleWidth / 2,
  y: overlayY,
  speedY: 0
};

let countdown;
let showButtons = true;
let gameRunning = false;

let ball = {
  x: overlayX,
  y: overlayY,
  radius: 10,
  speedX: 3,
  speedY: 3
};

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

  document.addEventListener('click', function (event) {
    const popupMenu = document.getElementById('popupMenu');
    if (!popupMenu.contains(event.target)) {
      popupMenu.style.display = 'none';
    }
  });
}

function calculatePosition(position) {
  const x = (width * position) - (width / 20);
  const y = (height * 3 / 4) - (height / 20);
  return { x, y };
}

function drawButton(img, position) {
  const { x, y } = calculatePosition(position);
  const w = width * 1 / 10;
  const h = height * 1 / 10;
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

  drawOverlayButton();
  //
  //fourth layer (score cards)
}


function drawOverlayButton(label, x, y, w, h) {
  fill(200);
  rect(x, y, w, h);
  fill(0);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);
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

  if (mouseX > overlayX - overlayWidth / 4 && mouseX < overlayX - overlayWidth / 4 + overlayWidth / 4 &&
    mouseY > overlayY && mouseY < overlayY + overlayHeight / 10) {
    startGame(3); //start best of 3 game
  } else if (mouseX > overlayX + overlayWidth / 4 && mouseX < overlayX + overlayWidth / 4 + overlayWidth / 4 &&
    mouseY > overlayY && mouseY < overlayY + overlayHeight / 10) {
    startGame(5); //start best of 5 game
  }
}

function startGame(rounds) {
  console.log(`Starting a game of best of ${rounds}`);
  showButtons = false;

  countdown = 3;
  const countdownInterval = setInterval(() => {
    if (countdown < 0) {
      clearInterval(countdownInterval);
      drawGameGeometry();
      initializeGame(rounds);
    }
  }, 1000);
}

function drawGameGeometry() {
  clear();
  rectMode(CENTER);
  fill(255);
  rect(overlayX, overlayY, overlayWidth, overlayHeight, overlayRadius);

  ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);

  rect(leftPaddle.x, leftPaddle.y, paddleWidth, paddleHeight);
  rect(rightPaddle.x, rightPaddle.y, paddleWidth, paddleHeight);

  drawGameText();

  if (showButtons == true)  {
    drawOverlayButton('Best of 3', overlayX - overlayWidth / 4, overlayY, overlayWidth / 4, overlayHeight / 10);
    drawOverlayButton('Best of 5', overlayX + overlayWidth / 4, overlayY, overlayWidth / 4, overlayHeight / 10);
  }
}
function updateBall() {
  if (!gameRunning) return;
  ball.x += ball.speedX;
  ball.y += ball.speedY;
  //collision with overlay walls
  if (ball.y - ball.radius < overlayY - overlayHeight / 2 || ball.y + ball.radius > overlayY + overlayHeight / 2) {
    ball.speedY *= -1;
  }
  //collision with canvas top and bottom
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
    ball.speedY *= -1;
  }
  //collision with paddles
  if (ball.x - ball.radius < leftPaddle.x + paddleWidth / 2 && ball.y > leftPaddle.y - paddleHeight / 2 && ball.y < leftPaddle.y + paddleHeight / 2) {
    ball.speedX *= -1;
  }
  if (ball.x + ball.radius > rightPaddle.x - paddleWidth / 2 && ball.y > rightPaddle.y - paddleHeight / 2 && ball.y < rightPaddle.y + paddleHeight / 2) {
    ball.speedX *= -1;
  }
  //out of bounds
  if (ball.x - ball.radius < overlayX - overlayWidth / 2 || ball.x + ball.radius > overlayX + overlayWidth / 2) {
    //reset ball
    ball.x = overlayX;
    ball.y = overlayY;
    ball.speedX *= -1;
  }
}

function drawGameText() {
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  if (countdown > 0) {
    text(`Game Starts In: ${countdown}`, overlayX, overlayY - overlayHeight / 4);
  }
}

function updatePaddles() {
  //paddle positions
  leftPaddle.y += leftPaddle.speedY;
  rightPaddle.y += rightPaddle.speedY;

  //collision with top and bottom
  if (leftPaddle.y - paddleHeight / 2 < overlayY - overlayHeight / 2) {
    leftPaddle.y = overlayY - overlayHeight / 2 + paddleHeight / 2;
  }
  if (leftPaddle.y + paddleHeight / 2 > overlayY + overlayHeight / 2) {
    leftPaddle.y = overlayY + overlayHeight / 2 - paddleHeight / 2;
  }
  if (rightPaddle.y - paddleHeight / 2 < overlayY - overlayHeight / 2) {
    rightPaddle.y = overlayY - overlayHeight / 2 + paddleHeight / 2;
  }
  if (rightPaddle.y + paddleHeight / 2 > overlayY + overlayHeight / 2) {
    rightPaddle.y = overlayY + overlayHeight / 2 - paddleHeight / 2;
    gameRunning = true;
    gameLoop();
  }
  function initializeGame(rounds) {
    console.log(`Game started with best of ${rounds} rounds`);
    gameRunning = true;
    gameLoop();
  }

  function gameLoop() {
    if (gameRunning) {
      requestAnimationFrame(gameLoop);
    }
    updateBall();
    updatePaddles();
    drawGameGeometry();
  }

  function endGame() {
    gameRunning = false;
    console.log('Game Over');
  }
}
updateBall();
updatePaddles();


function keyPressed() {
  switch (key) {
    case 'w':
    case 'W':
      leftPaddle.speedY = -paddleSpeed;
      break;
    case 's':
    case 'S':
      leftPaddle.speedY = paddleSpeed;
      break;
  }

  switch (keyCode) {
    case UP_ARROW:
      rightPaddle.speedY = -paddleSpeed;
      break;
    case DOWN_ARROW:
      rightPaddle.speedY = paddleSpeed;
      break;
  }
}

function keyReleased() {
  switch (key) {
    case 'w':
    case 'W':
    case 's':
    case 'S':
      leftPaddle.speedY = 0;
      break;
  }

  switch (keyCode) {
    case UP_ARROW:
    case DOWN_ARROW:
      rightPaddle.speedY = 0;
      break;
  }
}

//stop right
if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
  rightPaddle.speedY = 0;
}
