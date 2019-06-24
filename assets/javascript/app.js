// arched text

let arc = new CircleType(document.getElementById('arc'))
    .radius(120);
$(arc.element).fitText();

// end of arched text


// code starts here
// global variables
let currentQuestion = 0;
let score = 0;
let loadQuestions = questions.length;

let quizbox = document.getElementById('quizbox');
let questionEl = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextBtn = document.getElementById('nextbtn');
let result = document.getElementById('result');


let questions = [{
        question: "111Is vanilla JS still considered a library?",
        opt1: "YES",
        opt2: "NO",
        opt3: "MAYBE",
        opt4: "NO WAY",
        answer: "2"
    },
    {
        question: "222Is vanilla JS still considered a library?",
        opt1: "YES",
        opt2: "NO",
        opt3: "MAYBE",
        opt4: "NO WAY",
        answer: "2"
    },
    {
        question: "333Is vanilla JS still considered a library?",
        opt1: "YES",
        opt2: "NO",
        opt3: "MAYBE",
        opt4: "NO WAY",
        answer: "2"
    },
    {
        question: "444Is vanilla JS still considered a library?",
        opt1: "YES",
        opt2: "NO",
        opt3: "MAYBE",
        opt4: "NO WAY",
        answer: "2"
    }
];


$('#startbtn').on('click', function() {
    $('#question').text(questions[0].question);
    $('#opt1').text(questions[0].opt1);
    $('#opt2').text(questions[0].opt2);
    $('#opt3').text(questions[0].opt3);
    $('#opt4').text(questions[0].opt4);
});