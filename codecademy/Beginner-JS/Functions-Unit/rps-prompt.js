
/*
Adapted to include node.js/prompt integration from Codecademy's Learn JavaScript course, Functions Unit:
https://www.codecademy.com/learn/introduction-to-javascript
*/

/*
The possible outcomes are:
    - Rock destroys scissors.
    - Scissors cut paper.
    - Paper covers rock.
    - If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
    1. Get the user’s choice.
    2. Get the computer’s choice.
    3. Compare the two choices and determine a winner.
    4. Start the program and display the results.

    Reference: https://www.codecademy.com/article/getting-user-input-in-node-js
*/

const prompt = require('prompt-sync')();
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Not a valid selection.");
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "the computer gives up.";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "User wins!";
  }

  if (userChoice === computerChoice) {
    return "The game was a draw.";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer wins.";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer wins.";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer wins.";
    } else {
      return "You win!";
    }
  }
};

const playGame = () => {
  let userInput = prompt("Make your choice: ");
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log(
    `You selected ${userChoice} and the computer selected ${computerChoice}.`
  );
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
