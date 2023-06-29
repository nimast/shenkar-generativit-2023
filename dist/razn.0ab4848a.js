let shapes = [];
let largeShapeCount = 0;
function setup() {
    createCanvas(1000, 1000);
}
function draw() {
    background(220);
    // Draw existing shapes
    for(let i = 0; i < shapes.length; i++){
        let shape = shapes[i];
        drawShape(shape);
    }
    // Generate and store new shapes
    if (shapes.length < 6) {
        let shapeType = random([
            "circle",
            "rectangle",
            "triangle"
        ]);
        let x = random(width);
        let y = random(height);
        if (largeShapeCount < 3 && random() < 0.5) {
            // Generate a large shape
            let size = random(400, 700);
            let newShape = {
                type: "circle",
                x,
                y,
                size
            };
            // Check for collision with existing shapes
            let isColliding = checkCollision(newShape);
            if (!isColliding) {
                shapes.push(newShape);
                largeShapeCount++;
            }
        } else {
            // Generate a random-sized shape
            let size = random(10, 700);
            let newShape = {
                type: shapeType,
                x,
                y,
                size
            };
            // Check for collision with existing shapes
            let isColliding = checkCollision(newShape);
            if (!isColliding) shapes.push(newShape);
        }
    }
}
function drawShape(shape) {
    stroke(0);
    noFill();
    if (shape.type === "circle") ellipse(shape.x, shape.y, shape.size);
    else if (shape.type === "rectangle") rect(shape.x, shape.y, shape.size, shape.size);
    else if (shape.type === "triangle") triangle(shape.x, shape.y, shape.x + shape.size, shape.y, shape.x + shape.size / 2, shape.y - shape.size);
}
function checkCollision(newShape) {
    for(let i = 0; i < shapes.length; i++){
        let shape = shapes[i];
        if (shape.type === "circle" && newShape.type === "circle") {
            let distance = dist(newShape.x, newShape.y, shape.x, shape.y);
            if (distance < (newShape.size + shape.size) / 2) return true; // Collision detected
        } else if (shape.type === "rectangle" && newShape.type === "rectangle") {
            if (newShape.x + newShape.size > shape.x && newShape.x < shape.x + shape.size && newShape.y + newShape.size > shape.y && newShape.y < shape.y + shape.size) return true; // Collision detected
        }
    }
    return false; // No collision detected
}

//# sourceMappingURL=razn.0ab4848a.js.map
