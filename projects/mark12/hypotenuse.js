const sides = document.querySelectorAll(".input");
const hypotenuseBtn = document.querySelector("#calculate-btn");
const output_text = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if (sides[0].value.length === 0 || sides[1].value.length === 0) {
    output_text.innerText = "Empty fields are not allowed!";
    return;
  }
  if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
    output_text.innerText = "Invalid Data Entred";
    return;
  }
  const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

  output_text.innerText =
    "The length of hypotenuse is " + lengthOfHypotenuse.toFixed(2); 
    // format a number with a specific number of digits to the right of the decimal. 
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
