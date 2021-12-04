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
var infoBoxEl = document.querySelector(".info_box");
var showInitialEl = document.querySelector(".show-initial");
var scores = [];
var submitButtonEl = document.getElementById('submit_btn');
var initialsBoxEl = document.getElementById('initials-box');
showInitialEl.style.display = "none";
var buttonEl = document.querySelector('#start_button');


// countdown function
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
};


// Creating the array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question:   "Inside which HTML element do we put the Javascript?",
        answer:     "<script>",
        options: [
            "<scr>",
            "<javascript>",
            "<js>",
            "<script>"
        ]
    },
    {
        numb: 2,
        question:   "Where is the correct place to insert a JavaScript?",
        answer:     "Both the <head> section and the <body>",
        options: [
            "<head>",
            "<body>",
            "<section>",
            "Both the <head> section and the <body>"
        ]
    },
    {
        numb: 3,
        question:   "What is the correct syntax for referring to an external script called 'script.js'?",
        answer:     "<script src ='script.js'",
        options: [
            "<script href ='script.js'",
            "<script src ='script.js'",
            "<script id ='script.js'",
            "<script srcs ='script.js'"
        ]
    },
    {
        numb: 4,
        question:   "The external JavaScript file must contain the <script> tag.",
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




// Question is presented in dynamic html 
function displayQuestion() {
    showQuestionEl.innerHTML =
    `<h1 id="question-placeholder">${questions[index].question}</h1>
     <div>
        <p><button class="choices-placeholder">1. ${questions[index].options[0]}</button></p>
        <p><button class="choices-placeholder">2. ${questions[index].options[1]}</button></p>
        <p><button class="choices-placeholder">3. ${questions[index].options[2]}</button></p>
        <p><button class="choices-placeholder">4. ${questions[index].options[3]}</button></p>
     </div>`

var buttonChoices = document.querySelectorAll(".choices-placeholder");
for (let i = 0; i < buttonChoices.length; i++) {
    buttonChoices[i].addEventListener("click", function(){
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


// Start Quiz
var startQuiz = function() {
console.log("works?");
displayQuestion();
infoBoxEl.style.display = 'none';
timerId = setInterval(updateCountdown, 1000);
};

// eventlistener, quiz starts when start button is pressed
buttonEl.addEventListener("click", startQuiz);
submitButtonEl.addEventListener("click", function(){
    scores.push({
        initial: initialsBoxEl.value,
        score: time
    })
    localStorage.setItem("score", JSON.stringify(scores));
});




// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }