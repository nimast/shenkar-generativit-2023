var GreenColor, BlackColor;
var colorArray = [];
var CircleFills = [];
var CircleStroke = [];

function setup() {
	createCanvas(468 * 2, 548 * 2);
	GreenColor = color(67, 146, 77);
	BlackColor = color(34, 31, 32);
	WhiteColor = color(250);
	colorArray = [GreenColor, BlackColor];
	CircleFills = [GreenColor, BlackColor, WhiteColor];
	CircleStroke = [GreenColor, BlackColor, WhiteColor];
	background(250);
}

function drawShape1(rectColorIndex) {
	push();

	scale(random(0.5, 0.55));
	let angle = radians(randomGaussian(0, 360));
	rotate(angle);
	var index2;
	
	do {
		index2 = Math.floor(random(CircleFills.length));
	} while (index2 == rectColorIndex);
	
	fill(CircleFills[index2]);
	stroke(CircleFills[index2]);

	beginShape();
	vertex(7.29, 0);
	vertex(81.47, 0);
	bezierVertex(86.01, 0, 90.28, 2.16, 92.98, 5.81);
	vertex(121.86, 44.95);
	bezierVertex(124.29, 48.24, 124.85, 52.660000000000004, 122.99, 56.31);
	bezierVertex(121.71, 58.830000000000005, 119.35, 61.02, 115.06, 61.11);
	bezierVertex(111.66, 61.18, 108.41, 59.74, 105.98, 57.36);
	vertex(94.72, 46.32);
	bezierVertex(92.6, 44.24, 89.74, 43.07, 86.77, 43.07);
	vertex(15.3, 43.07);
	bezierVertex(11.100000000000001, 43.07, 7.450000000000001, 40.17, 6.5, 36.08);
	vertex(0.19, 8.93);
	bezierVertex(-0.87, 4.37, 2.6, 0, 7.29, 0);
	endShape();

	pop();
}

function drawShape2(rectColorIndex, shiftX, shiftY) {
  push();

  scale(random(0.5, 0.6));
  let angle = radians(randomGaussian(90, 120));
  rotate(angle);
  var index2;

  do {
    index2 = Math.floor(random(CircleFills.length));
  } while (index2 == rectColorIndex);

  fill(CircleFills[index2]);
  stroke(CircleFills[index2]);

  // Apply the shift in x and y directions
  translate(shiftX, shiftY);

  beginShape();
 		beginShape();
vertex(26.93,196.25);
bezierVertex(22.65,197.31,11.6,199.25,3.0700000000000003,193.74);
bezierVertex(1.14,192.49,0,190.33,0,188.03);
bezierVertex(0.05,167.04,1.73,50.62,32.12,3.54);
bezierVertex(33.309999999999995,1.69,35.25,0.43999999999999995,37.43,0.10999999999999988);
bezierVertex(40.41,-0.3300000000000001,43.96,0.2699999999999999,43.06,6.029999999999999);
bezierVertex(41.57,15.5,24.750000000000004,142.18,28.6,193.93);
bezierVertex(28.68,195.01000000000002,27.990000000000002,195.99,26.94,196.25);
endShape();

  pop();
}




function drawShape3(rectColorIndex) {
	push();

	scale(random(0.6, 0.7));
	let angle = radians(randomGaussian(40, 120));
	rotate(angle);
	var index2;
	
	do {
		index2 = Math.floor(random(CircleFills.length));
	} while (index2 == rectColorIndex);
	
	fill(CircleFills[index2]);
	stroke(CircleFills[index2]);

	beginShape();
vertex(11.11,0);
vertex(77.43,0);
bezierVertex(80.17,0,82.79,1.07,84.74000000000001,2.99);
vertex(128.33,45.79);
bezierVertex(130.89000000000001,48.31,132.10000000000002,52,131.21,55.48);
bezierVertex(130.37,58.739999999999995,127.81,61.87,121.01,61.69);
bezierVertex(118.37,61.62,115.86,60.48,114,58.599999999999994);
vertex(81.22,25.51);
bezierVertex(79.25,23.520000000000003,76.55,22.400000000000002,73.75,22.42);
vertex(11.07,22.76);
bezierVertex(8.86,22.770000000000003,6.680000000000001,22.110000000000003,4.91,20.790000000000003);
bezierVertex(1.98,18.6,-0.93,15.07,0.28,9.29);
bezierVertex(0.28,9.29,0.85,7.249999999999999,2.21,4.9799999999999995);
bezierVertex(4.07,1.86,7.48,0,11.11,0);
endShape();

	pop();
}

