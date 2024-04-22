document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('lessonSelectionNavigate').addEventListener('click', function () {
        window.location.href = '../thPage/thPage.html';
    });

    fetch('../header/header.html')
  .then(response => response.text())
  .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
  })
  .catch(error => console.error('Error loading the header:', error));
});

