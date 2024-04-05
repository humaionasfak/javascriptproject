const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];
const Question_tag = document.querySelector("h2");
const option_a = document.querySelector(".text_option_a");
const option_b = document.querySelector(".text_option_b");
const option_c = document.querySelector(".text_option_c");
const option_d = document.querySelector(".text_option_d");
const button = document.querySelector("button");
const ansElm = document.querySelectorAll(".answer");
const result = document.querySelector("#result");
console.log(ansElm);
//* select array to question and answer
let currentQuestion = 0;
let score = 0;
Question_tag.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

button.addEventListener("click", () => {
  const rightAns = document.querySelector('input[type="radio"]:checked');
  if (rightAns === null) {
    alert("please ans select");
  } else {
    if (
      rightAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      Question_tag.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      rightAns.checked = false;
    } else {
      result.textContent = `your score is ${score} out of ${quiz.length}`;
      //   location.reload();
      result.style.transform = "translateX(0px)";
    }
  }
});
// console.log(quiz.length);
