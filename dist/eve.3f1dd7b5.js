let cam;
let x2, y2;
function preload() {
    img = loadImage("me.jpg");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    cam = createCapture(VIDEO);
    cam.size(width, height);
    cam.hide();
    noStroke();
    x2 = width / 2;
    y2 = height / 2;
}
function draw() {
    const dx = constrain(rotationY, -3, 3);
    const dy = constrain(rotationX, -3, 3);
    x2 += dx * 2;
    y2 += dy * 2;
    x2 = constrain(x2, 0, width);
    y2 = constrain(y2, 0, height);
    background(220);
    cam.loadPixels();
    let currentIndex = 0;
    for(let x = 0; x < cam.width; x += 25)for(let y = 0; y < cam.height; y += 20){
        currentIndex = (x + y * width) * 4;
        let r = cam.pixels[currentIndex];
        let g = cam.pixels[currentIndex + 1];
        let b = cam.pixels[currentIndex + 2];
        if (mouseX >= width / 2 - 40 && mouseX <= width / 2 + 40 && mouseY >= height / 2 - 40 && mouseY <= height / 2 + 40) {
            fill(r, g, b);
            textSize(15);
            text("us", x, y);
            let x3 = 0;
            let y3 = 0;
            for(let i = 0; i < 3000; i += 10);
            x3 = random(0, width);
            y3 = random(0, height);
            pix = color(img.get(img.width / (width / x3), img.height / (height / y3)));
            noStroke();
            fill(pix);
            text("me", x3, y3);
            text("אני", x3 + 10, y3 + 10);
        } else {
            fill(r, g, b);
            textSize(15);
            text("you", x, y);
        }
    }
    fill(255, 43, 28, 100);
    circle(width / 2, height / 2, 60);
    if (x2 >= width / 2 - 40 && x2 <= width / 2 + 40 && y2 >= height / 2 - 40 && y2 <= height / 2 + 40) background(0, 0, 0);
    textSize(30);
    fill(255, 255, 255, 200);
    text("я", x2, y2);
}

//# sourceMappingURL=eve.3f1dd7b5.js.map
