const express = require('express');

const app = express();

//Webserver
app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
})

//Init route
app.get('/', (req, res) => {
    res.send('Hello World, QuizApp with Express.js');
});

//VARIABLES
let goodAnswers = 0;
let callToAFriendUsed = false;
let questionToTheCrowdUsed = false;
let halfOnHalfUsed = false;

//Array with questions
const questions = [{
        question: 'What is the best programming language ?',
        answers: ['C++', 'Java', 'Go!', 'JavaScript'],
        correctAnswer: 3, //index of answer
    },
    {
        question: 'What is you favorit drink during programming ?',
        answers: ['Coffe', 'Tea', 'Water', 'Coca-Cola'],
        correctAnswer: 0, //index of asnwer
    },
    {
        question: 'Where do you love do programming?',
        answers: ['Office', 'Home', 'Garden', 'Anywhere...'],
        correctAnswer: 0, //index of asnwer
    }
];