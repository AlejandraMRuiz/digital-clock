// digital-clock-js

// this commit adds styling

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myFunction() {
  var d = new Date();
  var full_date = document.getElementById("day");
  full_date.innerHTML = d.toDateString();
  var digiclock = document.getElementById("clock");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  digiclock.innerHTML = h + ":" + m + ":" + s;
  setInterval(() => {myFunction(); h++}, 1000);
  setInterval(() => {myFunction(); m++}, 1000);
  setInterval(() => {myFunction(); s++}, 1000);
}


//PLAN:

//Step (1) Get the clock to display without
//the need of pushing the button.

//Step (2) Get the button to toggle btwn
//12-24hr formats.
