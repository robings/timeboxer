document.querySelector('.testButton').addEventListener('click', (e)=>{
	if (window.getComputedStyle(document.getElementById('timesUp')).display === 'none') {
		timebox(0.1)
	}
})
document.getElementById('tenMinutes').addEventListener('click', (e)=>{
	timebox(10)
})
document.getElementById('fifteenMinutes').addEventListener('click', (e)=>{
	timebox(15)
})