// Circle Collision

// Canvas
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// Variables
let orangeX = Math.random() * 700 + 50;
let orangeY = Math.random() * 700 + 50;
let blueX = 400;
let blueY = 400;
let mouseX = 400;
let mouseY = 400;
let circleDistX, circleDistY;
let mouseDistX, mouseDistY;
let circleDistance, mouseDistance;
let moveX, moveY;

// Loops
requestAnimationFrame(loop);
function loop() {
  draw();

  distanceMath();

  distanceCheck();

  // console.log();
  requestAnimationFrame(loop);
}

function distanceMath() {
  circleDistX = blueX - orangeX;
  circleDistY = blueY - orangeY;
  circleDistance = Math.round(Math.sqrt(circleDistX ** 2 + circleDistY ** 2));
  mouseDistX = mouseX - blueX;
  mouseDistY = mouseY - blueY;
  mouseDistance = Math.sqrt(mouseDistX ** 2 + mouseDistY ** 2);
  moveX = (mouseDistX / mouseDistance) * 5;
  moveY = (mouseDistY / mouseDistance) * 5;
  if (mouseDistance > 3) {
    blueX += moveX;
    blueY += moveY;
  }
}

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(orangeX, orangeY, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(blueX, blueY, 50, 0, 2 * Math.PI);
  ctx.fill();
}

function distanceCheck() {
  if (circleDistance < 100) {
    orangeX = Math.random() * 700 + 50;
    orangeY = Math.random() * 700 + 50;
  }
}

document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}
