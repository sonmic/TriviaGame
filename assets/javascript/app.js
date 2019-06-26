// arched text

let arc = new CircleType(document.getElementById('arc'))
    .radius(120);
// $(arc.element).fitText();

// end of arched text


// code starts here
// timer


var elem = document.getElementById('countdown');

var timeLeft = 2;
var timerId;


function countdown() {
    if (timeLeft == -1) {
        clearInterval(timerId);
        timesUp();
    } else {
        elem.innerHTML = timeLeft + ' seconds left';
        timeLeft--;
    }
}

function timesUp() {
    // $(".right").addClass("mask");
    $(".mask").show();
    $(".mask").css("opacity", 1);
    $("h1,body").css("color", "#e0ded9");
    $("#timeup").show();
    $("#timeup").effect("slide", { direction: 'down', distance: 500 }, 2000);
    $(document).on('click', function() {
        location.reload();
    });
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
        timeLeft = 15;
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
    timerId = setInterval(countdown, 1000);
});