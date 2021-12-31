//DEBUG GLOBALS
const SHOWBOUNDS = true
const SHOWCENTER = true

let castrune

async function preload() {
    const rndNum = await getQuantumRandomNumbers()
    const rune = futhark[int(map(rndNum[0], 0, 255, 0, futhark.length-1))]
    castrune = genDrawLines(rune, 350, 250, 0, 2)
}

function setup() {
    createCanvas(800, 800)
    background("black")
}

function draw() {
    if(castrune){
        castrune.next()
    }
}