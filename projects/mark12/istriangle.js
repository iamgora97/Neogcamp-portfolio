const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngle(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  if (
    inputs[0].value.length === 0 || inputs[1].value.length === 0 || inputs[2].value.length === 0) {
    output.innerText = "Empty fields are not allowed";
    return;
  }
  if (
    Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0 || Number(inputs[2].value) <= 0) {
    output.innerText = "Invalid Data Entred";
    return;
  }
  console.log(inputs[0].value.length);
  const sumOfAngles = calculateSumOfAngle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "Yes, it is a Triangle";
  } else {
    output.innerText = "No, it is not a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
