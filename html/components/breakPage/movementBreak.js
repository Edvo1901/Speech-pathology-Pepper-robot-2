document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../syllableLevelPage/syllableLevelPage.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = '../wordLevelPage/wordLevelPage.html';
    });

    document.getElementById('jumpToFeedback').addEventListener('click', function() {
        window.location.href = '../feedback/feedback.html';
    });
});