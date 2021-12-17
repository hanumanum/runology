//let arr;
let allowModif = true
//let crdX = 0
const futharkgen = genDrawSequence(futhark, 20, 20, 0, 80)

function mouseClicked(){
    allowModif = !allowModif
}

function setup() {
    createCanvas(800, 800)
    background("black")
}

function draw() {
    stroke("white")
    futharkgen.next()
}