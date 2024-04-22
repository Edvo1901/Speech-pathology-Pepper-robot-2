var session = new QiSession(function () {
    session = s;
}, disconnected,location.host);

function connected(s) {
    //If you want to subscribe so some events (to send info pepper->tablet) call the function here
}
function disconnected(error) {
    console.log("Session disconnected");
    displayDiv.textContent = "Session disconnected";
}

session.service("ALMemory").done(function (memory) {

    //this dont work, research more
    memory.raiseEvent("stepFive", "step five is running");





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


});