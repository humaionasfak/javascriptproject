let timer = 60;
let score = 0;
let HitRn = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 126; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  let pBottom = document.querySelector(".pbottom");
  pBottom.innerHTML = clutter;
}
makeBubble();
function runTimer() {
  let clrInterVal = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    } else {
      clearInterval(clrInterVal);
      document.querySelector(
        ".pbottom"
      ).innerHTML = `<h1>Game over and your score ${score}</h1>`;
    }
  }, 1000);
}
runTimer();
function getHit() {
  HitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = HitRn;
}
getHit();
document.querySelector(".pbottom").addEventListener("click", function (event) {
  let clickedNum = Number(event.target.textContent);
  if (clickedNum === HitRn) {
    increaseScore();
    makeBubble();
    getHit();
  } else {
    alert("this num is not match");
  }
});
