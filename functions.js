function firstClick() {
    alarmSound.play()
    document.querySelector('body').removeEventListener('click', firstClick)
}

function toggleMiniTimerDisplay() {
    if (window.getComputedStyle(document.getElementById('miniTimerDisplay')).display === 'none') {
        document.getElementById('miniTimerDisplay').style.display = 'block'
        document.querySelector('.miniTimer').style.color = '#444444'
    } else {
        document.getElementById('miniTimerDisplay').style.display = 'none'
        document.querySelector('.miniTimer').style.color = '#444444'
    }
}

function settingsDisplay() {
    if (window.getComputedStyle(document.querySelector('.formContainer')).display === 'none') {
        document.querySelector('.formContainer').style.display = 'block'
    } else {
        document.querySelector('.formContainer').style.display = 'none'
    }
}

function createCountdownDisplay(timeLeftInSeconds) {
    let seconds = timeLeftInSeconds%60
    let minutes=(timeLeftInSeconds-seconds)/60
    let secondsToDisplay = seconds < 10 ? '0'+seconds : seconds
    let minutesToDisplay = minutes < 10 ? '0'+minutes : minutes
    document.getElementById('miniTimerDisplay').textContent = `${minutesToDisplay}:${secondsToDisplay}`
}

function timesUp(cancelTime) {
    clearTimeout(cancelTime)
    document.getElementById('miniTimerDisplay').textContent = `00:00`
    playSound()

    document.getElementById('timeSelection').style.display='none'
    document.querySelector('#timesUp button').addEventListener('click', resetIt)
    document.querySelector('body').style.backgroundColor='#E81123'
    document.getElementById('timesUp').style.display='block'
}

function cancelIt(cancelTime) {
    clearTimeout(cancelTime);
    document.getElementById('miniTimerDisplay').textContent = `00:00`
    resetIt();
}

function resetIt() {
    document.querySelector('body').style.backgroundColor='#1C2527'
    document.getElementById('timeButtonContainer').style.display='block'
    document.getElementById('cancelButtonContainer').style.display='none'
    document.getElementById('timesUp').style.display='none'
    setRotation(0, 1)
    if (document.getElementById('timeSelection').style.display=== 'none') {
        document.getElementById('timeSelection').style.display='block'
    }
    document.getElementById('timingMode').disabled=false
    document.getElementById('startCustomTime').disabled=false
}

function playSound() {
    let alarmChoice=document.getElementById("alarms").value

    if (alarmChoice!="noSound") {
        switch(alarmChoice) {
            case "hippo":
                alarmSound.src='sounds/hippo.mp3'
                break
            case "hippoChord":
                alarmSound.src='sounds/hippoChordReverb.mp3'
                break
            case "guitarChord":
                alarmSound.src='sounds/guitarChord.mp3'
                break
            case "rockChord":
                alarmSound.src='sounds/rockChord.mp3'
                break
        }
        alarmSound.play()
    }
}
