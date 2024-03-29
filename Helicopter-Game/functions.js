// Draw Start Screen
function drawStart() {
  drawMainComponents();

  // Start Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("CLICK TO START", 350, 285);

  ctx.font = "25px Consolas";
  ctx.fillText("CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP", 100, 450);
  ctx.fillText("RELEASE TO GO DOWN", 415, 480);
}

// Draw Game Elements
function runGame() {
  // Logic
  moveHeli();
  moveWalls();
  checkCollisions();
  scoreCount();
  // Draw
  drawGame();
}

function moveHeli() {
  // up when mouse pressed
  if (mouseIsPressed) {
    heli.speed -= 1;
  }

  //  gravity
  heli.speed += heli.accel;
  heli.y += heli.speed;

  //   max speed
  if (heli.speed > 5) {
    heli.speed = 5;
  } else if (heli.speed < -5) {
    heli.speed = -5;
  }
}
function moveWalls() {
  // Wall 1
  wallSpeed = Math.ceil(distance / 300) + 1;
  wall1.x -= wallSpeed;
  if (wall1.x + wall1.w < 0) {
    wall1.x = wall3.x + 500;
    wall1.y = Math.random() * 300 + 100;
  }

  // Wall 2
  wall2.x -= wallSpeed;
  if (wall2.x + wall2.w < 0) {
    wall2.x = wall1.x + 500;
    wall2.y = Math.random() * 300 + 100;
  }
  // Wall 3
  wall3.x -= wallSpeed;
  if (wall3.x + wall3.w < 0) {
    wall3.x = wall2.x + 500;
    wall3.y = Math.random() * 300 + 100;
  }
  console.log(wallSpeed);
}
function checkCollisions() {
  // Top / bottom walls
  if (heli.y < 50 || heli.y + heli.h > cnv.height - 50) {
    gameOver();
  }
  // Walls
  if (
    (wall1.x < heli.x + heli.w) &
    (wall1.x > heli.x - wall1.w) &
    (wall1.y + wall1.h > heli.y) &
    (wall1.y < heli.y + heli.h)
  ) {
    gameOver();
  }
  if (
    (wall2.x < heli.x + heli.w) &
    (wall2.x > heli.x - wall2.w) &
    (wall2.y + wall2.h > heli.y) &
    (wall2.y < heli.y + heli.h)
  ) {
    gameOver();
  }
  if (
    (wall3.x < heli.x + heli.w) &
    (wall3.x > heli.x - wall3.w) &
    (wall3.y + wall3.h > heli.y) &
    (wall3.y < heli.y + heli.h)
  ) {
    gameOver();
  }
}
function gameOver() {
  explosion.play();
  propeller.pause();
  state = "gameOver";

  setTimeout(reset, 2000);
}
function scoreCount() {
  distance++;
  if (distance > best) {
    best = distance;
  }
}
// Draw game elements
function drawGame() {
  drawMainComponents();
  drawWalls();
}

// Draw Game Over Screen
function drawGameOver() {
  drawMainComponents();

  drawWalls();

  // Circle around Helicopter
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(heli.x + heli.w / 2, heli.y + heli.h / 2, 60, 0, 2 * Math.PI);
  ctx.stroke();

  // Game Over Text
  ctx.font = "40px Consolas";
  ctx.fillStyle = "lightblue";
  ctx.fillText("GAME OVER", 350, 285);
}

// Helper Funcs
function reset() {
  state = "start";
  mouseIsPressed = false;
  distance = 0;
  heli = {
    x: 200,
    y: 250,
    w: 80,
    h: 40,
    speed: 0,
    accel: 0.7,
  };
  wall1 = {
    x: cnv.width,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };
  wall2 = {
    x: cnv.width + 500,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };
  wall3 = {
    x: cnv.width + 1000,
    y: Math.random() * 300 + 100,
    w: 50,
    h: 100,
  };
}

function drawWalls() {
  ctx.fillStyle = "green";
  ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h);
  ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);
  ctx.fillRect(wall3.x, wall3.y, wall3.w, wall3.h);
}

function drawMainComponents() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Green Bars
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, cnv.width, 50);
  ctx.fillRect(0, cnv.height - 50, cnv.width, 50);

  // Green Bar Text
  ctx.font = "30px Consolas";
  ctx.fillStyle = "black";
  ctx.fillText("HELICOPTER GAME", 25, 35);
  ctx.fillText(`DISTANCE: ${distance}`, 25, cnv.height - 15);
  ctx.fillText(`BEST: ${best}`, cnv.width - 250, cnv.height - 15);

  // Helicopter
  ctx.drawImage(heliImg, heli.x, heli.y);
}
