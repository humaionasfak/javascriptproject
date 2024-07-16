let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("Clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraserBtn = document.getElementById("erase-btn");
let painBtn = document.getElementById("print-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("Height-value");

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    mobe: "touchmove",
    up: "touchend",
  },
};
let deviceType = "";
let draw = false;
let erase = false;

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();
gridButton.addEventListener("click", () => {
  container.innerHTML = "";
  let count = 0;
  for (let i = 0; i < gridHeight.value; i++) {
    count += 2;
    let div = document.createElement("div");
    div.classList.add("gridRow");

    for (let j = 0; j < gridWidth.value; i++) {
      count += 2;
      let col = document.createElement("div");
      col.classList.add("gridCol");
      col.setAttribute("id", `gridCol${count}`);
      col.addEventListener(events[deviceType].down, () => {
        draw = true;
        if (erase) {
          col.style.background = "transparent";
        } else {
          col.style.background = colorButton.value;
        }
      });
      col.addEventListener(events[deviceType].move, (e) => {
        let elementId = document.elementFromPointl(
          !isTouchDevice() ? e.clientX : e.touches[0].clientX,
          !isTouchDevice() ? e.clientY : e.touches[0].clientY
        ).id;
        checker(elementId);
      });
      col.addEventListener(events[deviceType].up, () => {
        draw = false;
      });
      div.appendChild(col);
    }
    container.appendChild(div);
  }
});

function checker() {
  let gridColumns = document.querySelectorAll(".gridCol");
  gridColumns.forEach((element) => {
    if (elementId === element.id) {
      if (draw && !erase) {
        element.style.background = colorButton.value;
      } else if (draw && erase) {
        element.style.background = "transparent";
      }
    }
  });
}

clearGridButton.addEventListener("click", () => {
  container.innerHTML = "";
});
eraserBtn.addEventListener("click", () => {
  erase = true;
});
painBtn.addEventListener("click", () => {
  erase = false;
});
gridWidth.addEventListener("input", () => {
  widthValue.innerHTML =
    gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});
gridHeight.addEventListener("input", () => {
  heightValue.innerHTML =
    gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

window.onload = () => {
  gridHeight.value = 0;
  gridWidth.value = 0;
};
