function gameRoutes(app) {
    //VARIABLES
    let goodAnswers = 0;
    let isGameOver = false;
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
        } else if (isGameOver) {
            res.json({
                loser: true,
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

        if (isGameOver) {
            res.json({
                loser: true,
            })
        }
        const {
            index
        } = req.params;
        console.log('Answer index: ' + index);

        const question = questions[goodAnswers];

        //Variable if answer is good or not 
        const isGoodAnswer = (question.correctAnswer === Number(index));
        if (isGoodAnswer) {
            goodAnswers++;
        } else {
            isGameOver = true;

        }

        res.json({
            correct: isGoodAnswer,
            goodAnswers,
        })

    });

    //Help: call to friend
    app.get('/help/friend', (req, res) => {
        if (callToAFriendUsed) {
            return res.json({
                text: 'That was alredy used ... '
            });
        }

        //When call to friend is used
        callToAFriendUsed = true;

        const friendKnowAnswer = Math.random() < 0.5;

        //Index of actuall answer
        const question = questions[goodAnswers];

        res.json({
            text: friendKnowAnswer ? `I think the correct answer is ${question.answers[question.correctAnswer]}` : 'I do not know dude ...',

        });


    });


    //Help: half on half
    app.get('/help/half', (req, res) => {
        if (halfOnHalfUsed) {
            return res.json({
                text: 'That was alredy used ... '
            });
        }

        //When half on half was used
        halfOnHalfUsed = true;

        const questions = questions[goodAnswers];

        //Filter
        const asnwersCopy = questions.answers.filter((s, index) => {
            index !== question.correctAnswer;
        });
        asnwersCopy.splice(~~(Math.random() * answersCopy.length), 1);

        console.log(answersCopy)


        res.json({
            answersToRemove: asnwersCopy,

        });


    });

}



module.exports = gameRoutes;