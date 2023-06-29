
const flowers = [];
const points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(3);
  noFill();
	//noLoop();

  // Create multiple flowers with random positions and parameters
	let option = random(0, 10);
	if (option > 5) {
		for (let i = 0; i < random(4, 8); i++) {
			let petalSize = random(50, 150);
			let margin = 50 + petalSize;
			let flower = {
				position: 
					createVector(
							random(margin, width - margin), 
							random(margin, height - margin)),
				rotationSpeed: random(0.005, 0.03),
			 	petalSize: petalSize
			};
			flowers.push(flower);
  	}
	} else {
		let flower = {
			position: createVector(
				random(280, width - 280), 
				random(280, height - 280)),
			rotationSpeed: random(0.005, 0.03),
			petalSize: random(250, 350)
		};
		flowers.push(flower);
	} 
}

function draw() {
  background(255);

  // Draw each flower
  for (let i = 0; i < flowers.length; i++) {
    const flower = flowers[i];
    push();
    translate(flower.position.x, flower.position.y);
    rotate(frameCount * flower.rotationSpeed);

    // Draw the flower petals
    for (let j = 0; j < 30; j++) {
      rotate(TWO_PI / 10);
      drawPetal(flower.petalSize, color);
    }

    // Draw the flower center
    ellipse(0, 0, random(50, 100), random(50, 100));
    
    pop();
  }
}

function drawPetal(petalSize) {
  beginShape();
	stroke(random(255),random(255),random(255));
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(random(0, petalSize), random(-50, 150));
  curveVertex(random(petalSize/2, petalSize), random(-20, 60));
  curveVertex(random(10, petalSize), random(-50, 50));
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape();
}
