document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../breakPage/movementBreak.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = './wordLevelPage.html';
    });

    document.getElementById('initialPosition').addEventListener('click', function() {
        window.location.href = './initial/initialPosition.html';
    });

    document.getElementById('medialPosition').addEventListener('click', function() {
        window.location.href = './medial/medialPosition.html';
    });

    document.getElementById('finalPosition').addEventListener('click', function() {
        window.location.href = './final/finalPosition.html';
    });
});