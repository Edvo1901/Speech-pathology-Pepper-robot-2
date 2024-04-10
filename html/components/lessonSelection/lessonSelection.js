document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lessonSelectionNavigate').addEventListener('click', function() {
        window.location.href = '../thPage/thPage.html';
    });
});

const qi = require("qi");

// Initialize a session with Pepper
const session = new qi.Session();
session.socket().connect("your_robot_ip:9559"); // Replace with your robot's IP

// Call a Choregraphe behavior
session.service("ALBehaviorManager").then((behaviorManager) => {
    const behaviorName = "my_dance_behavior"; // Replace with your behavior's name
    behaviorManager.runBehavior(behaviorName).then(() => {
        console.log(`Behavior "${behaviorName}" started successfully.`);
    }).catch((error) => {
        console.error(`Error starting behavior: ${error.message}`);
    });
}).catch((error) => {
    console.error(`Error connecting to ALBehaviorManager: ${error.message}`);
});