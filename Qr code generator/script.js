const input = document.querySelector("input");
const btn = document.querySelector("button");
const img = document.querySelector("img");
btn.addEventListener("click", function () {
  if (!input.value) {
    alert("please enter a valid url");
    return;
  } else {
    img.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    );
    img.setAttribute("alt", input.value);
  }
});
