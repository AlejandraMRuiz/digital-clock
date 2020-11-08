// this commit corrects all points in code review

let is24HourTime = true;


function currentTime() {
  const date = new Date();

  const full_date = document.getElementById("day");
  full_date.textContent = date.toDateString();
  const digiClock = document.getElementById("clock");

  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());
  const display12hr = hours == 0 ? 12 : hours > 12 ? hours - 12 : hours;
  const meridian = hours >= 12 ? "PM" : "AM";
  const time12hr = display12hr + ":" + minutes + ":" + seconds + " " + meridian;
  const time24hr = hours + ":" + minutes + ":" + seconds;

  digiClock.textContent = is24HourTime ? time24hr : time12hr;
}


function addLeadingZero(number) {
  return number < 10 ? number = "0" + number : number;
}


window.addEventListener("DOMContentLoaded", () => {
  const timeFormatBtn = document.getElementById("button");
  timeFormatBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    is24HourTime = !is24HourTime;
  });  
});


currentTime();
setInterval(currentTime, 1000);