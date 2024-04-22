document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lessonSelectionNavigate').addEventListener('click', function () {
        window.location.href = '../thPage/thPage.html';
    });

    $('#header-placeholder').load('../header/header.html');
});

