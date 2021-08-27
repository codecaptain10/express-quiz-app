const express = require('express');
const path = require('path');
//import gameRoutes
const gameRoutes = require('./routes/game.js');

//Express application
const app = express();


//Webserver
app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
})

//Init route to test
// app.get('/', (req, res) => {
//     res.send('Hello World, QuizApp with Express.js');
// });

//Middleware for static filters
app.use(express.static(
    path.join(__dirname, 'public'),
));

//Using game routes
gameRoutes(app);