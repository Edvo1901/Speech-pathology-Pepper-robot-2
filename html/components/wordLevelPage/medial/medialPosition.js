document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../initial/initialPosition.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = '../final/finalPosition.html';
    });
});