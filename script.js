document.querySelector('.testButton').addEventListener('click', toggleMiniTimerDisplay)
document.querySelector('#bigTimerDisplay').addEventListener('click', toggleBigTimerDisplay)
document.getElementById('tenMinutes').addEventListener('click', (e)=>{
	timebox(10)
})
document.getElementById('fifteenMinutes').addEventListener('click', (e)=>{
	timebox(15)
})
document.querySelector('.startCustomTime').addEventListener('click', (e)=>{
	if (window.getComputedStyle(document.getElementById('timesUp')).display === 'none' && window.getComputedStyle(document.getElementById('timeboxing')).display === 'none') {
		timebox(document.querySelector('input[type="range"]').value)
	}
})

document.getElementById('customTimeDisplay').textContent = document.querySelector('input[type="range"]').value + ' min(s)'
document.querySelector('input[type="range"]').addEventListener('input', ()=>{
	document.getElementById('customTimeDisplay').textContent = document.querySelector('input[type="range"]').value + ' min(s)'
})