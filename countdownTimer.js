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

let timerInterval

function timeBox(minutesToTime) {
    let m = minutesToTime
    let s = minutesToTime * 60
    let remainingS = s

    let startTime = new Date()

    let hoursRotationSet = (m*(360/60)) + (((s%60*(360/60))/60))

    if (window.getComputedStyle(document.querySelector('.formContainer')).display === 'block') {
        document.querySelector('.formContainer').style.display = 'none'
    }

    document.getElementById('timingMode').disabled=true
    document.getElementById('startCustomTime').disabled=true

    document.getElementById('turningClockFace').style.transform=`rotate(-${hoursRotationSet}deg)`
    document.getElementById('turningClockFace').style.transformOrigin='center'

    setRotation(s)
    createCountdownDisplay(s)

    timerInterval = setInterval(()=> {
        if (document.getElementById('timingMode').value === 'compareSystemTime') {
            let timeNow = new Date()
            let timeDifference = Math.floor((timeNow - startTime)/1000)
            remainingS = s - timeDifference
        } else {
            remainingS--
        }

        setRotation(remainingS)
        createCountdownDisplay(remainingS)
    }, 1000)

    document.getElementById('timeButtonContainer').style.display='none'
    document.getElementById('cancelButtonContainer').style.display='block'

    document.querySelector('#cancelButtonContainer button').addEventListener('click', (e)=>{
        cancelIt(timerInterval)
    })
}

function setRotation(s, origin = 0) {
    let secondsRotation = s === 0 ? 0 : (s%60*(360/60))
    m = s < 60 ? 0 : (s-s%60)/60

    document.getElementById('secondsRing').style.transform=`rotate(${-secondsRotation}deg)`
    document.getElementById('secondsRing').style.transformOrigin='center'

    let hoursRotationSet = s === 0 ? 0 : (m*(360/60)) + (((s%60*(360/60))/60))

    document.getElementById('turningClockFace').style.transform=`rotate(-${hoursRotationSet}deg)`
    document.getElementById('turningClockFace').style.transformOrigin='center'

    if (s <= 0 && origin === 0) {
        timesUp(timerInterval)
    }
}
