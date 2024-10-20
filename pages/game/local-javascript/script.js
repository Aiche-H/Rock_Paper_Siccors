const CHOICES = ["rock", "paper", "scissors"];
const ROCK = document.getElementById('rock')
const PAPER = document.getElementById('paper')
const SCISSORS = document.getElementById("scissors");
const RESULT_TEXT = document.getElementById("result");

// Add event listeners to each choice button
ROCK.addEventListener("click", function () {
  playGame("rock");
});

PAPER.addEventListener("click", function () {
  playGame("paper");
});

SCISSORS.addEventListener("click", function () {
  playGame("scissors");
});

// Function to play the game
function playGame(userChoice) {
  // Generate a random computer choice
  const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];

  // Determine the winner
  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
    RESULT_TEXT.style.color = "white";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You win!";
    RESULT_TEXT.style.color = "green";
  } else {
    result = "Computer wins!";
    RESULT_TEXT.style.color = "maroon";
  }

  // Display the result
  RESULT_TEXT.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}