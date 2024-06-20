const inputBox = document.querySelector("#input-box");
const inputContainer = document.querySelector(".list-container");
const button = document.querySelector("button");

function addTask() {
  if (inputBox.value === "") {
    alert("your must write something");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    inputContainer.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
  }
  inputBox.value === "";
  saveData();
}
button.addEventListener("click", addTask);

inputContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", inputContainer.innerHTML);
}

function showTask() {
  inputContainer.innerHTML = localStorage.getItem("data");
}

showTask();
