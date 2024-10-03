// Global score variable
let score = 0; 
let selectedBox = null;

// Load score from local storage
function loadScore() {
    const savedScore = localStorage.getItem('userScore');
    if (savedScore) {
        score = parseInt(savedScore, 10);
    }
}

// Save score to local storage
function saveScore() {
    localStorage.setItem('userScore', score);
}

// Increment score
function incrementScore() {
    score++;
}

// Function to select the mail box
function selectBox(boxNumber) {
    if (selectedBox === null) {
        selectedBox = boxNumber; // Lock the selection

        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');

        // Assuming box 1 is the legitimate choice
        if (boxNumber === 1) {
            box1.classList.add('selected-red'); // Correct answer
            box2.classList.add('not-selected'); // Indicate unselected box
        } else {
            box2.classList.add('selected-green');
            incrementScore(); // Wrong answer
            box1.classList.add('not-selected'); // Indicate unselected box
        }

        saveScore(); // Save updated score to local storage

        // Disable further selection
        box1.onclick = null;
        box2.onclick = null;

        // Show the next button
        document.getElementById('nextButton').style.display = 'block';
    }
}

// Function to navigate to the next page
function goToNextPage() {
    window.location.href = 'exercise3.html'; // Change this to your next exercise page
}

// Call loadScore when the page loads
window.onload = loadScore;
