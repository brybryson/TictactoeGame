// Function to show the notification
function showNotification(message) {
    document.getElementById('notification-content').textContent = message;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('notification').style.display = 'block';
}

// Function to hide the notification
function hideNotification() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('notification').style.display = 'none';
}

// Event listener for "Easy AI" button
document.getElementById('easy-ai').addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Show the notification without redirection
    showNotification('AI difficulty:          Easy');
});

// Event listener for "Difficult AI" button
document.getElementById('difficult-ai').addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Show the notification without redirection
    showNotification('AI difficulty: Difficult');
});

// Event listener for "Expert AI" button
document.getElementById('expert-ai').addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Show the notification without redirection
    showNotification('AI difficulty:        Expert');
});


// Event listener for "Play" button in the notification
document.getElementById('play-button').addEventListener('click', function () {
    // Redirect to "ai-easy-game-2.html" or perform other actions
    window.location.href = "ai-easy-game-2.html";
});
