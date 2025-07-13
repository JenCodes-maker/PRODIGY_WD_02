let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = false;

function start() {
  timer = true;
  runTimer();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
}
function runTimer() {
  if (timer) {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML = h + ":" + m + ":" + s;

    setTimeout(runTimer, 1000);
  }
}
    