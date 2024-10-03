document.addEventListener('DOMContentLoaded', () => {
    const score = localStorage.getItem('userScore') || 0; // Fetch score from local storage
    document.getElementById('scoreDisplay').textContent = `Your score is ${score} out of 3.`; // Display score

    // Display different messages based on the score
    let message;
    if (score === '3') {
        message = "Congratulations! You have completed the exercises and scored full marks by identifying every legitimate email and filtering out all the malicious ones.";
    } else {
        message = "You still have to check again for all the legitimate emails. Please revisit the exercise.";
    }
    document.getElementById('messageDisplay').textContent = message; // Display the message

    // Show the retake button for everyone
    document.getElementById('retakeButton').textContent = "Revisit the Exercise"; // Change button text
    document.getElementById('retakeButton').addEventListener('click', () => {
        localStorage.removeItem('userScore'); // Reset score if needed
        window.location.href = 'index.html'; // Redirect to Exercise 1
    });
});
