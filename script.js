const alarmSound = new Audio()

document.querySelector('body').addEventListener('click', firstClick)
document.querySelector('.testButton').addEventListener('click', toggleMiniTimerDisplay)

document.querySelectorAll('.timeSelectButton')[0].addEventListener('click', (e)=>{
	timeBox(5)
})
document.querySelectorAll('.timeSelectButton')[1].addEventListener('click', (e)=>{
	timeBox(10)
})
document.querySelectorAll('.timeSelectButton')[2].addEventListener('click', (e)=>{
	timeBox(15)
})

document.getElementById('startCustomTime').addEventListener('click', (e)=>{
	e.preventDefault()
	document.querySelector('.formContainer').style.display = 'none'
	timeBox(document.querySelector('input[type="range"]').value)
})

document.getElementById('customTimeDisplay').textContent = document.querySelector('input[type="range"]').value + ' min'
document.querySelector('input[type="range"]').addEventListener('input', ()=>{
	document.getElementById('customTimeDisplay').textContent = document.querySelector('input[type="range"]').value + ' min'
})

document.querySelector('.settingsButton ion-icon').addEventListener('click', settingsDisplay)

document.querySelector('.close span').addEventListener('click', ()=> {
	settingsDisplay()
})

document.getElementById('alarms').addEventListener('change', playSound)
