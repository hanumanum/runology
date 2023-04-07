/// <reference path="../00addons/TSDef/p5.global-mode.d.ts" />
const gridStepX = 50
const gridStepY = 80
const fromCenterX = gridStepX + 10
const fromCenterY = gridStepY * 4
const centerX = (window.innerWidth - 10) / 2
const centerY = (window.innerHeight - 10) / 2
const wyrdReplacementPeroid = 300

let wyrdGrid = []
let wyrd = []

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 10)
    angleMode(DEGREES)
    makeWyrdGrid()
    //frameRate(1)
}

function draw() {
    const _wyrdGrid = wyrdGrid //mutateWirdGrid(wyrdGrid)
    clear()
    drawWyrdGrid(_wyrdGrid)
    drawWyrdByLines(_wyrdGrid)
}


function makeWyrdGrid() {
    let i = 0
    for (let y = 0; y <= height + gridStepY; y += gridStepY) {
        wyrdGrid[i] = new Array()
        for (let x = 0; x <= width + gridStepX; x += gridStepX) {
            wyrdGrid[i].push([x, y])
        }
        i++
    }
}

function drawWyrdGridPoints(_wyrdGrid) {
    for (let y = 0; y < _wyrdGrid.length; y++) {
        for (let x = 0; x < _wyrdGrid[y].length; x++) {
            ellipse(_wyrdGrid[y][x][0], _wyrdGrid[y][x][1], 1, 1)
        }
    }
}


function drawWyrdGrid(_wyrdGrid) {

    for (let y = 0; y < _wyrdGrid.length; y++) {
        for (let x = 0; x < _wyrdGrid[y].length; x++) {
            const currentPoint = _wyrdGrid[y][x]
            const bottomPoint = (_wyrdGrid[y + 1]) ? _wyrdGrid[y + 1][x] : undefined
            const rightBottomPoint = (_wyrdGrid[y + 1] && _wyrdGrid[y + 1][x + 1]) ? _wyrdGrid[y + 1][x + 1] : undefined
            const leftBottomPoint = (_wyrdGrid[y + 1] && _wyrdGrid[y + 1][x - 1]) ? _wyrdGrid[y + 1][x - 1] : undefined

            strokeWeight(1)
            const blue = map(dist(currentPoint[0], currentPoint[1], centerX, centerY), 0, height, 255, 0)
            const _blue = blue + sin(frameCount) * 100

            stroke(0, 0, _blue)
            if (bottomPoint && random(0,1) > 0.1) {
                line(currentPoint[0], currentPoint[1], bottomPoint[0], bottomPoint[1])
            }

            if (rightBottomPoint && random(0,1) > 0.1) {
                line(currentPoint[0], currentPoint[1], rightBottomPoint[0], rightBottomPoint[1])
            }

            if (leftBottomPoint && random(0,1) > 0.1) {
                line(currentPoint[0], currentPoint[1], leftBottomPoint[0], leftBottomPoint[1])
            }

        }
    }
}



