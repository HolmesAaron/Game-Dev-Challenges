// Player Collision

// Canvas
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// Variables
let player1X = 100;
let player1Y = 200;
let player2X = 100;
let player2Y = 400;
let up1, down1, left1, right1;
let up1held, down1held, left1held, right1held;
let up2, down2, left2, right2;
let blueXDist, blueYDist;

// Loop
requestAnimationFrame(loop);
function loop() {
  ctx.fillStyle = "White";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(player2X, player2Y, 70, 70);

  ctx.fillStyle = "green";
  ctx.fillRect(player1X, player1Y, 70, 70);

  ctx.fillStyle = "gray";
  ctx.fillRect(370, 300, 60, 200);

  if (up1held == true) {
    up1 = true;
  } else {
    up1 = false;
  }
  if (right1held == true) {
    right1 = true;
  } else {
    right1 = false;
  }
  if (down1held == true) {
    down1 = true;
  } else {
    down1 = false;
  }
  if (left1held == true) {
    left1 = true;
  } else {
    left1 = false;
  }

  if ((player1X == 300) & (player1Y < 500) & (player1Y > 230)) {
    right1 = false;
  }
  if ((player1X == 430) & (player1Y < 500) & (player1Y > 230)) {
    left1 = false;
  }
  if ((player1Y == 230) & (player1X < 430) & (player1X > 300)) {
    down1 = false;
  }
  if ((player1Y == 500) & (player1X < 430) & (player1X > 300)) {
    up1 = false;
  }
  if (
    (player1X == 300) &
    (player1Y == 230) &
    (down1 == true) &
    (right1 == true)
  ) {
    down1 = false;
  }
  if (
    (player1X == 430) &
    (player1Y == 230) &
    (down1 == true) &
    (left1 == true)
  ) {
    left1 = false;
  }
  if ((player1X == 430) & (player1Y == 500) & (up1 == true) & (left1 == true)) {
    up1 = false;
  }
  if (
    (player1X == 300) &
    (player1Y == 500) &
    (up1 == true) &
    (right1 == true)
  ) {
    right1 = false;
  }
  // both players outer boundaries
  if (player2X <= 0) {
    left2 = false;
  }
  if (player2X >= 730) {
    right2 = false;
  }
  if (player2Y <= 0) {
    up2 = false;
  }
  if (player2Y >= 730) {
    down2 = false;
  }

  if (player1X <= 0) {
    left1 = false;
  }
  if (player1X >= 730) {
    right1 = false;
  }
  if (player1Y <= 0) {
    up1 = false;
  }
  if (player1Y >= 730) {
    down1 = false;
  }
  // player movement
  if (up1) {
    player1Y -= 5;
  }
  if (down1) {
    player1Y += 5;
  }
  if (left1) {
    player1X -= 5;
  }
  if (right1) {
    player1X += 5;
  }
  if (up2) {
    player2Y -= 5;
  }
  if (down2) {
    player2Y += 5;
  }
  if (left2) {
    player2X -= 5;
  }
  if (right2) {
    player2X += 5;
  }

  blueXDist = player2X - 400;
  blueYDist = player2Y - 400;
  if (
    (blueXDist > -100) &
    (blueXDist < 30) &
    (blueYDist > -170) &
    (blueYDist < 100)
  ) {
    player2X = 100;
    player2Y = 400;
  }

  requestAnimationFrame(loop);
}

// Listeners and handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
function keydownHandler(event) {
  if (event.code == "ArrowUp") {
    up1held = true;
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
    up2 = true;
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
    up1held = false;
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
    up2 = false;
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
