const inputElm = document.querySelector(".input");
const bodyElm = document.querySelector("body");
inputElm.checked = JSON.parse(localStorage.getItem("mode"));

function updateMode() {
  if (inputElm.checked) {
    bodyElm.style.background = "black";
  } else {
    bodyElm.style.background = "white";
  }
}

inputElm.addEventListener("input", () => {
  updateMode();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputElm.checked));
}
