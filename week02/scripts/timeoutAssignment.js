const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("startButton");
let countdown = 10;

startButton.addEventListener("click", function() {
  setInterval(() => {
    if (countdown >= 0) {
      countdownDisplay.textContent = countdown;
      countdown--;
    } else {
      setTimeout(() => {
        if (countdown < 0) {
          countdownDisplay.textContent = "Time's up!";
        }
      });
    }
  }, 1000);
})