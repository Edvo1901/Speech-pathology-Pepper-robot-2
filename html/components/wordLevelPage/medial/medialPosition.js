document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../initial/initialPosition.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = '../final/finalPosition.html';
    });

    // List of words or phrases to choose from
    var words = [
        'Bir<u>th</u>day',
        'Too<u>th</u>brush',
        'Bath<u>th</u>room',
        'Fea<u>th</u>er',
        'Ba<u>th</u>ers',
        'Mou<u>th</u>wash',
        'Ear<u>th</u>quake',
        'Smoo<u>th</u>ie',
        'Wea<u>th</u>er',
        'Bro<u>th</u>er',
        'Lea<u>th</u>er',
        'Mo<u>th</u>er',
        'Toge<u>th</u>er',
        'Weal<u>th</u>y',
        'Fa<u>th</u>er',
        'Ano<u>th</u>er',
        'Heal<u>th</u>y',
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