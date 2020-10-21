// digital-clock-js

//first commit:
//function init() {
//var digiclock = document.getElementById("clock");
//digiclock.innerHTML = new Date();
//}
//window.onload = init;


//second commit:
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


    //What I've tried that hasn't worked:

    //digiclock.innerHTML = setInterval(() => {console.log(d); d++}, 1000);
    //digiclock.innerHTML = h + ":" + m + ":" + s;
    //setInterval(() => {new Date(h); new Date(h)++}, 1000);
    //setInterval(() => {new Date(m); new Date(m)++}, 1000);
    //setInterval(() => {new Date(s); new Date(s)++}, 1000);
  }


//PLAN:

//Step (1) redo the time display by its parts: HH:MM:SS.
//***DONE!***

//Step (2) display the time in 24hr-format.
//***DONE!***

//Step (3) incorporate this somehow in order to make it "tick":
//setInterval(() => {console.log(counter); counter++}, 1000);
// y o u   a r e   h e r e

//Step (4) display the day of the week.

//Step (5) display the full date in this format:
//Wednesday, 21 October 2020

