// import * as qimessaging from "/libs/qimessaging/2/qimessaging.js";
// import * as qi from "/libs/qi/2/qi.js";
// import * as min from "https://cdnjs.cloudflare.com/ajax/libs/qi-js/2.10.3/qi.min.js";
// import * as promise from "https://www.promisejs.org/polyfills/promise-6.0.0.min.js";

// var session = new qimessaging.QiSession(function () {
//     session = s;
// }, disconnected,location.host);

// function disconnected(error) {
//     console.log("Session disconnected");
//     displayDiv.textContent = "Session disconnected";
// }

// session.service("ALTextToSpeech").done(function (tts) {
//     tts.say("ee as in beach");
// }).fail(function (error) {
// console.log("An error occurred:", error);
// });

document.addEventListener('DOMContentLoaded', function() {

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

