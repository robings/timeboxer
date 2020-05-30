let svg=document.getElementById('turningClockFace')
for (let i=0; i<(12*5); i++) {
    let newLine=document.createElementNS('http://www.w3.org/2000/svg', 'line')
    newLine.setAttribute('x1', '200')
    newLine.setAttribute('y1', '70')
    newLine.setAttribute('x2', '200')
    newLine.setAttribute('y2', '74')
    newLine.style.stroke='#444444'
    newLine.style.strokeWidth='1'
    newLine.style.transform=`rotate(${i*6}deg)`
    newLine.style.transformOrigin='center'
    svg.appendChild(newLine)
}

let timeToTime = 5

let m = timeToTime
let s = timeToTime * 60

console.log (s%60)

let hoursRotationSet = (m*(360/60)) + (((s%60*(360/60))/60))

document.getElementById('turningClockFace').style.transform=`rotate(-${hoursRotationSet}deg)`
document.getElementById('turningClockFace').style.transformOrigin='center'

setRotation()

let timerInterval = setInterval(()=> {
    s--
    setRotation()
}, 1000)

function setRotation() {
    let secondsRotation = s === 0 ? 0 : (s%60*(360/60))
    m = s < 60 ? 0 : (s-s%60)/60

    document.getElementById('secondsRing').style.transform=`rotate(${-secondsRotation}deg)`
    document.getElementById('secondsRing').style.transformOrigin='center'

    hoursRotationSet = s === 0 ? 0 : (m*(360/60)) + (((s%60*(360/60))/60))

    document.getElementById('turningClockFace').style.transform=`rotate(-${hoursRotationSet}deg)`
    document.getElementById('turningClockFace').style.transformOrigin='center'

    if (s === 0) {
        clearInterval(timerInterval)
    }
}
