/// <reference path="../00addons/TSDef/p5.global-mode.d.ts" />

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
    drawFuthark(futhark, 50, 50, "red", 2)
}