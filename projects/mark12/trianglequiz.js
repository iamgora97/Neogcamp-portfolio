const quizForm = document.querySelector(".quiz");
const submitBtn = document.querySelector("#submit-btn");
const output_text = document.querySelector("#output");

const correctAnswers = ["√3/4a^2", "18 cm", "75", "scalene", "right-angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output_text.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);
