let con = document.querySelector(".container");
let love = document.querySelector("i");

con.addEventListener("dblclick", () => {
  love.style.transform = "translate(-50%,-50%) scale(1)";
  love.style.transition = "transform 0.35s";
  love.style.opacity = 0.7;
  setTimeout(() => {
    love.style.opacity = 0;
    love.style.transform = "translate(-50%,-50%) scale(0)";
  }, 800);
  setTimeout(() => {
    love.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);
});

function allInOne(first, second) {
  love.style.transform = "translate(-50%,-50%) scale(1)";
}
