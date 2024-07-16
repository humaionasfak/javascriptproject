const text = document.querySelector("h3");
const button = document.querySelector("button");
let ck = 0;
button.addEventListener("click", () => {
  if (ck === 0) {
    text.innerText = "Friends";
    text.style.color = "green";
    button.innerText = "Remove";
    ck = 1;
  } else {
    text.innerText = "Stranger";
    text.style.color = "red";
    button.innerText = "Friend Request";
    ck = 0;
  }
});
