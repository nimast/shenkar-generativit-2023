let img;
let round = 0;
function preload() {
    img = loadImage("thumb__960_0_0_0_auto.jpg");
}
function setup() {
    createCanvas(600, 600);
    background(150);
    img.resize(500, 0);
    getImgColors(0, 0);
}
function getImgColors(imgWidthPosition, imgLengthPosition) {
    let colorsArray = [];
    if (round === 0) {
        for(let i = imgWidthPosition; i < 100; i++)for(let j = imgLengthPosition; j < 100; j++){
            let c = img.get(i, j);
            colorsArray.push(c);
        }
        round = 1;
        console.log(colorsArray);
    }
}
function draw() {
    let x = width - 100;
    let y = 50;
    let squareSize = 30;
    let colors = [
        color(118, 135, 215),
        color(249, 226, 122),
        color(213, 132, 113),
        color(162, 40, 16)
    ];
    let labels = [
        "Color 1",
        "Color 2",
        "Color 3",
        "Color 4"
    ];
    image(img, 50, 50);
    for(let i = 0; i < 4; i++){
        fill(colors[i]);
        rect(x, y, squareSize, squareSize);
        fill(200);
        textSize(10);
        textAlign(CENTER, CENTER);
        text(labels[i], x + squareSize / 2, y + squareSize / 2);
        y += squareSize + 20;
    }
}

//# sourceMappingURL=almas.bfbe9ed4.js.map
