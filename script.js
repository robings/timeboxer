function timebox(minutesToTime) {
	//alert ('You picked'+minutesToTime);
		timeoutVar=setTimeout(timesUp, (minutesToTime*60000));
	document.getElementById('sectionBox').innerHTML="<div class=\"timerDiv\">Don't close this browser window I'm timing for "+minutesToTime+" minutes</div><button onclick=\"cancelIt(timeoutVar);\">cancel</button>"
		
}

function timesUp() {
	alert ('Time to consult a fellow hippo');
}

function cancelIt(cancelTime) {
	clearTimeout(cancelTime);
}