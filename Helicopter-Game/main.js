// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables (Once)
let heliImg = document.createElement("img");
heliImg.src = "img/heliGreenTransparent.png";

let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";

let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav";

let mouseIsPressed = false;
let best = 0;
let wallSpeed;
// Global Variables (Reset)
let state;
let heli;
let wall1, wall2, wall3;
let distance;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gamePlay") {
    runGame();
  } else if (state === "gameOver") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  mouseIsPressed = true;

  // Play Propeller sound
  if (state === "gamePlay" || state === "start") {
    propeller.currentTime = 0;
    propeller.play();
  }

  // start game on mouse down
  if (state === "start") {
    state = "gamePlay";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
  propeller.pause();
}
