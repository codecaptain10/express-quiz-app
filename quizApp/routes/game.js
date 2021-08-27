function gameRoutes(app) {
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

    //Send question
    app.get('/question', (req, res) => {
        if (goodAnswers === questions.length) {
            res.json({
                winner: true,
            })
        } else {
            const nextQuestion = questions[goodAnswers];
            const {
                question,
                answers
            } = nextQuestion;

            res.json({
                question,
                answers,
            });
        }
    });

    //answer/index
    app.post('/answer/:index', (req, res) => {
        const {
            index
        } = req.params;
        console.log('Answer index: ' + index);

        const question = questions[goodAnswers];
        //console.log(question.correctAnswer === Number(index));
        if (question.correctAnswer === Number(index)) {
            res.json({
                correct: true,
            })
        } else {
            res.json({
                correct: false,
            })
        }

    });

}



module.exports = gameRoutes;