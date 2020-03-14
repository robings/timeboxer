function toggleMiniTimerDisplay() {
    if (window.getComputedStyle(document.getElementById('miniTimerDisplay')).display === 'none') {
        document.getElementById('miniTimerDisplay').style.display = 'block'
        document.getElementById('bigTimerSelector').style.display = 'block'
        document.querySelector('.miniTimer').style.color = 'black'
    } else {
        document.getElementById('miniTimerDisplay').style.display = 'none'
        document.getElementById('bigTimerSelector').style.display = 'none'
        document.querySelector('.miniTimer').style.color = 'gray'
    }
}

function toggleBigTimerDisplay() {
    console.log('Big timer Display toggle clicked')
}

function timebox(minutesToTime) {
    let seconds=0
    let timeLeft=((minutesToTime*60000)-(seconds))
    createCountdownDisplay(timeLeft)
    let timeoutVar=setInterval(()=>{
        seconds+=1000
        timeLeft=((minutesToTime*60000)-(seconds))
        createCountdownDisplay(timeLeft)
        if (timeLeft == 0) {
            cancelIt(timeoutVar)
        }
    },1000)
    document.getElementById('timeSelection').style.display='none'
    document.getElementById('minutesToTime').textContent = minutesToTime
    document.querySelector('#timeboxing button').addEventListener('click', (e)=>{
        cancelIt(timeoutVar)
    })
    document.getElementById('timeboxing').style.display='block'
}

function createCountdownDisplay(timeLeft) {
    let timeLeftInSeconds = timeLeft/1000
    let seconds = timeLeftInSeconds%60
    let minutes=(timeLeftInSeconds-seconds)/60
    let secondsToDisplay = seconds < 10 ? '0'+seconds : seconds
    let minutesToDisplay = minutes < 10 ? '0'+minutes : minutes
    document.getElementById('miniTimerDisplay').textContent = `${minutesToDisplay}:${secondsToDisplay}`
}

function timesUp() {
    window.focus()
    let alarmChoice=document.getElementById("alarms").value
    let alarmSound=0;
    if (alarmChoice!="noSound") {
        switch(alarmChoice) {
            case "hippo":
                alarmSound=new Audio('sounds/hippo.mp3')
                break
            case "hippoChord":
                alarmSound=new Audio('sounds/hippoChordReverb.mp3')
                break
            case "guitarChord":
                alarmSound=new Audio('sounds/guitarChord.mp3')
                break
            case "rockChord":
                alarmSound=new Audio('sounds/rockChord.mp3')
                break
        }
        alarmSound.play()
    }

    document.getElementById('timeboxing').style.display='none'
    document.querySelector('#timesUp button').addEventListener('click', resetIt)
    document.getElementById('timesUp').style.display='block'
}

function cancelIt(cancelTime) {
    clearTimeout(cancelTime);
    document.getElementById('miniTimerDisplay').textContent = `00:00`
    resetIt();
}

function resetIt() {
    document.getElementById('timeSelection').style.display='block'
    document.getElementById('timeboxing').style.display='none'
    document.getElementById('timesUp').style.display='none'
}