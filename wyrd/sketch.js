/// <reference path="../00addons/TSDef/p5.global-mode.d.ts" />
const gridWidth = 60
const gridHeight = 30

let wyrdGrid = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background("black")
    angleMode(DEGREES)
    makeWyrdGrid()
}

function draw() {
    drawWyrdGridPoints()
}


function makeWyrdGrid() {
    let i = 0

    for (let y = 0; y < height; i += gridHeight) {
        wyrdGrid[i] = []
        for (let x = 0; x < width; i += gridWidth) {
            console.log(wyrdGrid[i])
            wyrdGrid[i].push([x, y])
        }
        i++
    }
}

function drawWyrdGridPoints() {
    console.log(wyrdGrid)
}