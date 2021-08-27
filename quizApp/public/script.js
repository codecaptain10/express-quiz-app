//Question and 4 answers
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');

//Gameboard
const gameBoard = document.querySelector('#game-board');
const h2 = document.querySelector('h2');

//Function to full DOM Elements with data
function fillQuestionElements(data) {

    if (data.winner === true) {
        gameBoard.style.display = 'none';
        h2.innerText = "YEEES! WIN!"
        return;
    }

    question.textContent = data.question;
    answer1.textContent = data.answers[0];
    answer2.textContent = data.answers[1];
    answer3.textContent = data.answers[2];
    answer4.textContent = data.answers[3];

}

//Function to get next question
function getNextQuestion() {
    fetch('/question', {
            method: 'GET',
        })
        .then(r => r.json())
        .then(data => {
            fillQuestionElements(data);

        })
}

getNextQuestion();

//DoOM variable to good answers in span
const goodAnswersSpan = document.querySelector('#goodAnswers');

//handle answer feedback
function handleAnswerFeedback(data) {
    goodAnswersSpan.innerText = data.goodAnswers;
    getNextQuestion();
}

//Sending answer from client
function sendAnswer(answerIndex) {
    fetch(`/answer/${answerIndex}`, {
            method: 'POST',
        })
        .then(r => r.json())
        .then(data => {
            console.log(data);
            handleAnswerFeedback(data);

        })
}

//Buttons
const buttons = document.querySelectorAll('button');



for (const button of buttons) {
    button.addEventListener('click', function() {

        const answerIndex = this.dataset.answer;
        //console.log(answerIndex);
        sendAnswer(answerIndex);
    });
}