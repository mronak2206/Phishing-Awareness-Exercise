// globals.js
let score = 0;

// Function to increment score
function incrementScore() {
    score++;
}

// Function to retrieve current score
function getScore() {
    return score;
}

// Function to set the score in local storage
function saveScore() {
    localStorage.setItem('userScore', score);
}

// Function to load score from local storage
function loadScore() {
    const storedScore = localStorage.getItem('userScore');
    if (storedScore) {
        score = parseInt(storedScore);
    }
}
