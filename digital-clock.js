// digital-clock-js

// this commit cleans code + successfully executes 12/24hr toggle

let militaryTime = true;

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function currentTime() {
  var d = new Date();
  var full_date = document.getElementById("day");
  full_date.innerHTML = d.toDateString();
  var digiclock = document.getElementById("clock");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  const display12hr = h > 12 ? h - 12 : h;
  const meridian = h >= 12 ? "PM" : "AM";
  const time12hr = display12hr + ":" + m + ":" + s + " " + meridian;
  const time24hr = h + ":" + m + ":" + s;

  if (militaryTime) {
    digiclock.innerHTML = time24hr;
  } else  {
      digiclock.innerHTML = time12hr;
    }
}

function toggleTime(click)  {
  click.stopPropagation();
  militaryTime = !militaryTime;
  console.log(militaryTime);
}

window.addEventListener("DOMContentLoaded", (event) => {
  const timeFormatBtn = document.getElementById("button");
  timeFormatBtn.addEventListener("click", toggleTime);  
});

setInterval(() => currentTime(), 1000);


//PLAN:

//Step (0) Separate day & time so day starts 
//displaying upon opening the site.
//***DONE!***

//Step (1) Get the clock to display standard
//time without the need of pushing the button.
//***DONE!***

//Step (2) Get the button to toggle between
//12-24hr formats.
//***DONE!***