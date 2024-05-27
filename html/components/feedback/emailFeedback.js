// Initialise email
(function() {
    emailjs.init("C23If__KQRFS7qbwo");
})();

function sendEmail() {
    var templateParams = {
        sent_email: 'leunghoihang@gmail.com',
        from_date: '2024-05-22',
        to_name: 'Hoi',
        from_name: 'Gordon',
        message: 'testing sending email',
    };

    emailjs.send('pepperFeedbackEmail', 'template_ik4347p', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
