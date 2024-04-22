document.addEventListener('DOMContentLoaded', function() {

    var session = new QiSession(function () {
        session = s;
    }, disconnected,location.host);

    function disconnected(error) {console.log("Session disconnected");}

    document.getElementById('eeButtonSound').addEventListener('click',function(){
        session.service("ALTextToSpeech").done(function (tts) {
            tts.say("ee as in beach");
        }).fail(function (error) {
        console.log("An error occurred:", error);
        });
    });

    document.getElementById('backToPreviousPage').addEventListener('click', function() {
        window.location.href = '../breakPage/stretchBreak.html';
    });

    document.getElementById('backToHomePage').addEventListener('click', function() {
        window.location.href = '../lessonSelection/lessonSelection.html';
    });

    document.getElementById('nextStep').addEventListener('click', function() {
        window.location.href = '../breakPage/movementBreak.html';
    });
});

