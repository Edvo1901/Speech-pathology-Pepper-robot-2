$(document).ready(function () {
	var correctPassword = "123456"; // Set your password here

	$("#sendButton").click(function () {
		$("#passwordModal").css("display", "block");
	});

	$(".close").click(function () {
		$("#passwordModal").css("display", "none");
        $("#emailModal").css("display", "none");
	});

	$(window).click(function (event) {
		if (event.target.id === "passwordModal") {
			$("#passwordModal").css("display", "none");
		}
	});

	$("#submitPassword").click(function () {
		var enteredPassword = $("#passwordInput").val();
		if (enteredPassword === correctPassword) {
			$("#passwordModal").css("display", "none");
            $("#emailModal").css("display", "block");
		} else {
			alert("Incorrect password. Please try again.");
		}
	});

    $("#submitEmail").click(function () {
        var enteredEmail = $("#emailInput").val();

        if (enteredEmail) {
            $("#passwordModal").css("display", "none");
            $("#emailModal").css("display", "none");
            // Initialising EmailJS
            emailjs.init("C23If__KQRFS7qbwo");
            sendEmail(enteredEmail);
        } else {
            alert("Enter an email!")
        }
	});
});

function getCurrentDate() {
    var date = new Date();
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to send an email with feedback data
function sendEmail(enteredEmail) {
	// Retrieve feedback data from local storage
	var feedbackData = localStorage.getItem("feedbackData");
	feedbackData = feedbackData ? JSON.parse(feedbackData) : {};

	// Convert feedback data to a readable format
	var feedbackText = "";
	for (var [key, value] of Object.entries(feedbackData)) {
		feedbackText += `${key}: ${value}\n`;
	}

    // Email template
	var templateParams = {
		sendEmail: enteredEmail,
		date: getCurrentDate(),
		message: `Feedback data:\n\n${feedbackText}`,
	};

	emailjs.send("pepperFeedbackEmail", "weeklyEmailTemp", templateParams).then(
		function (response) {
			//console.log("SUCCESS!", response.status, response.text);
            alert("Email sent!")
		},
		function (error) {
			//console.log("FAILED...", error);
            alert("Something went wrong!!")
		}
	);
}