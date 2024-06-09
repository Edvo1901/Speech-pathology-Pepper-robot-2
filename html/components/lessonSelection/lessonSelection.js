document.addEventListener('DOMContentLoaded', function () {
    $("#header-placeholder").load("../header/header.html");
    
    document.getElementById('lessonSelectionNavigate').addEventListener('click', function () {
        window.location.href = '../thPage/thPage.html';
    });
});

