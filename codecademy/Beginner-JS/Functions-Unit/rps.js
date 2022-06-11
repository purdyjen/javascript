/*
From Codecademy's Learn JavaScript course, Functions Unit:
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
*/
//gets the user choice via a parameter and verifies that the argument is a valid choice
const getUserChoice = (userInput) => {
    // converts userInput to all lowercase for evaluation
  userInput = userInput.toLowerCase();

  // evaluates userInput and ensures that it matches one of the four valid options
  // if no match, logs "Not a valid selection."
  // "bomb" is a cheat code to ensure the user always wins if they select it
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

// generates a random number and assigns the computer choice accordingly
const assignComputerChoice = () => {
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


// core logic of the game, requires two arguments
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

// declares variables to call getUserChoice (with argument hardcoded) and assignComputerChoice and assigns results to corresponding variable and inserts both as arguments for the determineWinner function
const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = assignComputerChoice();
  console.log(
    `You selected ${userChoice} and the computer selected ${computerChoice}.`
  );
  console.log(determineWinner(userChoice, computerChoice));
};

// starts the game
playGame();
