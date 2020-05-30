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

function toggleBigTimerDisplay() {
    bigTimerIsOn = document.getElementById('minutesToTime')
    if (bigTimerIsOn.dataset['timer'] === '0') {
        bigTimerIsOn.dataset['timer'] = '1'
        document.getElementById('bigTimerDisplay').innerHTML = '&darr;'
        bigTimerIsOn.style.fontSize='4rem'
        bigTimerIsOn.style.display='block'
    } else {
        bigTimerIsOn.dataset['timer'] = '0'
        document.getElementById('bigTimerDisplay').innerHTML = '&uarr;'
        bigTimerIsOn.style.fontSize='1rem'
        bigTimerIsOn.style.display='inline-block'
    }
}

function settingsDisplay() {
    if (window.getComputedStyle(document.querySelector('.formContainer')).display === 'none') {
        document.querySelector('.formContainer').style.display = 'block'
    } else {
        document.querySelector('.formContainer').style.display = 'none'
    }
}

function timeboxOld(minutesToTime) {
    let seconds=0
    let timeLeft=((minutesToTime*60000)-(seconds))
    createCountdownDisplay(timeLeft)
    let timeoutVar=setInterval(()=>{
        seconds+=1000
        timeLeft=((minutesToTime*60000)-(seconds))
        createCountdownDisplay(timeLeft)
        if (timeLeft == 0) {
            timesUp(timeoutVar)
        }
    },1000)
    document.getElementById('timeSelection').style.display='none'
    if (document.getElementById('minutesToTime').dataset['timer'] === '0') {
        document.getElementById('minutesToTime').textContent = minutesToTime
    }
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
    if (document.getElementById('minutesToTime').dataset['timer'] === '1') {
        document.getElementById('minutesToTime').textContent = `${minutesToDisplay}:${secondsToDisplay}`
    }
}

function timesUp(cancelTime) {
    window.focus()
    clearTimeout(cancelTime)
    document.getElementById('miniTimerDisplay').textContent = `00:00`
    playSound()

    document.getElementById('timeboxing').style.display='none'
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
    document.getElementById('timeSelection').style.display='block'
    document.getElementById('timeboxing').style.display='none'
    document.getElementById('timesUp').style.display='none'
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
