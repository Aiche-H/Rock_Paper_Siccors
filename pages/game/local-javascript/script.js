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
// Function to generate a random computer choice
function generateComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to update the result text
function updateResultText(result, userChoice, computerChoice) {
  RESULT_TEXT.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
  if (result === "It's a tie!") {
    RESULT_TEXT.style.color = "white";
  } else if (result === "You win!") {
    RESULT_TEXT.style.color = "green";
  } else {
    RESULT_TEXT.style.color = "maroon";
  }
}

// Function to play the game
function playGame(userChoice) {
  const computerChoice = generateComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  updateResultText(result, userChoice, computerChoice);
}