const container = document.querySelectorAll("span");
console.log(container);
// container.forEach((span) => {
//   span.addEventListener("click", () => {
//     span.classList.toggle("active");
//   });
// });
for (let elm in container) {
  container[elm].addEventListener("click", () => {
    container[elm].classList.toggle("active");
  });
}