function drawWyrdByLines(_wyrdGrid) {

    for (let _line of wyrd) {
        stroke(255, 0, 0)
        strokeWeight(random([2, 3, 4]))
        line(_line[0], _line[1], _line[2], _line[3])
    }

    if (frameCount === 1 || frameCount % wyrdReplacementPeroid === 0) {
        wyrd = []
        for (let y = 0; y < _wyrdGrid.length; y++) {
            for (let x = 0; x < _wyrdGrid[y].length; x++) {
                const currentPoint = _wyrdGrid[y][x]
                const bottomPoint = (_wyrdGrid[y + 1]) ? _wyrdGrid[y + 1][x] : undefined
                const rightBottomPoint = (_wyrdGrid[y + 1] && _wyrdGrid[y + 1][x + 1]) ? _wyrdGrid[y + 1][x + 1] : undefined
                const leftBottomPoint = (_wyrdGrid[y + 1] && _wyrdGrid[y + 1][x - 1]) ? _wyrdGrid[y + 1][x - 1] : undefined

                if (currentPoint[0] > centerX - fromCenterX && currentPoint[0] < centerX + fromCenterX && currentPoint[1] > centerY - fromCenterY && currentPoint[1] < centerY + fromCenterY) {
                    const rightTopPoint = (_wyrdGrid[y - 1] && _wyrdGrid[y - 1][x + 1]) ? _wyrdGrid[y - 1][x + 1] : undefined
                    const leftTopPoint = (_wyrdGrid[y - 1] && _wyrdGrid[y - 1][x - 1]) ? _wyrdGrid[y - 1][x - 1] : undefined
                    const topPoint = (_wyrdGrid[y - 1]) ? _wyrdGrid[y - 1][x] : undefined

                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], bottomPoint[0], bottomPoint[1]])
                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], topPoint[0], topPoint[1]])

                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], rightTopPoint[0], rightTopPoint[1]])
                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], leftTopPoint[0], leftTopPoint[1]])

                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], rightBottomPoint[0], rightBottomPoint[1]])
                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], leftBottomPoint[0], leftBottomPoint[1]])

                }

            }
        }
    }
}



const FutarkOfWyrd = [
    
]


function drawWyrdByRunes(_wyrdGrid) {

    for (let _line of wyrd) {
        stroke(255, 0, 0)
        strokeWeight(random([2, 3, 4]))
        line(_line[0], _line[1], _line[2], _line[3])
    }


    /*
    if (frameCount === 1 || frameCount % wyrdReplacementPeroid === 0) {
        wyrd = []
        for (let y = 0; y < _wyrdGrid.length; y++) {
            for (let x = 0; x < _wyrdGrid[y].length; x++) {
                const currentPoint = _wyrdGrid[y][x]
                const bottomPoint = (_wyrdGrid[y + 1]) ? _wyrdGrid[y + 1][x] : undefined
                const rightBottomPoint = (_wyrdGrid[y + 1] && _wyrdGrid[y + 1][x + 1]) ? _wyrdGrid[y + 1][x + 1] : undefined
                const leftBottomPoint = (_wyrdGrid[y + 1] && _wyrdGrid[y + 1][x - 1]) ? _wyrdGrid[y + 1][x - 1] : undefined

                if (currentPoint[0] > centerX - fromCenterX && currentPoint[0] < centerX + fromCenterX && currentPoint[1] > centerY - fromCenterY && currentPoint[1] < centerY + fromCenterY) {
                    const rightTopPoint = (_wyrdGrid[y - 1] && _wyrdGrid[y - 1][x + 1]) ? _wyrdGrid[y - 1][x + 1] : undefined
                    const leftTopPoint = (_wyrdGrid[y - 1] && _wyrdGrid[y - 1][x - 1]) ? _wyrdGrid[y - 1][x - 1] : undefined
                    const topPoint = (_wyrdGrid[y - 1]) ? _wyrdGrid[y - 1][x] : undefined

                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], bottomPoint[0], bottomPoint[1]])
                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], topPoint[0], topPoint[1]])

                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], rightTopPoint[0], rightTopPoint[1]])
                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], leftTopPoint[0], leftTopPoint[1]])

                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], rightBottomPoint[0], rightBottomPoint[1]])
                    random(0, 1) > 0.5 && wyrd.push([currentPoint[0], currentPoint[1], leftBottomPoint[0], leftBottomPoint[1]])

                }

            }
        }
        
    }
    */
}


function mutateWirdGrid(wyrdGrid) {
    const _wyrdGrid = [...wyrdGrid].map(line => [...line].map(point => [...point]))

    for (let y = 0; y < _wyrdGrid.length; y++) {
        for (let x = 0; x < _wyrdGrid[y].length; x++) {
            _wyrdGrid[y][x][0] += sin(frameCount) //* (x+y)
            _wyrdGrid[y][x][1] += cos(frameCount) //* (x-y)
        }
    }

    return _wyrdGrid;
}

let looping = true
function mouseClicked() {
    (looping) ? noLoop() : loop()
    looping = !looping
}