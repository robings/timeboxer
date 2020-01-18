function timebox(minutesToTime) {
	//alert ('You picked'+minutesToTime);
		timeoutVar=setTimeout(timesUp, (minutesToTime*60000));
	document.getElementById('sectionBox').innerHTML="<div class=\"timerDiv\">Don't close this browser window I'm timing for "+minutesToTime+" minutes</div><button onclick=\"cancelIt(timeoutVar);\">cancel</button>"
		
}

function timesUp() {
	window.focus();
	document.getElementById('sectionBox').innerHTML="<div class=\"endTimeMessage\">Time to consult a fellow hippo<br><button onclick=\"javascript:document.location.reload(false)\">reset</button></div>";
	var alarmSound=new Audio('sounds/hippo.mp3');
	alarmSound.play();
}

function cancelIt(cancelTime) {
	clearTimeout(cancelTime);
	document.location.reload(false);
}