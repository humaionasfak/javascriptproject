"use strict";
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const stopButton = document.querySelector("#stop");
const timer = document.querySelector("#time_btn");
const clearTimer = document.querySelector("#clear_time");
const result = document.querySelector("#timer");
const timerValue = document.querySelector(".reset_value");
let startValue = 0;
let setIntervalId;
const startFunction = () => {
  setIntervalId = setInterval(() => {
    result.innerHTML = startValue++;
  }, 1000);
};

stopButton.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.innerHTML = `The stop time is ${startValue - 1}`;
  timerValue.appendChild(newPara);
  clearInterval(setIntervalId);
});
resetButton.addEventListener("click", function () {
  startValue = 0;
  result.innerHTML = startValue;
  clearInterval(setIntervalId);
});
timer.addEventListener("click", function () {
  const newPara = document.createElement("p");
  newPara.innerHTML = `The stop time is ${startValue - 1}`;
  timerValue.appendChild(newPara);
});

clear_time.addEventListener("click", function () {
  timerValue.innerHTML = "";
});
startButton.addEventListener("click", startFunction);
