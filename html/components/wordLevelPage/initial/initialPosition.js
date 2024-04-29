document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../wordLevelPage.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = '../medial/medialPosition.html';
    });

    // List of words or phrases to choose from
    const words = [
        '<u>Th</u>ree',
        '<u>Th</u>ick',
        '<u>Th</u>row',
        '<u>Th</u>eatre',
        '<u>Th</u>ursday',
        '<u>Th</u>irsty',
        '<u>Th</u>eir',
        '<u>Th</u>ermometer',
        '<u>Th</u>read',
        '<u>Th</u>ank you',
        '<u>Th</u>igh',
        '<u>Th</u>roat',
        '<u>Th</u>hongs',
        '<u>Th</u>ink',
        '<u>Th</u>irty',
        '<u>Th</u>under',
        '<u>Th</u>ird',
    ];

    // Function to shuffle an array
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

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

    const buttons = document.querySelectorAll('.word-button');

    // Assign a random word from the array to each button
    buttons.forEach((button, index) => {
        if (index < words.length) {
            button.innerHTML = words[index];
        }
    });
});


