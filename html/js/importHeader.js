document.addEventListener('DOMContentLoaded', function() {
    $("#header-placeholder").load("../header/header.html");

    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../thPage/thPage.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = '../mouthShape/mouthShape.html';
    });
});