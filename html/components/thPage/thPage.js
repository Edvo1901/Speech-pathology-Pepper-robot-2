document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('isolationPageNavigate').addEventListener('click', function() {
        window.location.href = '../isolationLevelPage/isolationLevelPage.html';
    });

    document.getElementById('syllablePageNavigate').addEventListener('click', function() {
        window.location.href = '../syllableLevelPage/syllableLevelPage.html';
    });

    document.getElementById('wordPageNavigate').addEventListener('click', function() {
        window.location.href = '../wordLevelPage/wordLevelPage.html';
    });
});
