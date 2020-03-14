document.querySelector('.testButton').addEventListener('click', toggleMiniTimerDisplay)
document.querySelector('#bigTimerDisplay').addEventListener('click', toggleBigTimerDisplay)
document.getElementById('tenMinutes').addEventListener('click', (e)=>{
	timebox(10)
})
document.getElementById('fifteenMinutes').addEventListener('click', (e)=>{
	timebox(15)
})