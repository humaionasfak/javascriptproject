const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  //   console.log(event.offsetX);
  let posX = event.offsetX;
  let posY = event.offsetY;
  let span = document.createElement("span");
  let size = Math.random() * 100;
  span.style.width = size + "px";
  span.style.height = size + "px";
  span.style.left = posX + "px";
  span.style.top = posY + "px";
  bodyEl.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 3000);
});

console.log("hello world");
