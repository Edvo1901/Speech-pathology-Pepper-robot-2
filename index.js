import QiSession from 'QiSession'

QiSession(function (s) {
    console.log("connected!");
    // you can now use your QiSession
    session = s
}, function () {
    console.log("disconnected");
});

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.forEach.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
});

RobotUtils.onServices(function (ALLeds, ALTextToSpeech) {
    ALTextToSpeech.say("Tell us more about your experience.");
});

