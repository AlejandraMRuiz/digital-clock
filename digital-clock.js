
// this commit displays 12am vs 00am

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
  const display12hr = h == 0 ? 12 : h > 12 ? h - 12 : h;
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