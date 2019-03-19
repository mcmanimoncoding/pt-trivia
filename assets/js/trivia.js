const triviaQuestions = [{
    question: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 2"
}, {
    question: "Question 2",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 1"
}, {
    question: "Question 3",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: "Answer 3"
}, {
    question: "Question 4",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: [2]
}, {
    question: "Question 5",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: [2]
}, {
    question: "Question 6",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: [2]
}, {
    question: "Question 7",
    answers: ["Answer 1", "Answer 2", "Answer 3"],
    correctAnswer: [2]
}]

var right = 0;
var wrong = 0;
var time = 120;



    $("#start-btn").on("click", function () {
        console.log("Quiz Start");
        $("#end-button-disp").html("<button type='submit' class='uk-button-large p-4 m-4 uk-button-primary' id='submit-button1'>HIT THIS BUTTON WHEN COMPLETE!!!</button>");
        $("#scorecard").empty();
        $("#scorecard").append("Number Right: " + right);
        $("#scorecard").append("<br> Number Wrong: " + wrong);
        $("#scorecard").append("<br> <div class='py-5' id='timer'> <h2> Time Remaining <hr> <h3><div id='time'> </h3>");
        timeRemaining = setInterval(timer, 1000),
        
        $("#button-container").remove();
        for (var i = 0; i < triviaQuestions.length; i++) {
            
            $("#question-disp").append("<div class=' row question' data-toggle='buttons'><h3>" + triviaQuestions[i].question + "</h3><br></div>")
            for (var k = 0; k < triviaQuestions[i].answers.length; k++) {
                $("#question-disp").append("<button class='mx-1 btn btn-secondary'> <input type='radio' checked autocomplete='off' data-toggle='button' aria-pressed='false' auto name='" + i + "' id='" + triviaQuestions[i].answers[k] + "'>" +" " + triviaQuestions[i].answers[k]+"</button>")
            }
        }
    })
    
    $("body").on("click", ".btn", function(){
        console.log(this);
    })
    
    
    
    function timer() {
        time--;
        $("#time").html(time+" Seconds... no pressure...");
        if (time <= 0) {
            stop();
            console.log("Time!")
            // alert("Time!");
            check();
            $("#time").html("Times Up!")
        }
    }
    
    function stop(){
    clearInterval(timer);
}


function check() {
    console.log("Quiz End");
    
}
$("#submit-button1").on("click", function () {
    console.log("End Button");
    check();
})