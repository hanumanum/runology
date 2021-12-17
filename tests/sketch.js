function setup() {
    createCanvas(800, 800)
    background("black")
}

function draw() {
    background(0)
    let stroke = map(sin(frameCount/20), -1, 1, 2, 5)
    drawRune(hagalaz, 300, 100, "blue", stroke)
}