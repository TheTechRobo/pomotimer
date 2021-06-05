const delay = ms => new Promise(res => setTimeout(res, ms));

function GetConfs () {
	const queryString = window.location.search;
console.log("queryString will follow")
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const confs = urlParams.get('confs');
	if (confs == "5break") {
        WORK = 1500000;
        //WORK = 1000; //i was testing
		BREAK = 300000;
	}
	else if (confs == "10break") {
		WORK = 3000000;
		BREAK = 600000;
	}
}

const yourFunction = async () => { //https://stackoverflow.com/a/47480429/9654083
	for (;;) {
        GetConfs()
	Notif1("Work time!","Pomotimer Alert: WORK!")
        console.log(WORK);
        console.log(BREAK);
        await delay(WORK);
  document.getElementById("bigbold").innerHTML = "Currently On: <b><u>BREAK</u></b>";
Notif1("Break time!","Pomotimer alert: BREAK!");
        await delay(BREAK);
document.getElementById("bigbold").innerHTML = "Currently On: <b><u>WORK</u></b>";
    }}
function Notif1(title, body) {
icon = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsvgsilh.com%2Fsvg%2F26092.svg&imgrefurl=https%3A%2F%2Fsvgsilh.com%2Fimage%2F26092.html&tbnid=CSLXtdRhU_xYCM&vet=12ahUKEwiD-pC7q-fvAhUROawKHUlfD24QMygAegQIARBl..i&docid=CyW1JYWiQHh62M&w=1707&h=1707&q=timer%20cc0&ved=2ahUKEwiD-pC7q-fvAhUROawKHUlfD24QMygAegQIARBl'; //https://levelup.gitconnected.com/creating-browser-notification-in-javascript-79e91bfb76c8
var notification = new Notification(title, { body, icon })
}
