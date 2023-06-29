let images = [];
let colors = [];
function setup() {
    createCanvas(400, 400);
    // Create a file input element
    let fileInput = createFileInput(handleFile, true);
    fileInput.position(10, 10);
}
function handleFile(file) {
    // Check if a file was selected
    if (file.type === "image") // Load the selected image
    loadImage(file.data, (img)=>{
        // When the image is loaded, execute the following code
        images.push(img);
        // Process the images and create the pattern
        processImages();
    });
    else // If a non-image file was selected, show an error message
    console.error("Please select an image file.");
}
function processImages() {
    colors = [];
    // Extract colors from each image
    for(let i = 0; i < images.length; i++){
        let img = images[i];
        img.loadPixels();
        for(let x = 0; x < img.width; x++)for(let y = 0; y < img.height; y++){
            // Get the color at each pixel
            let c = img.get(x, y);
            // Add the color to the colors array
            colors.push(c);
        }
    }
    // Create the pattern
    createPattern();
}
function createPattern() {
    background(400);
    // Set the pattern size and spacing
    let patternSize = 100;
    let spacing = 10;
    // Calculate the number of columns and rows for the pattern
    let columns = floor(width / (patternSize + spacing));
    let rows = floor(height / (patternSize + spacing));
    // Calculate the remaining space on the canvas
    let remainingWidth = width % (patternSize + spacing);
    let remainingHeight = height % (patternSize + spacing);
    // Adjust the pattern size and spacing to cover the entire canvas
    patternSize += remainingWidth / columns;
    spacing += remainingHeight / rows;
    // Iterate over the pattern
    for(let x = 0; x < columns; x++)for(let y = 0; y < rows; y++){
        // Calculate the position for each rectangle
        let rectX = x * (patternSize + spacing);
        let rectY = y * (patternSize + spacing);
        // Get a random color from the colors array
        let randomColor = random(colors);
        // Set the fill color to the random color
        fill(randomColor);
        // Draw a rectangle with the random color
        rect(rectX, rectY, patternSize, patternSize);
    }
}

//# sourceMappingURL=lir.167cfcc5.js.map
