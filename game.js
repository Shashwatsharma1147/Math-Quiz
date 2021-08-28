player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + ":" + player1_score;
document.getElementById("player2_name").innerHTML = player2 + ":" + player2_score;

document.getElementById("playerQuestion").innerHTML = "QuestionTurn: " + player1;
document.getElementById("playerAnswer").innerHTML = "AnswerTurn: " + player2;

function sent() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    ancualAnswer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";

    input_box = "<br>Answer : <input type='text' id='input_answer'>";
    button = "<br><br><button class='btn btn-primary' onclick='check()'>Send</button>";

    row = question_number + input_box + button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
