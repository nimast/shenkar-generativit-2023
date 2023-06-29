function setup() {
    createCanvas(800, 800);
}
function draw() {
    background(128, 128, 128);
    // Cylinders in Blender assignment
    let numCircles1 = 164;
    let circleSize1 = width / 2 - 20;
    let circleSpacing1 = TWO_PI / numCircles1;
    for(let i = 0; i < numCircles1; i++){
        let angle = i * circleSpacing1;
        let x = width / 2 + cos(angle) * circleSize1;
        let y = height / 2 + sin(angle) * circleSize1;
        fill(47, 0, 250);
        stroke(0);
        ellipse(x, y, 10, 10);
    }
    //Cubes in Blender assignment
    let numSquares = 140;
    let squareSize = width / 2 - 50;
    let squareSpacing = TWO_PI / numSquares;
    for(let i = 0; i < numSquares; i++){
        let angle = i * squareSpacing;
        let x = width / 2 + cos(angle) * squareSize;
        let y = height / 2 + sin(angle) * squareSize;
        fill(124, 0, 220);
        stroke(0);
        rect(x, y, 10, 10);
    }
    //Seconds in the video
    let numCircles2 = 86;
    let circleSize2 = width / 2 - 80;
    let circleSpacing2 = TWO_PI / numCircles2;
    for(let i = 0; i < numCircles2; i++){
        let angle = i * circleSpacing2;
        let x = width / 2 + cos(angle) * circleSize2;
        let y = height / 2 + sin(angle) * circleSize2;
        fill(156, 0, 189);
        stroke(0);
        ellipse(x, y, 10, 10);
    }
    //Knocks on the wall in my performance art work
    let numTriangles1 = 36;
    let triangleSize1 = width / 2 - 110;
    let triangleSpacing1 = TWO_PI / numTriangles1;
    for(let i = 0; i < numTriangles1; i++){
        let angle = i * triangleSpacing1;
        let x = width / 2 + cos(angle + triangleSpacing1 / 2) * triangleSize1;
        let y = height / 2 + sin(angle + triangleSpacing1 / 2) * triangleSize1;
        fill(175, 0, 160);
        stroke(0);
        triangle(x, y - 5, x - 5, y + 5, x + 5, y + 5);
    }
    //Chords played by my brother Nave
    let numCircles3 = 13;
    let circleSize3 = width / 2 - 140;
    let circleSpacing3 = TWO_PI / numCircles3;
    for(let i = 0; i < numCircles3; i++){
        let angle = i * circleSpacing3;
        let x = width / 2 + cos(angle) * circleSize3;
        let y = height / 2 + sin(angle) * circleSize3;
        fill(184, 0, 132);
        stroke(0);
        ellipse(x, y, 10, 10);
    }
    //Brush strokes
    let numSquares2 = 10;
    let squareSize2 = width / 2 - 170;
    let squareSpacing2 = TWO_PI / numSquares2;
    for(let i = 0; i < numSquares2; i++){
        let angle = i * squareSpacing2;
        let x = width / 2 + cos(angle) * squareSize2;
        let y = height / 2 + sin(angle) * squareSize2;
        fill(187, 0, 107);
        stroke(0);
        rect(x, y, 10, 10);
    }
    //Lines made with pen
    let numCircles4 = 7;
    let circleSize4 = width / 2 - 200;
    let circleSpacing4 = TWO_PI / numCircles4;
    for(let i = 0; i < numCircles4; i++){
        let angle = i * circleSpacing4;
        let x = width / 2 + cos(angle) * circleSize4;
        let y = height / 2 + sin(angle) * circleSize4;
        fill(185, 0, 85);
        stroke(0);
        ellipse(x, y, 10, 10);
    }
    //Tappings on the computer
    let numTriangles2 = 5;
    let triangleSize2 = width / 2 - 230;
    let triangleSpacing2 = TWO_PI / numTriangles2;
    for(let i = 0; i < numTriangles2; i++){
        let angle = i * triangleSpacing2;
        let x = width / 2 + cos(angle + triangleSpacing2 / 2) * triangleSize2;
        let y = height / 2 + sin(angle + triangleSpacing2 / 2) * triangleSize2;
        fill(180, 0, 66);
        stroke(0);
        triangle(x, y - 5, x - 5, y + 5, x + 5, y + 5);
    }
    //Coherently Audible "Say it!" shouts from the crowd, at least in my ears
    let numSquares3 = 6;
    let squareSize3 = width / 2 - 260;
    let squareSpacing3 = TWO_PI / numSquares3;
    for(let i = 0; i < numSquares3; i++){
        let angle = i * squareSpacing3;
        let x = width / 2 + cos(angle) * squareSize3;
        let y = height / 2 + sin(angle) * squareSize3;
        fill(172, 0, 50);
        stroke(0);
        rect(x, y, 10, 10);
    }
    //different planes passed in the key turn, the pencil toss and Bilbo's jump
    let numCircles5 = 6;
    let circleSize5 = width / 2 - 300;
    let circleSpacing5 = TWO_PI / numCircles5;
    for(let i = 0; i < numCircles5; i++){
        let angle = i * circleSpacing5;
        let x = width / 2 + cos(angle) * circleSize5;
        let y = height / 2 + sin(angle) * circleSize5;
        fill(162, 0, 37);
        stroke(0);
        ellipse(x, y, 10, 10);
    }
    noStroke();
    fill(151, 1, 26);
    heart(width / 2, height / 2, 80);
}
// <3
function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 4, x, y + size);
    bezierVertex(x + size, y + size / 4, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
}

//# sourceMappingURL=nohav.a5b50cae.js.map
