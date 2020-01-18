function timebox(minutesToTime) {
	//alert ('You picked'+minutesToTime);
		timeoutVar=setTimeout(timesUp, (minutesToTime*60000));
	document.getElementById('sectionBox').innerHTML="<div class=\"timerDiv\">Don't close this browser window I'm timing for "+minutesToTime+" minutes</div><button onclick=\"cancelIt(timeoutVar);\">cancel</button>"
		
}

function timesUp() {
	window.focus();
	document.getElementById('sectionBox').innerHTML="<div class=\"endTimeMessage\">Time to consult a fellow hippo<br><button onclick=\"javascript:document.location.reload(false)\">reset</button></div>";
	var alarmChoice=document.getElementById("alarms").value;
	var alarmSound=0;
	if (alarmChoice!="noSound") {
		switch(alarmChoice) {
			case "hippo":
					alarmSound=new Audio('sounds/hippo.mp3');
					break;
			case "hippoChord":
					alarmSound=new Audio('sounds/hippoChordReverb.mp3');
					break;
			case "guitarChord":
					alarmSound=new Audio('sounds/guitarChord.mp3');
					break;
			case "rockChord":
					alarmSound=new Audio('sounds/rockChord.mp3');
					break;		
		}
		alarmSound.play();
	}
}

function cancelIt(cancelTime) {
	clearTimeout(cancelTime);
	document.getElementById('sectionBox').innerHTML="<div id=\"tenMinutes\" class=\"tenMins\" onclick=\"timebox(10);\">give me 10 minutes</div><div id=\"fifteenMinutes\" class=\"fifteenMins\" onclick=\"timebox(15);\">give me 15 minutes</div>"
}