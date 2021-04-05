const delay = ms => new Promise(res => setTimeout(res, ms));

const yourFunction = async () => {
	for (;;) {
	Notif1("Work time!","Pomotimer Alert: WORK!");
  await delay(25000 * 60);
  document.getElementById("bigbold").innerHTML = "Currently On: <b><u>BREAK</u></b>";
Notif1("Break time!","Pomotimer alert: BREAK!");
  await delay(5000 * 60);
	Notif1("Work time!","Pomotimer alert: Work!");
  document.getElementById("bigbold").innerHTML = "Currently On: <b><u>WORK</u></b>";
	}
};
function Notif1(title, body) {
	console.log(1.1)
icon = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsvgsilh.com%2Fsvg%2F26092.svg&imgrefurl=https%3A%2F%2Fsvgsilh.com%2Fimage%2F26092.html&tbnid=CSLXtdRhU_xYCM&vet=12ahUKEwiD-pC7q-fvAhUROawKHUlfD24QMygAegQIARBl..i&docid=CyW1JYWiQHh62M&w=1707&h=1707&q=timer%20cc0&ved=2ahUKEwiD-pC7q-fvAhUROawKHUlfD24QMygAegQIARBl'; //https://levelup.gitconnected.com/creating-browser-notification-in-javascript-79e91bfb76c8
console.log(1.2);var notification = new Notification(title, { body, icon });console.log(1.3)
}
