// digital-clock-js

//third commit:

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function myFunction() {
  var d = new Date();
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

//Step (1) redo the time display by its parts: HH:MM:SS.
//***DONE!***

//Step (2) display the time in 24hr-format.
//***DONE!***

//Step (3) incorporate this somehow in order to make it "tick":
//setInterval(() => {console.log(counter); counter++}, 1000);
//***DONE!***

//Step (4) display the day of the week and the full date in this format:
//Wednesday, 21 October 2020
//use the following code for this:
//var d = new Date();
//document.getElementById("demo").innerHTML = d.toDateString();

