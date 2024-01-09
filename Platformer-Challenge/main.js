// Player Collision

// Canvas
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 500;

// Variables
let player1X = 100;
let player1Y = 200;
let player2X = 100;
let player2Y = 400;
let left1, right1, jump1;
let left1held, right1held;
let left2, right2, jump2;
let p1OnPlat, p2OnPlat;
let p1Speed = 0;
let p2Speed = 0;
let gravity = 1;

// Loop
requestAnimationFrame(loop);
function loop() {
  ctx.fillStyle = "White";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(player2X, player2Y, 50, 50);

  ctx.fillStyle = "green";
  ctx.fillRect(player1X, player1Y, 50, 50);

  ctx.fillStyle = "gray";
  ctx.fillRect(150, 300, 400, 50);

  // Persist movement
  if (right1held == true) {
    right1 = true;
  } else {
    right1 = false;
  }

  if (left1held == true) {
    left1 = true;
  } else {
    left1 = false;
  }

  // Obstacle collision
  platCollision();

  // both players outer walls
  if (player2X <= 0) {
    left2 = false;
  }
  if (player2X >= 650) {
    right2 = false;
  }

  if (player1X <= 0) {
    left1 = false;
  }
  if (player1X >= 650) {
    right1 = false;
  }
  // gravity
  Gravity();

  // jump
  if (jump1 & (player1Y >= 450 || p1OnPlat)) {
    p1Speed -= 20;
  }
  if (jump2 & (player2Y >= 450 || p2OnPlat)) {
    p2Speed -= 20;
  }

  // player movement
  if (left1) {
    player1X -= 7;
  }
  if (right1) {
    player1X += 7;
  }

  if (left2) {
    player2X -= 7;
  }
  if (right2) {
    player2X += 7;
  }

  // blue / plat collision

  // gravity affect
  player1Y += p1Speed;
  player2Y += p2Speed;

  // console.log(player1Y, p1Speed);
  requestAnimationFrame(loop);
}

function platCollision() {
  // P1 left right plat
  if ((player1X == 100) & (player1Y < 350) & (player1Y > 250)) {
    right1 = false;
  }
  if ((player1X == 550) & (player1Y < 350) & (player1Y > 250)) {
    left1 = false;
  }
  // on plat
  if ((player1Y == 250) & (player1X < 550) & (player1X > 100)) {
    player1Y = 250;
    p1OnPlat = true;
  } else {
    p1OnPlat = false;
  }
  if ((player2Y == 250) & (player2X < 550) & (player2X > 100)) {
    player2Y = 250;
    p2OnPlat = true;
  } else {
    p2OnPlat = false;
  }
  // under plat
  if (
    (player1Y < 350) &
    (player1Y > 340) &
    (player1X < 550) &
    (player1X > 100)
  ) {
    player1Y = 350;
    p1Speed = 0;
  }

  if (
    (player2X > 100) &
    (player2X < 550) &
    (player2Y < 350) &
    (player2Y > 250)
  ) {
    p2OnPlat = true;
    player2Y = 250;
  }
}

function Gravity() {
  if (player1Y >= 450) {
    player1Y = 450;
    p1Speed = 0;
  } else if (p1OnPlat) {
    p1Speed = 0;
  } else {
    p1Speed += gravity;
  }
  if (player2Y >= 450) {
    player2Y = 450;
    p2Speed = 0;
  } else if (p2OnPlat) {
    p2Speed = 0;
  } else {
    p2Speed += gravity;
  }
}

// Listeners and handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
function keydownHandler(event) {
  if (event.code == "ArrowUp") {
    jump1 = true;
  }
  if (event.code == "ArrowDown") {
    down1held = true;
  }
  if (event.code == "ArrowLeft") {
    left1held = true;
  }
  if (event.code == "ArrowRight") {
    right1held = true;
  }
  if (event.code == "KeyW") {
    jump2 = true;
  }
  if (event.code == "KeyS") {
    down2 = true;
  }
  if (event.code == "KeyA") {
    left2 = true;
  }
  if (event.code == "KeyD") {
    right2 = true;
  }
}

function keyupHandler(event) {
  if (event.code == "ArrowUp") {
    jump1 = false;
  }
  if (event.code == "ArrowDown") {
    down1held = false;
  }
  if (event.code == "ArrowLeft") {
    left1held = false;
  }
  if (event.code == "ArrowRight") {
    right1held = false;
  }
  if (event.code == "KeyW") {
    jump2 = false;
  }
  if (event.code == "KeyS") {
    down2 = false;
  }
  if (event.code == "KeyA") {
    left2 = false;
  }
  if (event.code == "KeyD") {
    right2 = false;
  }
}
