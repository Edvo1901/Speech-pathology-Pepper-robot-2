document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../medial/medialPosition.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = './finalPosition.html';
    });

    // List of words or phrases to choose from
    var words = [
        'Mo<u>th</u>',
        'Ba<u>th</u>',
        'Ear<u>th</u>',
        'Mou<u>th</u>',
        'Pa<u>th</u>',
        'Too<u>th</u>',
        'Bo<u>th</u>',
        'Clo<u>th</u>',
        'Benea<u>th</u>',
        'Four<u>th</u>',
        'Nor<u>th</u>',
        'Mon<u>th</u>',
        'Wrea<u>th</u>',
        'Dea<u>th</u>',
        'Wi<u>th</u>',
        'Boo<u>th</u>',
        'Brea<u>th</u>',
    ];

    // Function to shuffle an array
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle
        while (0 !== currentIndex) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Shuffle the array of words
    shuffle(words);

    var buttons = document.querySelectorAll('.word-button');
    var cardTitle = document.querySelector('.card-title');

    // Assign a random word from the array to each button
    if (buttons.length > 0) {
        for (var i = 0; i < buttons.length; i++) {
            if (i < words.length) {
                buttons[i].innerHTML = words[i];
                buttons[i].addEventListener('click', function() {
                    cardTitle.innerHTML = this.innerHTML;
                    this.disabled = true;
                });
            }
        }
    }
});