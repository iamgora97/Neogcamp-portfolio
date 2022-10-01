const birth_date = document.querySelector('#birthdate');
const lucky_number = document.querySelector("#lucky-num");
const checkButton = document.querySelector("#check");
const outputArea = document.querySelector("#output-text");

function calculatesum(bdate) {
  let sum = 0;
  bdate = bdate.replaceAll("-", "");
  for (let index of bdate) {
    sum = sum + Number(index);
  }
  return sum;
}



function checkBdate(sumOfBdate, checknum){
    if (sumOfBdate % checknum === 0) {
        outputArea.innerText = "Your Birthdate is lucky 🥳 ";
    }
    else{
        outputArea.innerText = "Your Birthdate is not lucky 😕"
    }
        
}



function checkLucky() {
  const bdate = birth_date.value;
  const checknum = lucky_number.value;
  if (checknum && bdate) {
    const sumOfBdate = calculatesum(bdate)
    checkBdate(sumOfBdate, checknum);  
  }
    else{
    outputArea.innerText = "Birthdate or Lucky number is missing 😫"
  }
  
}


checkButton.addEventListener('click',checkLucky)