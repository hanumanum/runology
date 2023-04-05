/// <reference path="../00addons/TSDef/p5.global-mode.d.ts" />

//DEBUG GLOBALS
const SHOWBOUNDS = true
const SHOWCENTER = true

//let arr;
let allowModif = true
//let crdX = 0
const futharkgen = genDrawSequence(futhark, 20, 20, 0, 80)

function mouseClicked(){
    allowModif = !allowModif
}

function setup() {
    createCanvas(1500, 800)
    background("black")
}

function draw() {
    stroke("white")
    futharkgen.next()
}