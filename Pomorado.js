WORK = 25000 * 60;
BREAK = 5000 * 60;
const delay = ms => new Promise(res => setTimeout(res, ms));

function GetConfs () {
	var confs = document.forms["form"]["confs"].value;
	if (confs == "5break") {
		WORK = 25000 / 2;
		BREAK = 5000 / 2;
	}
	else if (confs == "10break") {
		WORK = 50000 / 2;
		BREAK = 10000 / 2;
	}
}

const yourFunction = async () => { //https://stackoverflow.com/a/47480429/9654083
	for (;;) {
	Notif1("Work time!","Pomotimer Alert: WORK!");
for(var times = 120;var i=0; i < times; i++){ await delay(WORK) }
  document.getElementById("bigbold").innerHTML = "Currently On: <b><u>BREAK</u></b>";
Notif1("Break time!","Pomotimer alert: BREAK!");
  for(var times = 120;var i=0; i < times; i++){ await delay(WORK) }//https://stackoverflow.com/a/10993837/9654083
  document.getElementById("bigbold").innerHTML = "Currently On: <b><u>WORK</u></b>";
		document.getElementById("placeToRest").innerHTML = ""
	}
};
function Notif1(title, body) {
icon = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsvgsilh.com%2Fsvg%2F26092.svg&imgrefurl=https%3A%2F%2Fsvgsilh.com%2Fimage%2F26092.html&tbnid=CSLXtdRhU_xYCM&vet=12ahUKEwiD-pC7q-fvAhUROawKHUlfD24QMygAegQIARBl..i&docid=CyW1JYWiQHh62M&w=1707&h=1707&q=timer%20cc0&ved=2ahUKEwiD-pC7q-fvAhUROawKHUlfD24QMygAegQIARBl'; //https://levelup.gitconnected.com/creating-browser-notification-in-javascript-79e91bfb76c8
var notification = new Notification(title, { body, icon })
}
