function getNextQuestion() {
    fetch('/question', {
            method: 'GET',
        })
        .then(r => r.json())
        .then(data => {
            console.log(data);
        })
}

getNextQuestion();