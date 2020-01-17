function timebox(minutesToTime) {
	//alert ('You picked'+minutesToTime);
		timeoutVar=setTimeout(timesUp, (minutesToTime*60000));
	document.getElementById('sectionBox').innerHTML="<div class=\"timerDiv\">Don't close this browser window I'm timing for "+minutesToTime+" minutes</div><button onclick=\"cancelIt(timeoutVar);\">cancel</button>"
		
}

function timesUp() {
	document.getElementById('sectionBox').innerHTML="<div class=\"endTimeMessage\"><img src=\"images/pygmy-hippos.jpg\" alt=\"two pigmy hippos\" />Time to consult a fellow hippo</div>";
}

function cancelIt(cancelTime) {
	clearTimeout(cancelTime);
	document.location.reload(true);
}