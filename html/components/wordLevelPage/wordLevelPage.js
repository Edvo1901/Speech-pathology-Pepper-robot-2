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

    if (!window.fetch) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/whatwg-fetch@3.6.2/fetch.min.js';
        script.onload = function() {
            console.log('Fetch polyfill loaded successfully.');
            loadHeader();
        };
        script.onerror = function() {
            console.error('Error loading fetch polyfill.');
        };
        document.head.appendChild(script);
    } else {
        loadHeader();
    }
});

function loadHeader() {
    fetch('path/to/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        })
        .catch(error => console.error('Failed to load header: ', error));
}
