var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Gourob",
    score: 5,
  },

  {
    name: "Sneha",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Bankura"
}, {
  question: "My favorite superhero would be? ",
  answer: "IronMan"
},
{
  question: "Where do I work? ",
  answer: "Wipro"
},
{
  question: "Which System do I prefer the most? ",
  answer: "Apple"
},
{
  question: "What is my favourite animal?",
  answer: "Dog"
},{
    question: "What do i prefer Sea or Mountains? ",
    answer: "Sea"
  },
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Gourob?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


