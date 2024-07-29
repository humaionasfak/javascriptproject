let time = 60;
let score = 0;
let HitRn = 0;

function increaserScore() {
  score = score + 10;
  document.querySelector(".score").innerHTML = score;
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 162; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="circle">${rn}</div>`;
  }
  let bottom = document.querySelector(".bottom");
  bottom.innerHTML = clutter;
}
makeBubble();
function runTimer() {
  let clrInterVal = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector(".time").innerHTML = time;
    } else {
      clearInterval(clrInterVal);
      document.querySelector(
        ".bottom"
      ).innerHTML = `<h1 class="red">Game over and your score ${score}</h1>`;
    }
  }, 1000);
}

runTimer();
function getHit() {
  HitRn = Math.floor(Math.random(0) * 10);
  document.querySelector(".hitter").textContent = HitRn;
}
getHit();
let end = document.querySelector(".bottom");
end.addEventListener("click", (event) => {
  let clickNum = Number(event.target.textContent);
  if (clickNum === HitRn) {
    increaserScore();
    makeBubble();
    getHit();
  } else {
    alert("this num is not match");
  }
});
