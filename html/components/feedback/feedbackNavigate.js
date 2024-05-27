document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("homeButton").addEventListener("click", function () {
        window.location.href = "../lessonSelection/lessonSelection.html";
    });

    document.querySelectorAll(".feedback-image").forEach((image) => {
		image.addEventListener("click", function () {
			var feedbackType = this.alt;
			sendFeedback(feedbackType);
		});
	});
});