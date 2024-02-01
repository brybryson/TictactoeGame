// JS CODE IF USERS CLICKED PLAY WITHOUT CHOOSING GAMEMODE

function showCustomAlert() {
    // Show the overlay and notif
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('customAlert').style.display = 'block';
}

function hideCustomAlert() {
    // Hide the overlay and notif
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('customAlert').style.display = 'none';
}


// ... (your existing code) ...

function showGameOptions() {
    document.querySelector('.game-options').style.display = 'block';
    document.getElementById('playButton').style.display = 'none';
}

function hideGameOptions() {
    document.querySelector('.game-options').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
}

