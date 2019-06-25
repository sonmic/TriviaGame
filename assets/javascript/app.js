// arched text

let arc = new CircleType(document.getElementById('arc'))
    .radius(120);
// $(arc.element).fitText();

// end of arched text


// code starts here
// timer


var elem = document.getElementById('countdown');

var timeLeft = 20;


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        timesUp();
    } else {
        elem.innerHTML = timeLeft + ' seconds left';
        timeLeft--;
    }
}

function timesUp() {
    alert("Times up!");
}

// global variables
let currentQuestion = 0;
let score = 0;

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

function showCurrentQuestion() {
    $('#question').text(questions[currentQuestion].question);
    $('#opt1').text(questions[currentQuestion].opt1);
    $('#opt2').text(questions[currentQuestion].opt2);
    $('#opt3').text(questions[currentQuestion].opt3);
    $('#opt4').text(questions[currentQuestion].opt4);
}

$('#nextbtn').on('click', function() {
    clearInterval(timerId);
    let userInput = $('#quizbox input:checked').val();
    if (userInput === questions[currentQuestion].answer) {
        console.log(userInput);
        ++score;
    }
    ++currentQuestion;

    if (currentQuestion === questions.length) {
        $("#quizbox").remove();
        $("#result").show();
        $("#score").text(score);
        $("#countdown").remove();
    } else {
        // countdown.reset();

        timeLeft = 20;
        var timerId = setInterval(countdown, 1000);
        showCurrentQuestion();
        $("#countdown").show();
    }

});

$('#startbtn').on('click', function() {
    showCurrentQuestion();
    $("#startbtn").remove();
    $("#quizbox").show();
    $("#nextbtn").show();
    $("#countdown").show();
    var timerId = setInterval(countdown, 1000);
});