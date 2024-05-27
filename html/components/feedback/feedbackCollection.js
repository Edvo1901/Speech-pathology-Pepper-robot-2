document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".feedback-image").forEach((image) => {
		image.addEventListener("click", function () {
			var feedbackType = this.alt;
			sendFeedback(feedbackType);
		});
	});
});