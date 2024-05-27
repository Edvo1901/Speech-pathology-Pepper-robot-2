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