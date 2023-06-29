let cam;
let osc;
let playing = false;
let trippyAmount = 0;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.size(width, height);
  cam.hide();

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(432);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(0);

  if (playing) {
    trippyAmount = map(frameCount, 0, 60 * 60, 0, 1);

    applyTrippyEffect();
  } else {
    image(cam, 0, 0, width, height);
  }
}

function applyTrippyEffect() {
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];

      let offsetX = noise(x * 0.01, y * 0.01, frameCount * 0.02) * 30 - 15;
      let offsetY = noise(x * 0.01, y * 0.01, frameCount * 0.02 + 100) * 30 - 15;

      let neighborX = floor(x + offsetX);
      let neighborY = floor(y + offsetY);

      if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height) {
        let neighborIndex = (neighborX + neighborY * width) * 4;
        r = pixels[neighborIndex];
        g = pixels[neighborIndex + 1];
        b = pixels[neighborIndex + 2];
      }

      r += random(-50, 50) * trippyAmount;
      g += random(-50, 50) * trippyAmount;
      b += random(-50, 50) * trippyAmount;

      pixels[index] = constrain(r, 0, 255);
      pixels[index + 1] = constrain(g, 0, 255);
      pixels[index + 2] = constrain(b, 0, 255);
    }
  }

  updatePixels();
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (!playing) {
      osc.amp(0.5, 0.1);
      playing = true;
    } else {
      osc.amp(0, 0.1);
      playing = false;
    }
  }
}
