const input = document.querySelector("#password");
const output = document.querySelector(".result");
console.log(output);
input.addEventListener("input", function () {
  const password = input.value;
  if (password.length < 8) {
    output.innerText = "password is too short";
    output.style.color = "red";
  } else {
    output.innerText = "password is too long";
    output.style.color = "green";
  }
  if (password.search(/[a - z]/) == -1) {
    output.innerText = "password is missing a lowercase letter";
    output.style.color = "red";
  } else if (password.search(/[A - Z]/) == -1) {
    output.innerText = "password is missing a uppercase letter";
    output.style.color = "red";
  } else if (password.search(/[!\@\#\$\%\&\*]/) == -1) {
    output.innerText = "password is special Character is missing";
    output.style.color = "red";
  } else {
    output.innerText = "password is valid";
  }
});
