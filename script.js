// Welcome screen interactivity
function enterSite() {
    document.querySelector('.overlay').style.display = 'none';
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Interactive heart click
function showMessage() {
    const messageContainer = document.getElementById('love-message');
    const messages = [
        "You're my everything ❤️",
        "Every moment with you is magical ✨",
        "I love you to the moon and back 🌙",
        "You are my forever 🌹"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageContainer.textContent = randomMessage;
}
