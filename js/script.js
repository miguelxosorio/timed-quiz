// Timer variables
const startingMinutes = 1;
let time = startingMinutes * 60;

// Global variables
let timerId = "";
const countDownEl = document.getElementById('countdown');
let index = 0;
var showQuestionEl = document.getElementById('show-question');
var questionEl = document.getElementById('question-placeholder');
var choicesEl = document.getElementById('choices-placeholder');
var infoBoxEl = document.querySelector(".info-box");
var showInitialEl = document.querySelector(".show-initial");
var scores = [];
var submitButtonEl = document.getElementById('submit_btn');
var initialsBoxEl = document.getElementById('initials-box');
showInitialEl.style.display = "none";
var startButtonEl = document.querySelector('#start_button');
var showHighScoresEl = document.getElementById('show-highscores');
var btnHighScoresEl = document.querySelector('#high_score_button');

// countdown function
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    
    if (time <= 0) {
        time = 0;
        countDownEl.innerHTML = `0:00`;
    }
};

// function to subtract time when answer is incorrect
function penalty() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    seconds = seconds -5;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time = time -10; // specified time penalty -10 seconds
    if (time <= 0) {
        time = 0;
        countDownEl.innerHTML = `0:00`;
    }
};

// Creating the array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question:   "What is a DOM in Javascript?",
        answer:     "Document Object Model",
        options: [
            "Distinct Object Model",
            "Document Order Model",
            "Document Object Model",
            "Document Or Model"
        ]
    },
    {
        numb: 2,
        question:   "What are global variables?",
        answer:     "Global variables are available throughout the length of the code so that it has no scope.",
        options: [
            "Global variables are available throughout the length of the code so that it has no scope.",
            "Global variables are available throughout the length of the code so that it has a scope.",
            "Global variables are not available throughout the length of the code so that it has no scope.",
            "none are correct"
        ]
    },
    {
        numb: 3,
        question:   "What is the correct syntax for referring to an external script called 'script.js'?",
        answer:     "&lt;script src ='script.js'&gt;",
        options: [
            "&lt;script href='script.js'&gt;",
            "&lt;script src='script.js'&gt;",
            "&lt;script id='script.js'&gt;",
            "&lt;script srcs='script.js'&gt;"
        ]
    },
    {
        numb: 4,
        question:   "The external JavaScript file must contain the &lt;script&gt; tag.",
        answer:     "False",
        options: [
            "True",
            "False",
            "Maybe",
            "Both True and False"
        ]
    },
    {
        numb: 5,
        question:   "How do you write 'Hello World' in an alert box?",
        answer:     "alert('Hello World');",
        options: [
            "prompt('Hello World');",
            "alert('Hello World');",
            "confirm('Hello World');",
            "console.log('Hello World');"
        ]
    },
    {
        numb: 6,
        question:   "How do you create a function in JavaScript?",
        answer:     "function myFunction()",
        options: [
            "function myFunction()",
            "function = myFunction()",
            "function() = myFunction",
            "function:myFunction()"
        ]
    },
    {
        numb: 7,
        question:   "How to write an IF statement in JavaScript?",
        answer:     "if (i==5)",
        options: [
            "if (i==5)",
            "if i=5",
            "if i='5' then",
            "if i==5 then"
        ]
    },
    {
        numb: 8,
        question:   "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer:     "if (i !=5)",
        options: [
            "if (i !=5)",
            "if i !=5 then",
            "if i !=5",
            "if {i !=5}"
        ]
    },
    {
        numb: 9,
        question:   "How does a FOR loop start?",
        answer:     "for (i = 0; i <= 5; i++)",
        options: [
            "for (i <= 5; i++)",
            "for i = 1 to 5 i++",
            "for (i = 0; i <= 5; i++)",
            "for (i <= 5; i++)"
        ]
    },
    {
        numb: 10,
        question:   "How do you declare a JavaScript variable?",
        answer:     "var carName;",
        options: [
            "v carName;",
            "variable carName;",
            "var carName;",
            "var = carName;"
        ]
    },
];




// Question is presented in dynamic html - used <p> element because it occupies a line each = default column
function displayQuestion() {
    showQuestionEl.innerHTML =
    `<div id="questions-with-choices">
        <h1 id="question-placeholder">${questions[index].question}</h1>
     
        <p><button class="choices-placeholder" id="choices-1">1. ${questions[index].options[0]}</button></p>
        <p><button class="choices-placeholder" id="choices-2">2. ${questions[index].options[1]}</button></p>
        <p><button class="choices-placeholder" id="choices-3">3. ${questions[index].options[2]}</button></p>
        <p><button class="choices-placeholder" id="choices-4">4. ${questions[index].options[3]}</button></p>
     </div>`

var buttonChoices = document.querySelectorAll(".choices-placeholder");
for (let i = 0; i < buttonChoices.length; i++) {
    buttonChoices[i].addEventListener("click", function(){
        
        var userChoice = buttonChoices[i].innerHTML; // setting up the variable for the user's button click
        var correctAnswer = questions[index].answer; // setting up the variable for the correct answer
        console.log("this is a user choice", userChoice); // logging what the user is clicking
        console.log("this is the correct answer", correctAnswer); // logging what the right answer is
        

        if (userChoice != correctAnswer) {
            
            // timer deduction
            penalty();

        }
      
        //after checking, move on to the next question
        index++
        if (index < questions.length) {
        
        displayQuestion();
        } else {
            clearInterval(timerId)
            showInitialEl.style.display = "block";
            showQuestionEl.style.display = "none";
        }
        
    })
    }
};

function timeCheck() {
    if (time <= 0) {
        clearInterval(timerId)
        showInitialEl.style.display = "block";
        showQuestionEl.style.display = "none";
    } 
}


//Start Display High Score Code
function displayHighScores() {
    var newScore = "";
    for (let i = 0; i < scores.length; i++) {
        var initial = scores[i].initial;
        var score = scores[i].score;
        
        newScore = newScore + `<tr><td>${initial}</td><td>${score}</td></tr>`
        
        }
    showHighScoresEl.innerHTML =
    `<table class="table">
        <tr>
        <th>Player</th>
        <th>Scores</th>
        </tr>`
    + newScore
    + `</table>`
}


var showScores = function() {
    displayHighScores();
}
btnHighScoresEl.addEventListener("click", showScores)
//End Display High Score Code


// Start Quiz
var startQuiz = function() {
console.log("works?");
displayQuestion();
infoBoxEl.style.display = 'none';
timerId = setInterval(updateCountdown, 1000);

setInterval(timeCheck, 1000);
};

// eventlistener, quiz starts when start button is pressed
startButtonEl.addEventListener("click", startQuiz);

// eventlistener, add scores to storage
submitButtonEl.addEventListener("click", function(){
    scores.push({
        initial: initialsBoxEl.value,
        score: time
    })
    localStorage.setItem("score", JSON.stringify(scores));
});



