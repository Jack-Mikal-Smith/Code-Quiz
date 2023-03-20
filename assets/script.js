// Declare html elements (by id [#]) as variables
var scoreList = $('#scores-lnk');
var gameArea = $('#game-area');
var startBtn = $('#start-btn');
var timerEl = $('#timer');
var startArea = $('#start-area');

// Declare variables starting variables for the timer and question index
var questionIndex = 0;
var timeLeft = 60;

// Declaring an array of the potential questions as a variable
var question = [
    {
        question: "PlaceHolder",
        choices: ["a", "b", "c", "d"],
        correct: "a"
    },
    {
        question: "PlaceHolder2",
        choices: ["a", "b", "c", "d"],
        correct: "a"
    },
    {
        question: "PlaceHolder3",
        choices: ["a", "b", "c", "d"],
        correct: "a"
    },
];


// Adding event listner to start button
startBtn.on('click', function() {
    startArea.addClass('visually-hidden');
    gameArea.removeClass('visually-hidden');
    timerFun();
    displayQuestion();
})

// Declaring timer function as a variable
var timerFun = function() {
    timer=setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--
            timerEl.text(timeLeft);
        }
    },1000)
}

// Declaring dispaly question as a variable; inputs question array values into cooresponding game-area elements
var displayQuestion = function() {
    $("#prompt").text(question[questionIndex].question);
    $("#a-btn").text(question[questionIndex].choices[0]);
    $("#b-btn").text(question[questionIndex].choices[1]);
    $("#c-btn").text(question[questionIndex].choices[2]);
    $("#d-btn").text(question[questionIndex].choices[3]);
}

// Adding event listner to all of the game-area buttons; if incorrect choice is selected, time is reduced by 5 sec;
// Hides game-area if all questions in the array have been displayed
gameArea.on('click', "button", function() {
    var choice = $(this).text();
    var correct = question[questionIndex].correct;
    if (choice !== correct) {
        console.log(correct);
        timeLeft-=5;
    } 
    questionIndex++;
    if (questionIndex === question.length) {
        gameArea.addClass("visually-hidden");
        clearInterval(timer);
        return;
    }
    displayQuestion();
})


// Create empty variables for scoring




// Create win screen displaying score w/ option to input intials; Save score to local storage

// Create lose screen with option to play agian

    