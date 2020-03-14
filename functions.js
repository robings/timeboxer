function timebox(minutesToTime) {
    let seconds=0
    let timeoutVar=setInterval(()=>{
        seconds+=1000
        let timeLeft=((minutesToTime*60000)-(seconds))
        console.log(timeLeft)
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
    resetIt();
}

function resetIt() {
    document.getElementById('timeSelection').style.display='block'
    document.getElementById('timeboxing').style.display='none'
    document.getElementById('timesUp').style.display='none'
}