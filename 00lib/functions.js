/// <reference path="../00addons/TSDef/p5.global-mode.d.ts" />

function* genDrawSequence(arr, x, y, r, margin) {
    while (figure = arr.shift()) {
        let genFigure = genDrawLines(figure, x, y, r)
        while (true) {
            yield
            let ggf = genFigure.next()
            if (ggf.done) {
                break
            }
        }
        x += margin

    }
}


function* genDrawLines(arrOfLines, x, y, rotatiion = 0, scalation = 1, colorName = "red") {
    while (_line = arrOfLines.shift()) {
        let genLine = genDrawLine(..._line, colorName, "scrape")
        while (true) {
            yield
            push()
            translate(x, y)
            rotate(rotatiion)
            scale(scalation)
            let gg = genLine.next()
            pop()
            if (gg.done) {
                break
            }
        }
    }
}


function* genDrawLine(_x1, _y1, _x2, _y2, linecolor, style = "scrape") {
    let x1 = _x1, y1 = _y1, x2, y2
    const corrdsGen = genBresenhamCoordinatesOfLine(_x1, _y1, _x2, _y2)
    while (true) {
        yield
        let cords = corrdsGen.next()
        if (cords.done) {
            break
        }

        x2 = cords.value.x
        y2 = cords.value.y

        push()
        stroke(linecolor)
        strokeWeight(10 * noise(x1, y1))
        line(x1, y1, x2, y2)
        pop()

        x1 = x2
        y1 = y2
    }
}

function* genBresenhamCoordinatesOfLine(x0, y0, x1, y1) {

    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;

    let err = (dx > dy ? dx : -dy) / 2;
    while (true) {
        yield { x: x0, y: y0 }

        if (x0 === x1 && y0 === y1) {
            break;
        }
        if (err > -dx) {
            err -= dy;
            x0 += sx;
        }
        if (x0 === x1 && y0 === y1) {
            break;
        }
        if (err < dy) {
            err += dx;
            y0 += sy;
        }
        if (x0 === x1 && y0 === y1) {
            break;
        }
    }

}

function* genCoordinatesOfLine(x1, y1, x2, y2, step) {
    for (let x = x1; x <= x2; x += step) {
        let a = (y1 - y2) / (x1 - x2)
        let b = y1 - a * x1
        let newY = a * x + b
        yield {
            x: x
            , y: newY
        }
    }
}



function debugCoordinates(array, sensitivity) {
    background("black")
    for (let a of array) {
        if (dist(a[0], a[1], mouseX, mouseY) <= sensitivity) {
            a[0] = mouseX
            a[1] = mouseY
        }
        else if (dist(a[2], a[3], mouseX, mouseY) <= sensitivity) {
            a[2] = mouseX
            a[3] = mouseY
        }

        line(...a)
    }

    return array

}

function getCenterOfGrid(){
    return {
        x:25,
        y:75
    }
}

function caclRealCenter(rune) {
    let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity

    for (let l of rune) {
        xMin = Math.min(xMin, l[0], l[2])
        xMax = Math.max(xMax, l[0], l[2])
        yMin = Math.min(yMin, l[1], l[3])
        yMax = Math.max(yMax, l[1], l[3])
    }
    return {
        x: int((xMax + xMin) / 2),
        y: int((yMax + yMin) / 2)
    }
}

function drawCenter(x, y){
    const center = getCenterOfGrid()
    push()
    translate(x, y)
    translate(center.x, center.y)
    fill("blue")
    circle(0, 0, 10)
    pop()
}

function drawRune(arrOfLines, x, y, _color = "red", boldness = 2, rotatiion = 0, scalation = 1) {
    
    if(SHOWBOUNDS){
        push()
        noFill()
        stroke("white")
        translate(x, y)
        rect(0, 0, 50, 150)
        pop()
    
    }


    for (let l of arrOfLines) {
        push()
        translate(x, y)
        strokeWeight(boldness)
        stroke(_color)
        rotate(rotatiion)
        scale(scalation)
        line(l[0], l[1], l[2], l[3])
        pop()
    }

    if(SHOWCENTER){
        drawCenter(x, y)
    }
 
}


function drawFuthark(futhark, x, y, _color, _stroke) {
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

function drawRuneCirlce(futhark, centerX, centerY, r, colorName){
    let angleStep = 360/futhark.length;
    for (let i = 0; i < futhark.length; i++) {
        const rune = futhark[i];
        let angle = angleStep * i - 90;
        let x = centerX + r * cos(angle);
        let y = centerY + r * sin(angle);
        push()
        translate(x, y)
        rotate(angle+90)
        drawRune(rune, 0, 0, colorName, 3, 0, 0.5);
        pop()
    }
}


async function getQuantumRandomNumbers(length = 1) {
    const url = `https://qrng.anu.edu.au/API/jsonI.php?length=${length}&type=uint8`
    const response = await fetch(url)
    const json = await response.json()
    return json.data
}


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}