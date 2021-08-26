const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
})

app.get('/', (req, res) => {
    res.send('Hello World, QuizApp with Express.js');
});