function drawShape(rectColorIndex) {
	let randomShape = round(random(0, 4));
	if (randomShape == 0) {
		drawShape1(rectColorIndex);
	} else if (randomShape == 1) {
		drawShape3(rectColorIndex);
	} else if (randomShape == 2) {
		drawShape2(rectColorIndex, randomGaussian(-40, 5), randomGaussian(-40, 5));
	} else if (randomShape == 3) {
		drawShape3(rectColorIndex);
	} else if (randomShape == 4) {
		drawShape1(rectColorIndex);
	}
}

function draw() {
	randomSeed(455); // Set a fixed seed value for the random number generator
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 8; j++) {
			//Rectangle
			var index = Math.floor(random(colorArray.length));
			fill(colorArray[index]);
			stroke(colorArray[index]);
			push(); // Save the current transformation matrix
			var xpos = (i * 98 + 40) * 2;
			var ypos = (j * 66 + 40) * 2;
			translate(xpos, ypos); // Move to the rectangle's position

			let shouldDrawShapeInBackground = random(0, 9) > 4;
			if (shouldDrawShapeInBackground == true) {
				drawShape(index);
				drawShape(index);
			}

			var angle = radians(randomGaussian(0, 25)); // Choose a random angle between -30 and 30 degrees
			if (angle < -5 || angle > 5) { // If the angle is outside the range of -5 to 5 degrees
				var absAngle = abs(angle);
				var scale;
				if (angle < 0) { // If the angle is negative
					scale = map(absAngle, 5, 30, 0.25, 0.5); // Map the absolute value of the angle to a smaller scale
				} else { // If the angle is positive
					scale = map(absAngle, 5, 30, 0.5, 1); // Map the absolute value of the angle to a larger scale
				}
				scale(scale); // Apply the scaling transformation
			}

			var rectWidth = 42 * 2; // Width of the rectangle
			var rectHeight = 54 * 2; // Height of the rectangle
			var margin = 15; // Margin between the rectangles
			var diagonal = sqrt(pow(rectWidth, 2) + pow(rectHeight, 2)); // Length of the diagonal of the rectangle
			var rectAngle = atan2(rectHeight, rectWidth); // Calculate the angle of the rectangle
			var rotatedDiagonal = diagonal * cos(rectAngle - angle) * scale; // Calculate the length of the diagonal of the rotated rectangle
			var rotatedWidth = rotatedDiagonal * cos(angle - rectAngle); // Calculate the width of the rotated rectangle
			var rotatedHeight = rotatedDiagonal * sin(angle - rectAngle); // Calculate the height of the rotated rectangle
			var dx = (rotatedWidth + margin) / 2; // Horizontal distance between the rectangles
			var dy = (rotatedHeight + margin) / 2; // Vertical distance between the rectangles
			translate(dx, dy); // Move to the position of the rectangle
			rotate(angle); // Rotate the rectangle on its own axis
			rect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight, random(0, 60), random(0, 30), random(0, 30), random(0, 45));

			let shouldDrawShapeInForeground = random(0, 9) > 3;

			if (shouldDrawShapeInBackground == false && shouldDrawShapeInForeground == true) {
				drawShape(index);
				drawShape(index);
			}

			pop(); // Restore the previous transformation matrix

			//Big Circle on rect
			var indexCircleFill = Math.floor(random(CircleFills.length));
			while (CircleFills[indexCircleFill] == colorArray[index]) {
				var indexCircleFill = Math.floor(random(CircleFills.length));
			}
			fill(CircleFills[indexCircleFill]); //Fill color

			var indexCircleStroke = Math.floor(random(CircleStroke.length));
			while (CircleStroke[indexCircleStroke] == colorArray[index]) {
				var indexCircleStroke = Math.floor(random(CircleStroke.length));
			}
			stroke(CircleStroke[indexCircleStroke]); //Stroke Color
			strokeWeight(3.5);

			var xpos_circle = randomGaussian(xpos - 5, 20); // Choose a random x position with a mean
			var ypos_circle = randomGaussian(ypos, 22); // Choose a random y position with a mean
			circle(xpos_circle, ypos_circle, 40);


			// Second Circle on rect
			var indexCircleFill = Math.floor(random(CircleFills.length));
			fill(CircleFills[indexCircleFill]); // Fill color


			strokeWeight(0);
			//	var xpos_circle2 = random(xpos-60,xpos+60);
			//	var ypos_circle2 = random (ypos-60, ypos+60);
			var xpos_circle2 = randomGaussian(xpos, 20); // Choose a random x position with a mean
			var ypos_circle2 = randomGaussian(ypos, 22);
			var Circle2Radius = 25;
			var d = dist(xpos_circle2, ypos_circle2, xpos_circle, ypos_circle);
			if (d < 32) {
				var Circle2Radius = 0;
			}
			circle(xpos_circle2, ypos_circle2, Circle2Radius);
		}
	}
}