//DEBUG GLOBALS
const SHOWBOUNDS = false
const SHOWCENTER = false

const centerX =window.innerWidth/2
const centerY =window.innerHeight/2

let castrune
let startCasting

async function preload() {
    
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background("black")
    angleMode(DEGREES)
    
}

function draw() {
    drawRuneCirlce(futhark, centerX, centerY, 400)
    
   
    if(castrune){
        castrune.next()
    }
    else{
        fill("white")
        textSize(25)
        textAlign(CENTER, CENTER);
        text("Ask your question", centerX, centerY)
        text("Click here", centerX, centerY+50)
        noLoop()
    }
    
    
}

async function mouseClicked(){
    if(castrune) return;
    const rndNum = await getQuantumRandomNumbers()
    const rune = futhark[int(map(rndNum[0], 0, 255, 0, futhark.length-1))]
    castrune = genDrawLines(rune, centerX-50, centerY-140, 0, 2)
    background("black")
    loop()
}


function drawRuneCirlce(futhark, centerX, centerY, r){
    let angleStep = 360/futhark.length;
    
    for (let i = 0; i < futhark.length; i++) {
        const rune = futhark[i];
        let angle = angleStep * i - 90;
        let x = centerX + r * cos(angle);
        let y = centerY + r * sin(angle);
        push()
        translate(x, y)
        rotate(angle+90)
        drawRune(rune, 0, 0, "magenta", 3, 0, 0.5);
        pop()
    }
}