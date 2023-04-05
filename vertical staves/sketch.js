/// <reference path="../00addons/TSDef/p5.global-mode.d.ts" />

//DEBUG GLOBALS
const SHOWBOUNDS = false
const SHOWCENTER = false

let rune, castrune
let _left = 50
let _top = 50
let letftOffset = 100
let topOffset = 100

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background("black")
    angleMode(DEGREES)
    nextRune()
    frameRate(120)
    
    //blendMode(DIFFERENCE) //DIFFERENCE !, REPLACE :) , 
}


function nextRune() {
    const futhark = getFuthark()
    const rune1Index = getRandomInteger(0, futhark.length - 1)
    rune = futhark[rune1Index]
    rune = rune.map((point) => point.map((coord) => int(coord * 1.3)))
    castrune = genDrawLines(rune, _left, _top + getRandomInteger(-10, 10), 0, 1, "red")
    _top += topOffset
}


function draw() {
    stroke("white")
    if (frameCount % 37 === 0) {
        point(getRandomInteger(0, window.innerWidth), getRandomInteger(0, window.innerHeight))
    }

    if (_top + topOffset > height) {
        _top = 50
        _left += letftOffset
    }

    if (_left + letftOffset > width) {
        noLoop()
    }

    const r = castrune.next()
    if (r.done) {
        nextRune()
    }
}