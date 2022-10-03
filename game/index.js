const prompt = require("prompt-sync")({ sigint: true });

function newGame() {
  let target = Math.round(Math.random() * 100);

  function game() {
    let userGuess = Number(prompt("Your guess: "));
    if (userGuess != userGuess) {
      console.log("Invalid guess");
      game();
      return;
    }

    if (userGuess === target) {
      console.log("You won!");
      console.log("--------------------");

      again = false;
      let againPrompt = prompt("Would you like to play again? (y/n): ");

      if (againPrompt === "y" || againPrompt === "Y") {
        again = true;
        console.log("\n");
      }

      if (again) {
        newGame();
      } else {
        console.log("Thanks for playing!");
      }
    } else if (userGuess < target) {
      console.log("Guess higher!");
      game();
    } else if (userGuess > target) {
      console.log("Guess lower!");
      game();
    } else {
      console.log("Error");
    }
  }

  console.log("Guess the correct number (1-100)");
  console.log("--------------------");
  game();
}

newGame();
