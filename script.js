function timebox(minutesToTime) {
	//alert ('You picked'+minutesToTime);
		timeoutVar=setTimeout(timesUp, (minutesToTime*600));
	document.getElementById('sectionBox').innerHTML="<div class=\"timerDiv\">Don't close this browser window I'm timing for "+minutesToTime+" minutes</div><button onclick=\"cancelIt(timeoutVar);\">cancel</button>"
		
}

function timesUp() {
	document.getElementById('sectionBox').innerHTML="<div class=\"endTimeMessage\">Time to consult a fellow hippo<button onclick=\"javascript:document.location.reload(false)\">reset</button></div>";
}

function cancelIt(cancelTime) {
	clearTimeout(cancelTime);
	document.location.reload(false);
}