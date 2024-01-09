// Player Collision

// Canvas
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// Variables
let frame = 0;
let orangeX = Math.random() * 700 + 50;
let orangeY = Math.random() * 700 + 50;
let mouseX, mouseY;
let XDiff;
let YDiff;
let distance;

// Loops
requestAnimationFrame(loop);
function loop() {
  distanceMath();

  draw();

  distanceCheck(); //baboom

  // console.log();
  requestAnimationFrame(loop);
}

function distanceMath() {
  // variables
  XDiff = mouseX - orangeX;
  YDiff = mouseY - orangeY;
  distance = Math.round(Math.sqrt(XDiff ** 2 + YDiff ** 2));
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
  ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
  ctx.fill();
}

function distanceCheck() {
  if (distance < 100) {
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
