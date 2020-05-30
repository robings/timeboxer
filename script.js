const alarmSound = new Audio()

document.querySelector('body').addEventListener('click', firstClick)
document.querySelector('.testButton').addEventListener('click', toggleMiniTimerDisplay)
document.querySelector('#bigTimerDisplay').addEventListener('click', toggleBigTimerDisplay)
document.getElementById('tenMinutes').addEventListener('click', (e)=>{
	timeBox(10)
})
document.getElementById('fifteenMinutes').addEventListener('click', (e)=>{
	timeBox(15)
})
document.querySelector('.startCustomTime').addEventListener('click', (e)=>{
	if (window.getComputedStyle(document.getElementById('timesUp')).display === 'none' && window.getComputedStyle(document.getElementById('timeboxing')).display === 'none') {
		document.querySelector('.formContainer').style.display = 'none'
		timebox(document.querySelector('input[type="range"]').value)
	}
})

document.getElementById('customTimeDisplay').textContent = document.querySelector('input[type="range"]').value + ' min'
document.querySelector('input[type="range"]').addEventListener('input', ()=>{
	document.getElementById('customTimeDisplay').textContent = document.querySelector('input[type="range"]').value + ' min'
})

document.querySelector('.settingsButton ion-icon').addEventListener('click', settingsDisplay)

document.querySelector('.close span').addEventListener('click', ()=> {
	document.querySelector('.formContainer').style.display = 'none'
})

document.getElementById('alarms').addEventListener('change', playSound)