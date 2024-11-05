document.getElementById('showRegister').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.add('flipped');
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.remove('flipped');
});
