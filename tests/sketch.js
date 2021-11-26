( async function(){
    let randomNumb = await getQuantumRandomNumbers()
    console.log(randomNumb)
})()


let arr;
let allowModif = true
let crdX = 0
let runes = [fehu, uruz]

const futharkgen = genDrawSequence(futhark, 20, 20, 0, 80)

/*
const fehugen = genDrawLines(fehu, crdX+=20, 20, 0)
const uruzgen = genDrawLines(uruz, crdX+=80, 20, 0)
const turisazgen = genDrawLines(turisaz, crdX+=80, 20, 0)
const ansuzgen = genDrawLines(ansuz, crdX+=80, 20, 0)
const raidogen = genDrawLines(raido, crdX+=80, 20, 0)
const kenazgen = genDrawLines(kenaz, crdX+=80, 20, 0)
*/
//const rune = genDrawLines(futhark[futhark.length-2], 100, 200, 0)


function mouseClicked(){
    console.log(mouseX-150, mouseY-200)
    console.log(arr)
    allowModif = !allowModif
}

function setup() {
    createCanvas(800, 800)
    background("black")
}

function draw() {
    stroke("white")

    futharkgen.next()
    /*
    uruzgen.next()
    turisazgen.next()
    ansuzgen.next()
    raidogen.next()
    kenazgen.next()
    */
    /*
    if(allowModif){
        arr = debugCoordinates(fehu, 10)
    }
    */
    
    //line(x1, y1, x2, y2)
    //gline.next()
    //gline1.next()
    //gline2.next()
}