$(document).ready(function() {
    const correctPassword = '123456'; // Set your password here

    $('#sendButton').click(function() {
        $('#passwordModal').css('display', 'block');
    });

    $('.close').click(function() {
        $('#passwordModal').css('display', 'none');
    });

    $(window).click(function(event) {
        if (event.target.id === 'passwordModal') {
            $('#passwordModal').css('display', 'none');
        }
    });

    $('#submitPassword').click(function() {
        const enteredPassword = $('#passwordInput').val();
        if (enteredPassword === correctPassword) {
            alert('Password correct. Form submitted.');
            $('#passwordModal').css('display', 'none');
            // Place your form submission logic here
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('homeButton').addEventListener('click', function() {
        window.location.href = '../lessonSelection/lessonSelection.html';
    });
});