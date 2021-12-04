// Timer
const startingMinutes = 1;
let time = startingMinutes * 60;
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


// countdown function
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
};




// Elements
var buttonEl = document.querySelector('#start_button');


// Creating the array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question:   "How many times does the average person laugh in a day?",
        answer:     "13",
        options: [
            "Depends how happy you are",
            "10",
            "15",
            "13"
        ]
    },
    {
        numb: 2,
        question:   "What is the Italian word for pie?",
        answer:     "pizza",
        options: [
            "pane",
            "impasto",
            "pane al forno"
        ]
    },
    {
        numb: 3,
        question:   "What is the coorect term for a question mark immediately followed by an exclamation mark?",
        answer:     "Interrobang",
        options: [
            "Depends how happy you are",
            "10",
            "15"
        ]
    },
    {
        numb: 4,
        question:   "What is the collective noun for a group of pandas",
        answer:     "Embarrassment",
        options: [
            "clan",
            "pride",
            "sleuth"
        ]
    },
    {
        numb: 5,
        question:   "Who composed the music for Sonic the Hedgehog 3?",
        answer:     "Michael Jackson",
        options: [
            "Skrillex",
            "Anderson Paak",
            "Ryan Tedder"
        ]
    },
    {
        numb: 6,
        question:   "In Georgia State, what would be illegal to eat with a fork?",
        answer:     "Fried Chicken",
        options: [
            "Ribs",
            "Fries",
            "BBQ"
        ]
    },
    {
        numb: 7,
        question:   "Which sea creature have 3 hearts?",
        answer:     "Octopus",
        options: [
            "Whale",
            "Lobster",
            "Stingray"
        ]
    },
    {
        numb: 8,
        question:   "First hockey pucks used in early outdoor hockey games were made of what?",
        answer:     "frozen cowdung",
        options: [
            "Rubberball",
            "rocks",
            "Wood"
        ]
    },
    {
        numb: 9,
        question:   "The 'Tina' in Tina Fey is short for what name?",
        answer:     "Stamatina",
        options: [
            "Christina",
            "Albertina",
            "Bettina"
        ]
    },
    {
        numb: 10,
        question:   "Which European country technically shares a border with Brazil?",
        answer:     "France because of French Guiana",
        options: [
            "Germany because of Pomerode",
            "Portugal because of",
            "None of the choices are correct, Brazil isn't close to Europe"
        ]
    },
];





function displayQuestion() {
    showQuestionEl.innerHTML = `        
    <h1 id="question-placeholder">${questions[index].question}</h1>
    <div>
        <p><button class="choices-placeholder">1. ${questions[index].options[0]}</button></p>
        <p><button class="choices-placeholder">2. ${questions[index].options[1]}</button></p>
        <p><button class="choices-placeholder">3. ${questions[index].options[2]}</button></p>
        <p><button class="choices-placeholder">4. ${questions[index].options[3]}</button></p>
    </div>
`
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


buttonEl.addEventListener("click", startQuiz);
submitButtonEl.addEventListener("click", function(){
    scores.push({
        initial: initialsBoxEl.value,
        score: time
    })
    localStorage.setItem("score", JSON.stringify(scores));
})




// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }