const randomNumber = Math.floor(Math.random() * 100) + 1;

//getting the values
const submitButton = document.querySelector("#find__number");
const restartGameBtn = document.querySelector("#restart__number");
const userInput = document.querySelector("#number");
const guessesArray = document.querySelector("#previous__guesses");
const result = document.querySelector("#result");
const attemptsLeft = document.querySelector("#attempts");
// const p = document.createElement("p");

let prevGuesses = [];
// console.log("🚀 ~ prevGuesses:", prevGuesses)
let attempts = 10;
// console.log("🚀 ~ attempts:", attempts);
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const userValue = userInput.value.trim();
    const userNumber = parseInt(userValue);
    // console.log("🚀 ~ userNumber:", userNumber);
    checkNumber(userNumber);
  });
}

//function to check the number is valid or not

function checkNumber(number) {
  if (isNaN(number)) {
    displayMessage(`Please enter a valid number`);
  } else if (number < 1 || number > 100) {
    displayMessage(
      `Please enter a number between 1 and 100, your number (${number}) does not fall in this range `
    );
  } else if (prevGuesses.includes(number)) {
    displayMessage(`You have already guessed this number`);
  } else {
    if (attempts > 0) {
      prevGuesses.push(number);
      attempts--;
      checkGuess(number);
    } else {
      displayMessage(`You have reached the maximum number of attempts, the number was ${randomNumber}, better luck next time`);
      endGame();
    }
  }
}

//function to check the attempts left

function checkGuess(number) {
  if (number === randomNumber) {
    displayMessage("Congratulations! You have guessed the correct number");
    endGame();
    displayResult();
  } else if (number < randomNumber) {
    displayMessage("Too Low! Try Again");
    displayPreviousGuesses();
  } else if (number > randomNumber) {
    displayMessage("Too High! Try Again");
    displayPreviousGuesses();
  }
}


//function to display the result

function displayResult() {
  userInput.value = "";
  guessesArray.innerHTML = `Your previous guesses are:  [${prevGuesses}] `;
  attemptsLeft.innerHTML = `You have done it in ${10 - attempts} attempts`;
}

//function to display the message

function displayMessage(message) {
  result.innerHTML = message;
}

//function to display the previous guesses

function displayPreviousGuesses() {
  guessesArray.innerHTML = `Your previous guesses are: ${prevGuesses}`;
  attemptsLeft.innerHTML = `You have ${attempts} attempts left`;
  userInput.value = "";
}

//function to restart the game

function restartGame() {
  restartGameBtn.addEventListener("click", function (e) {
    attempts = 1;
    prevGuesses = [];
    result.innerHTML = "Let's get started to explore the treasure of curiosity";
    guessesArray.innerHTML = "";
    attemptsLeft.innerHTML = "You have 10 attempts to accomplish the target";
    userInput.value = "";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    playGame = true;
    userInput.removeAttribute("disabled");
    submitButton.removeAttribute("disabled");
  });
}
//function to end the game

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submitButton.setAttribute("disabled", "");
  playGame = false;
}
