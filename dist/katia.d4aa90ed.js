let clouds = [];
let cloudSpeed = 1;
var c;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(135, 206, 235);
    noStroke();
}
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
function draw() {
    background(135, 206, 235);
    for(let i = 0; i < clouds.length; i++){
        let cloud = clouds[i];
        cloud.move();
        cloud.display();
    }
}
// Stop the scene when the left mouse button is pressed
function mousePressed() {
    if (mouseButton === LEFT) noLoop();
}
// Resume the scene when the left mouse button is released
function mouseReleased() {
    if (mouseButton === LEFT) loop();
}
// Remove clouds that are outside the scene
function removeOutsideClouds() {
    for(let i = clouds.length - 1; i >= 0; i--){
        let cloud = clouds[i];
        if (cloud.y < -cloud.size) clouds.splice(i, 1);
    }
}
function keyPressed() {
    if (keyCode === 32) clouds.push(new Cloud());
}
class Cloud {
    constructor(){
        this.x = random(width);
        this.y = height;
        this.size = random(50, 400);
        this.color = color(random(250, 255));
        this.shapeChangeSpeed = random(0.01, 0.05);
        this.circleOffset = random(0, 5);
        this.circleSpeed = random(0.5, 1);
    }
    move() {
        this.y -= cloudSpeed;
    }
    display() {
        fill(this.color);
        let numCircles = floor(random(1, 1));
        let angle = 0;
        let angleIncrement = TWO_PI / numCircles;
        for(let i = 0; i < numCircles; i++){
            let xOffset = cos(angle) * this.size / 2 + this.circleOffset;
            let yOffset = sin(angle) * this.size / 2 + this.circleOffset;
            let xPos = this.x + xOffset;
            let yPos = this.y + yOffset;
            let circleSize = this.size / numCircles;
            ellipse(xPos, yPos, circleSize);
            angle += angleIncrement;
        }
        // Slowly change the shape of the cloud
        this.size += this.shapeChangeSpeed;
    }
}

//# sourceMappingURL=katia.d4aa90ed.js.map
