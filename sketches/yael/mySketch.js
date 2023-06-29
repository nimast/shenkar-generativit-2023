let grassHeight = 0; // Variable to track the height of the grass
let grassScale = 1; // Variable to track the scale of the grass blades

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let skyColor = map(mouseY, 0, height, 0, 255);
  skyColor = constrain(skyColor, 0, 255);

  background(135, 206, skyColor);

  if (grassHeight < windowHeight / 2) {
    grassHeight += 2;
  }

  let grassColor = color(
    random(50, 100), // green hue
    random(150, 200), // green saturation
    random(50, 100) // green brightness
  );

  if (grassScale < 5) {
    grassScale += 0.01;
  }

  fill(grassColor);

  for (let y = windowHeight - grassHeight; y < windowHeight; y += 10) {
    for (let x = 0; x < windowWidth; x += 10) {
      push();
      translate(x, y);
      rotate(random(-PI / 4, PI / 4));
      scale(grassScale);
      drawGrassBlade();
      pop();
    }
  }
}

function drawGrassBlade() {
  // Draw a single grass blade
  beginShape();
  vertex(0, 0);
  quadraticVertex(5, -5, 0, -10); // Curve blade shape
  vertex(0, -10);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

