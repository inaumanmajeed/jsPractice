const randomNumber = Math.floor(Math.random() * 100) + 1;

//getting the values
const submitButton = document.querySelector("#find__number");
const userInput = document.querySelector("#number");
const guessesArray = document.querySelector("#previous__guesses");
const result = document.querySelector("#result");
const attemptsLeft = document.querySelector("#attempts");
const p = document.createElement("p");

let prevGuesses = [];
let attempts = 1;
console.log("🚀 ~ attempts:", attempts)
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const userValue = userInput.value.trim(); // Trim any whitespace
    const userNumber = parseInt(userValue); // Parse the input as an integer
    console.log("🚀 ~ userNumber:", userNumber);
    checkNumber(userNumber);
  });
}

//function to check the number is valid or not

function checkNumber(number) {
  if (isNaN(number)) {
    console.log("Please enter a valid number");
  } else if (number < 1 || number > 100) {
    console.log("Please enter a number between 1 and 100");
  } else if (prevGuesses.includes(number)) {
    console.log("You have already guessed this number");
  } else {
    prevGuesses.push(number);
    attempts++;
    checkGuess(number);
  }
}

//function to check the attempts left

function checkGuess() {}

//function to display the result

function displayResult() {}

//function to display the message

function displayMessage(message) {}

//function to display the previous guesses

function displayPreviousGuesses() {}

//function to restart the game

function restartGame() {}
//function to end the game

function endGame() {}
