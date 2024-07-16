const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const dayNum = document.querySelector("#day-num");
const year = document.querySelector("#year");
const date = new Date();
const month = date.getMonth();
monthName.innerHTML = date.toLocaleString("en", {
  month: "long",
});
dayName.innerHTML = date.toLocaleString("en", {
  weekday: "long",
});
dayNum.innerHTML = date.getDay();
year.innerHTML = date.getFullYear();
