// Simple Paint

// Canvas
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 2000;
cnv.height = 950;

// Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";
// Loop
requestAnimationFrame(loop);
function loop() {
  // Cricle
  if (mouseIsPressed) {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(pmouseX, pmouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }
  requestAnimationFrame(loop);
}

document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
  mouseIsPressed = true;
}
function mouseupHandler() {
  mouseIsPressed = false;
}
function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  pmouseX = mouseX;
  pmouseY = mouseY;

  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
function keydownHandler(event) {
  if (event.code == "Space") {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "KeyW") {
    size++;
  } else if (event.code == "KeyS") {
    size--;
  }
}

// color events
document.getElementById("redbtn").addEventListener("click", colorRed);
document.getElementById("bluebtn").addEventListener("click", colorBlue);
document.getElementById("greenbtn").addEventListener("click", colorGreen);

document.getElementById("ColorPicker").addEventListener("change", changeColor);
function colorRed() {
  penColor = "Red";
}
function colorBlue() {
  penColor = "Blue";
}
function colorGreen() {
  penColor = "Green";
}
function changeColor() {
  penColor = document.getElementById("ColorPicker").value;
}
