let squareSize;
let squareStates = new Array(9).fill(false);
let emotions = [
    "Happy",
    "Sad",
    "Creative",
    "Angry",
    "Excited",
    "Scared",
    "Peaceful",
    "Anxious",
    "Inspired"
];
let palettes = [
    [
        "#FFD700",
        "#FFA500",
        "#FF4500",
        "#FF6347",
        "#FF7F50"
    ],
    [
        "#555555",
        "#444444",
        "#333333",
        "#222222",
        "#111111"
    ],
    [
        "#7FDBFF",
        "#0074D9",
        "#001f3f",
        "#39CCCC",
        "#3D9970"
    ],
    [
        "#FF4136",
        "#85144b",
        "#B10DC9",
        "#F012BE",
        "#FF4136"
    ],
    [
        "#01FF70",
        "#2ECC40",
        "#FFDC00",
        "#FF851B",
        "#FF4136"
    ],
    [
        "#AAAAAA",
        "#999999",
        "#888888",
        "#777777",
        "#666666"
    ],
    [
        "#DDDDDD",
        "#CCCCCC",
        "#BBBBBB",
        "#AAAAAA",
        "#999999"
    ],
    [
        "#B10DC9",
        "#85144b",
        "#FF4136",
        "#FF851B",
        "#FF4136"
    ],
    [
        "#39CCCC",
        "#7FDBFF",
        "#01FF70",
        "#2ECC40",
        "#FFDC00"
    ]
];
let video;
function setup() {
    createCanvas(800, 800);
    frameRate(30);
    squareSize = width / 3;
    let title = createP("How Are You Feeling Today?");
    title.style("font-size", "24px"); // Change the font size as needed
    // left align the text title.style('text-align', 'left'); 
    title.style("display", "block"); // Make sure the paragraph is a block-level element
    title.style("width", "100%"); // Take the full width of its container
    video = createCapture(VIDEO);
    video.size(width, squareSize);
    // Style the video DOM element to position above canvas
    video.style("width", `${squareSize}px`);
    video.style("height", `${squareSize}px`);
    video.style("position", "absolute");
    video.style("left", "120px");
    video.style("top", "100px");
    let canvas = select("canvas");
    canvas.style("display", "block");
    canvas.style("width", "100%");
    canvas.style("position", "relative");
    canvas.style("left", "450px");
    canvas.style("top", "0px");
}
function displayVideo() {
    // Draw the video at the left of the canvas
    image(video, 0, 0, squareSize, height);
// filter(BLUR, 3);
}
function draw() {
    displayVideo();
    background(220);
    for(let i = 0; i < 9; i++){
        let x = i % 3 * squareSize;
        let y = floor(i / 3) * squareSize;
        if (squareStates[i]) displayPalette(palettes[i], x, y);
        else displaySquare(x, y, i);
    }
    drawTitles();
}
function displaySquare(x, y, i) {
    let colorIndex = floor(random(4)); // Generate a random color for each square
    let squareColor = palettes[i][colorIndex];
    fill(squareColor);
    rect(x, y, squareSize, squareSize);
}
function displayPalette(palette, x, y) {
    let paletteSize = squareSize / palette.length;
    for(let i = 0; i < palette.length; i++){
        fill(palette[i]);
        rect(x, y + i * paletteSize, squareSize, paletteSize);
    }
}
function drawTitles() {
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(0);
    for(let i = 0; i < 9; i++){
        let x = (i % 3 + 0.5) * squareSize;
        let y = (floor(i / 3) + 0.5) * squareSize;
        text(emotions[i], x, y);
    }
}
function mouseMoved() {
    for(let i = 0; i < 9; i++){
        let x = i % 3 * squareSize;
        let y = floor(i / 3) * squareSize;
        if (mouseX >= x && mouseX <= x + squareSize && mouseY >= y && mouseY <= y + squareSize) squareStates[i] = true;
        else squareStates[i] = false;
    }
}

//# sourceMappingURL=tom.93e23544.js.map
