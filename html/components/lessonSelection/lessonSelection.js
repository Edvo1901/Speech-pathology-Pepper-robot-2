document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lessonSelectionNavigate').addEventListener('click', function () {
        window.location.href = '../thPage/thPage.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch("../header/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
});
