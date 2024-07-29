let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winnerMsg = document.querySelector(".winner");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [2, 1, 0],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  boxEnable();
  msgContainer.classList.add("hide");
};

const boxDisable = () => {
  for (let boxElm of box) {
    boxElm.disabled = true;
  }
};
const boxEnable = () => {
  for (let boxElm of box) {
    boxElm.disabled = false;
    boxElm.innerText = "";
  }
};
box.forEach((elm) => {
  elm.addEventListener("click", function () {
    console.log("box was clicked");
    if (turnO) {
      elm.innerText = "O";
      turnO = false;
    } else {
      elm.innerText = "X";
      turnO = true;
    }
    if (elm.innerText === "O") {
      elm.style.color = "red";
    } else {
      elm.style.color = "green";
    }
    elm.disabled = true;
    checkWinner();
  });
});
const showWinner = (winner) => {
  winnerMsg.innerText = `Congratulation , winner is ${winner}`;
  msgContainer.classList.remove("hide");
  boxDisable();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = box[pattern[0]].innerText;
    let posVal2 = box[pattern[1]].innerText;
    let posVal3 = box[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 == posVal2 && posVal2 == posVal3) {
        console.log("winner", posVal1);
        showWinner(posVal1);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
