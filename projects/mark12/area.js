const base = document.querySelector(".b-input");
const height = document.querySelector(".h-input");
const output_text = document.querySelector("#output");
const area_btn = document.querySelector("#area-btn");

function calculateArea() {
  if (base.value.length === 0 || height.value.length === 0) {
    output_text.innerText = "Empty fields are not allowed!";
    return;
  }
  if (Number(base.value) <= 0 || Number(height.value) <= 0) {
    output_text.innerText = "Invalid data entred";
    return;
  }
  const area = 0.5 * (base.value * height.value);
  output_text.innerText = "The area of the triangle is " + area;
}

area_btn.addEventListener("click", calculateArea);
