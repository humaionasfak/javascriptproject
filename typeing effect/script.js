const containerEl = document.querySelector(".container");

const career = ["frontend developer", "freelancer", "treader"];
let careerIndex = 0;
let characterIndex = 0;
function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
        <h1>I am ${
          career[careerIndex].slice(0, 1) === "t" ? "an" : "a"
        } <span>${career[careerIndex].slice(0, characterIndex)}</span> </h1>
    `;
  if (characterIndex === career[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === career.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
updateText();
