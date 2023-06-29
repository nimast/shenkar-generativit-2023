let images = [];
let currentImage = 0;
let totalImages = 60;
let pixelation_level = 35;
function preload() {
    for(let i = 0; i < totalImages; i++){
        let imageName = "pixelated image (" + (i + 1) + ").jpg";
        let img = loadImage(imageName);
        images.push(img);
    }
}
function setup() {
    //createCanvas(round(windowHeight / 1.5), round(windowHeight / 1.5));
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    noStroke();
    frameRate(2);
    fill(0);
    rect(0, 0, width, height);
}
function draw() {
    images[currentImage].resize(width, height);
    images[currentImage].loadPixels();
    for(let x = 0; x < width; x += pixelation_level)for(let y = 0; y < height; y += pixelation_level){
        //noiseSeed += 0.01;	
        if (random(0, 10) > 1) continue;
        let i = (x + y * width) * 4;
        let r = images[currentImage].pixels[i + 0];
        let g = images[currentImage].pixels[i + 1];
        let b = images[currentImage].pixels[i + 2];
        let a = images[currentImage].pixels[i + 3];
        fill(r, g, b, a);
        square(x, y, pixelation_level);
    }
    currentImage++;
    if (currentImage >= totalImages) currentImage = 0;
}

//# sourceMappingURL=idan.9bce5ebc.js.map
