//DEBUG GLOBALS
const SHOWBOUNDS = true
const SHOWCENTER = true

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background("black")
}

function draw() {
    background(0)
    //let stroke = map(sin(frameCount/20), -1, 1, 2, 5)
    //drawRune(isa, 300, 100, "blue", 3)
    //drawRune(ansuz, 400, 100, "blue", 3)
    drawFootark(futhark, 50, 50, "red", 2)
}


function drawFootark(futhark, x, y, _color, _stroke) {
    let startX = x
    let startY = y
    let stepW = 100
    let stepH = 200

    for (let i = 0; i < futhark.length; i++) {
        const rune = futhark[i];
        drawRune(rune, startX, startY, _color, _stroke);
        startX += stepW
        
        if ((i + 1)  % 8 == 0) {
            startY += stepH
            startX = 50
        }
        
    }

}