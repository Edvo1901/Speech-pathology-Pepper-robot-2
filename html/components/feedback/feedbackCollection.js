document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".feedback-image").forEach((image) => {
		image.addEventListener("click", function () {
			var feedbackType = this.alt;
			sendFeedback(feedbackType);
		});
	});
});

// Function to send feedback and store it in local storage
function sendFeedback(feedbackType) {
    // Retrieve the current feedback data from local storage
    var feedbackData = localStorage.getItem("feedbackData");

    // Get data if the local storage has data. Otherwise, create a new one
    feedbackData = feedbackData ? JSON.parse(feedbackData) : {};

    // Check if feedbackType already exists in feedbackData
    if (feedbackData[feedbackType]) {
        // If it exists, increment the count
        feedbackData[feedbackType] += 1;
    } else {
        // If it does not exist, initialise the count to 1
        feedbackData[feedbackType] = 1;
    }
    // Save the updated feedback data back to local storage
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
}