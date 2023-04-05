/// <reference path="../00addons/TSDef/p5.global-mode.d.ts" />

//DEBUG GLOBALS
const SHOWBOUNDS = false
const SHOWCENTER = false

const RuneCirlceRadius = 400
const centerX = window.innerWidth / 2
let centerY = window.innerHeight / 2
const randomOffsetRangeX = 100
const randomOffsetRangeY = 50

let rune1, rune2
let runeUicode1, runeUicode2
let castrune1
let castrune2
let startCasting


function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background("black")
    angleMode(DEGREES)
    makeBindRune()
    //blendMode(SUBTRACT) //DIFFERENCE !, REPLACE :) , 
}


function makeBindRune() {
    const futhark = getFuthark()

    const rune1Index = getRandomInteger(0, futhark.length - 1)
    const rune2Index = getRandomInteger(0, futhark.length - 1)
    rune1 = futhark[rune1Index]
    rune2 = futhark[rune2Index]

    runeUicode1 = futharkUnicode[rune1Index]
    runeUicode2 = futharkUnicode[rune2Index]

    const centerOfRuneX = centerX - 20
    const centerOfRuneY = centerY - RuneCirlceRadius / 3

    const randomOffsetX = getRandomInteger(-randomOffsetRangeX, randomOffsetRangeX)
    const randomOffsetY = getRandomInteger(-randomOffsetRangeY, randomOffsetRangeY)

    castrune1 = genDrawLines(rune1, centerOfRuneX, centerOfRuneY, 0, 2)
    castrune2 = genDrawLines(rune2, centerOfRuneX + randomOffsetX, centerOfRuneY + randomOffsetY, 0, 2)

}


function draw() {
    drawRuneCirlce(futhark, centerX, centerY, RuneCirlceRadius, "red")

    const r1 = castrune1.next()
    const r2 = castrune2.next()

    if (r1.done && r2.done) {
        noLoop()
        makeBindRune()
    }

}

function mouseClicked() {
    location.reload()
    
}