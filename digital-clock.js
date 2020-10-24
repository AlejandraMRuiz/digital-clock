// digital-clock-js

// this commit displays day & time upon opening the site

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
}

  setInterval(() => {myFunction(); h++, m++, s++}, 1000);
  




//PLAN:

//Step (0) Separate day & time so day starts 
//displaying upon opening the site.
//***DONE!***

//Step (1) Get the clock to display standard
//time without the need of pushing the button.
//***DONE!***

//Step (2) Get the button to toggle btwn
//12-24hr formats.
