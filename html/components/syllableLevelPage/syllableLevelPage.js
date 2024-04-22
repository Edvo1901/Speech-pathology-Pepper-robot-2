var session = new QiSession(function () {
    session = s;
}, disconnected,location.host);

function connected(s) {}
function disconnected(error) {console.log("Session disconnected");}

// session.service("ALMemory").done(function (memory) {

//     //this dont work, research more
//     memory.raiseEvent("stepEight", "step eight is running")

function ee(session)
{
    session.service("ALTextToSpeech").done(function (tts) {
        tts.say("ee as in beach");
    }).fail(function (error) {
    console.log("An error occurred:", error);
    });
};



document.addEventListener('DOMContentLoaded', function(session) {
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