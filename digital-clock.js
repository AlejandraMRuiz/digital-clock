// digital-clock-js

function init() {
var digiclock = document.getElementById("clock");
digiclock.innerHTML = new Date();
}

window.onload = init;

//var digiclock = new Date();
//gets all: day, date and time in HH:MM:SS    

//incorporate this somehow in order to make it "tick":
//setInterval(() => {console.log(counter); counter++}, 1000);
