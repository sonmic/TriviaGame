// arched text

let arc = new CircleType(document.getElementById('arc'))
    .radius(120);
// $(arc.element).fitText();

// end of arched text


// code starts here
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

    if (currentQuestion === 4) {
        $("#quizbox").remove();
        $("#result").show();
        $("#score").text(score);
    } else {
        showCurrentQuestion();
    }

});

$('#startbtn').on('click', function() {
    showCurrentQuestion();
    $("#startbtn").remove();
    $("#quizbox").show();
    $("#nextbtn").show();
});

//start button to start the quiz

// $('#startbtn').on('click', function() {
//     $('#question').text(questions[0].question);
//     $('#opt1').text(questions[0].opt1);
//     $('#opt2').text(questions[0].opt2);
//     $('#opt3').text(questions[0].opt3);
//     $('#opt4').text(questions[0].opt4);
//     $("#startbtn").remove();
//     $("#quizbox").show();
//     $("#nextbtn").show();
// });

// $('#nextbtn').on('click', function() {
//     $('#question').text(questions[1].question);
//     $('#opt1').text(questions[1].opt1);
//     $('#opt2').text(questions[1].opt2);
//     $('#opt3').text(questions[1].opt3);
//     $('#opt4').text(questions[1].opt4);
// });

// $('#nextbtn').on('click', function() {
//     $('#question').text(questions[2].question);
//     $('#opt1').text(questions[2].opt1);
//     $('#opt2').text(questions[2].opt2);
//     $('#opt3').text(questions[2].opt3);
//     $('#opt4').text(questions[2].opt4);
// });

// $('#nextbtn').on('click', function() {
//     $('#question').text(questions[3].question);
//     $('#opt1').text(questions[3].opt1);
//     $('#opt2').text(questions[3].opt2);
//     $('#opt3').text(questions[3].opt3);
//     $('#opt4').text(questions[3].opt4);
// });